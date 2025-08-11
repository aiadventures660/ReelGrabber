import React from "react";

import { useTranslations } from "next-intl";

import { ArrowDown, Sparkles, Download, Zap } from "lucide-react";

import { homeLinks, homeSections } from "@/lib/constants";
import { InstagramForm } from "@/components/instagram-form";

export function Hero() {
  const t = useTranslations("pages.home.hero");

  return (
    <section
      id={homeSections.hero}
      className="relative w-full scroll-mt-16 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32 xl:pt-20 xl:pb-48 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-orange-400/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-400/5 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/5 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 text-sm font-medium text-purple-700 shadow-lg dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300">
            <Sparkles className="h-4 w-4" />
            Free Social Media Downloader
          </div>

          {/* Main heading */}
          <div className="max-w-6xl space-y-6 text-balance">
            <h1 className="bg-gradient-to-br from-gray-900 via-purple-900 to-orange-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl dark:from-white dark:via-purple-200 dark:to-orange-200">
              {t("title")}
            </h1>
            <p className="mx-auto max-w-[800px] text-lg text-gray-600 md:text-xl lg:text-2xl dark:text-gray-300">
              {t("description")}
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-2xl">
            <InstagramForm className="w-full" />
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2 shadow-sm dark:bg-gray-800/60">
              <Download className="h-4 w-4 text-purple-500" />
              Photos & Videos
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2 shadow-sm dark:bg-gray-800/60">
              <Zap className="h-4 w-4 text-orange-500" />
              Instant Download
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2 shadow-sm dark:bg-gray-800/60">
              <Sparkles className="h-4 w-4 text-pink-500" />
              No Registration
            </div>
          </div>

          {/* Learn more */}
          <div className="mt-12">
            <a href={homeLinks.howItWorks} className="group inline-flex flex-col items-center gap-2 transition-all hover:scale-105">
              <div className="text-gray-600 group-hover:text-purple-600 group-hover:underline dark:text-gray-400 dark:group-hover:text-purple-400">
                {t("learnMore")}
              </div>
              <ArrowDown className="h-6 w-6 animate-bounce text-purple-500 group-hover:text-purple-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
