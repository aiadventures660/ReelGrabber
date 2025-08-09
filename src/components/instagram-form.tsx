"use client";

import React from "react";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Download, Loader2, X, Clipboard } from "lucide-react";

import { cn, getPostShortcode, isShortcodePresent } from "@/lib/utils";
import { useGetInstagramPostMutation } from "@/features/react-query/mutations/instagram";
import { HTTP_CODE_ENUM } from "@/features/api/http-codes";

// 5 minutes
const CACHE_TIME = 5 * 60 * 1000;

const useFormSchema = () => {
  const t = useTranslations("components.instagramForm.inputs");

  return z.object({
    url: z
      .string({ required_error: t("url.validation.required") })
      .trim()
      .min(1, {
        message: t("url.validation.required"),
      })
      .startsWith("https://www.instagram.com", t("url.validation.invalid"))
      .refine(
        (value) => {
          return isShortcodePresent(value);
        },
        { message: t("url.validation.invalid") }
      ),
  });
};

function triggerDownload(url: string, isVideo: boolean = true, index?: number) {
  // Ensure we are in a browser environment
  if (typeof window === "undefined") return;

  const randomTime = new Date().getTime().toString().slice(-8);
  const extension = isVideo ? "mp4" : "jpg";
  const indexSuffix = index !== undefined ? `-${index + 1}` : "";
  const filename = `reelgrabber.app-${randomTime}${indexSuffix}.${extension}`;

  // Construct the URL to your proxy API route
  const proxyUrl = new URL("/api/download-proxy", window.location.origin);
  proxyUrl.searchParams.append("url", url);
  proxyUrl.searchParams.append("filename", filename);

  console.log("Using proxy URL:", proxyUrl.toString()); // For debugging

  const link = document.createElement("a");
  // Set href to your proxy route
  link.href = proxyUrl.toString();
  link.target = "_blank";

  // The 'download' attribute here is less critical because the proxy
  // sets the Content-Disposition header, but it can still be helpful
  // as a fallback or hint for the browser. Keep the desired filename.
  link.setAttribute("download", filename);

  // Append link to the body temporarily
  document.body.appendChild(link);

  // Programmatically click the link to trigger the download
  link.click();

  // Clean up and remove the link
  document.body.removeChild(link);
}

type CachedUrl = {
  videoUrl?: string;
  expiresAt: number;
  invalid?: {
    messageKey: string;
  };
};

export function InstagramForm(props: { className?: string }) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const cachedUrls = React.useRef(new Map<string, CachedUrl>());

  const t = useTranslations("components.instagramForm");

  const {
    isError,
    isPending,
    mutateAsync: getInstagramPost,
  } = useGetInstagramPostMutation();

  const formSchema = useFormSchema();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  const errorMessage = form.formState.errors.url?.message;
  const urlValue = form.watch("url");

  const isDisabled = isPending || (!form.formState.isDirty && !urlValue.trim());
  const isShowClearButton = urlValue.length > 0;

  function clearUrlField() {
    form.setValue("url", "", { shouldDirty: false });
    form.clearErrors("url");
    inputRef.current?.focus();
  }

  async function pasteFromClipboard() {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        form.setValue("url", text, { shouldDirty: true, shouldValidate: true });
        form.clearErrors("url");
      }
    } catch (error) {
      console.error("Failed to read clipboard:", error);
      toast.error("Failed to paste from clipboard", {
        position: "top-center",
        duration: 2000,
      });
    }
  }

  function setCachedUrl(
    shortcode: string,
    videoUrl?: string,
    invalid?: CachedUrl["invalid"]
  ) {
    cachedUrls.current?.set(shortcode, {
      videoUrl,
      expiresAt: Date.now() + CACHE_TIME,
      invalid,
    });
  }

  function getCachedUrl(shortcode: string) {
    const cachedUrl = cachedUrls.current?.get(shortcode);

    if (!cachedUrl) {
      return null;
    }

    if (cachedUrl.expiresAt < Date.now()) {
      cachedUrls.current.delete(shortcode);
      return null;
    }

    return cachedUrl;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (isError) {
      toast.dismiss("toast-error");
    }

    const shortcode = getPostShortcode(values.url);

    if (!shortcode) {
      form.setError("url", { message: t("inputs.url.validation.invalid") });
      return;
    }

    const cachedUrl = getCachedUrl(shortcode);
    if (cachedUrl?.invalid) {
      form.setError("url", { message: t(cachedUrl.invalid.messageKey) });
      return;
    }

    // For cached single media, re-download
    if (cachedUrl?.videoUrl && !cachedUrl.videoUrl.includes(" files")) {
      const isVideo = cachedUrl.videoUrl.includes('.mp4') || cachedUrl.videoUrl.includes('video');
      triggerDownload(cachedUrl.videoUrl, isVideo);
      return;
    }

    try {
      const { data, status } = await getInstagramPost({ shortcode });

      if (status === HTTP_CODE_ENUM.OK) {
        const media = data.data.xdt_shortcode_media;
        
        // Handle carousel posts (multiple images/videos)
        if ((media.__typename === "GraphSidecar" || media.__typename === "XDTGraphSidecar") && media.edge_sidecar_to_children) {
          const children = media.edge_sidecar_to_children.edges;
          let downloadCount = 0;
          
          for (let i = 0; i < children.length; i++) {
            const child = children[i].node;
            const downloadUrl = child.is_video ? child.video_url : child.display_url;
            
            if (downloadUrl) {
              // Add a small delay between downloads to avoid overwhelming the browser
              setTimeout(() => {
                triggerDownload(downloadUrl, child.is_video, i);
              }, i * 500); // 500ms delay between each download
              downloadCount++;
            }
          }
          
          if (downloadCount > 0) {
            setCachedUrl(shortcode, `${downloadCount} files`);
            toast.success(t("toasts.success") + ` (${downloadCount} files)`, {
              id: "toast-success",
              position: "top-center",
              duration: 2000,
            });
          } else {
            throw new Error("No downloadable media found");
          }
        } 
        // Handle single media posts (video or photo)
        else {
          const downloadUrl = media.is_video ? media.video_url : media.display_url;
          
          if (downloadUrl) {
            triggerDownload(downloadUrl, media.is_video);
            setCachedUrl(shortcode, downloadUrl);
            const mediaType = media.is_video ? "video" : "photo";
            toast.success(t("toasts.success") + ` (${mediaType})`, {
              id: "toast-success",
              position: "top-center",
              duration: 1500,
            });
          } else {
            throw new Error("Media URL not found");
          }
        }
      } else if (
        status === HTTP_CODE_ENUM.NOT_FOUND ||
        status === HTTP_CODE_ENUM.BAD_REQUEST ||
        status === HTTP_CODE_ENUM.TOO_MANY_REQUESTS ||
        status === HTTP_CODE_ENUM.INTERNAL_SERVER_ERROR
      ) {
        const errorMessageKey = `serverErrors.${data.error}`;
        form.setError("url", { message: t(errorMessageKey) });
        if (
          status === HTTP_CODE_ENUM.BAD_REQUEST ||
          status === HTTP_CODE_ENUM.NOT_FOUND
        ) {
          setCachedUrl(shortcode, undefined, {
            messageKey: errorMessageKey,
          });
        }
      } else {
        throw new Error("Failed to fetch video");
      }
    } catch (error) {
      console.error(error);
      toast.error(t("toasts.error"), {
        dismissible: true,
        id: "toast-error",
        position: "top-center",
      });
    }
  }

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={cn("w-full space-y-4", props.className)}>
      {errorMessage ? (
        <p className="text-sm text-red-500 sm:text-start bg-red-50 dark:bg-red-900/20 rounded-lg px-3 py-2 border border-red-200 dark:border-red-800">{errorMessage}</p>
      ) : (
        <div className="h-1"></div>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="url"
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="sr-only">
                  {t("inputs.url.label")}
                </FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      {...field}
                      type="url"
                      ref={inputRef}
                      minLength={1}
                      maxLength={255}
                      placeholder={t("inputs.url.placeholder")}
                      className="h-14 bg-white/80 backdrop-blur-sm border-2 border-purple-200 focus:border-purple-400 focus:ring-purple-400/20 rounded-2xl text-lg placeholder:text-gray-400 pr-20 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-gray-800/80 dark:border-purple-700 dark:focus:border-purple-500"
                    />
                    <div className="absolute top-1/2 right-2 -translate-y-1/2 flex gap-1">
                      {!isShowClearButton && (
                        <Button
                          size="icon"
                          variant="ghost"
                          type="button"
                          onClick={pasteFromClipboard}
                          className="h-8 w-8 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-200"
                          title="Paste from clipboard"
                        >
                          <Clipboard className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </Button>
                      )}
                      {isShowClearButton && (
                        <Button
                          size="icon"
                          variant="ghost"
                          type="button"
                          onClick={clearUrlField}
                          className="h-8 w-8 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                          title="Clear input"
                        >
                          <X className="h-4 w-4 text-red-500" />
                        </Button>
                      )}
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            disabled={isDisabled}
            type="submit"
            size="lg"
            className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-lg"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                {t("submit")}
              </>
            )}
          </Button>
        </form>
      </Form>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        {t("hint")}
      </p>
    </div>
  );
}
