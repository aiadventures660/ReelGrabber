"use client";

import React from "react";

import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-is-mobile";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { LogoImage, LogoText } from "@/components/logo";
import { LocaleDropdown } from "@/features/i18n/locale-dropdown";
import { ThemeToggleButton } from "@/features/theme/theme-toggle-button";

import { Menu } from "lucide-react";

import { homeLinks } from "@/lib/constants";

export function Header() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  const t = useTranslations("layouts.home.header");

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200/20 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:border-purple-800/20 dark:bg-gray-900/80">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div
          role="button"
          onClick={scrollUp}
          className="flex cursor-pointer items-center gap-2 group transition-all duration-200 hover:scale-105"
        >
          {/* Updated logo to match footer styling */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-white"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-8l6-3.5v7L10 12z"/>
            </svg>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ReelGrabber
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center gap-8 md:flex">
          <a
            href={homeLinks.home}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
          >
            {t("links.home")}
          </a>
          <a
            href={homeLinks.features}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
          >
            {t("links.features")}
          </a>
          <a
            href={homeLinks.howItWorks}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
          >
            {t("links.howItWorks")}
          </a>
          <a
            href={homeLinks.frequentlyAsked}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
          >
            {t("links.frequentlyAsked")}
          </a>
          <a
            href={homeLinks.blog}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
          >
            {t("links.blog")}
          </a>
          <a
            href={homeLinks.privacy}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
          >
            {t("links.privacy")}
          </a>
          <a
            href={homeLinks.terms}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
          >
            {t("links.terms")}
          </a>
          <a
            href={homeLinks.disclaimer}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
          >
            {t("links.disclaimer")}
          </a>

          <div className="border-border flex items-center gap-3 border-l border-purple-200/30 pl-6 dark:border-purple-800/30">
            <LocaleDropdown />
            <ThemeToggleButton />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="ml-auto flex items-center md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-purple-50 dark:hover:bg-purple-900/20">
                <Menu className="h-[1.2rem] w-[1.2rem] text-purple-600" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[80%] bg-gradient-to-b from-white to-purple-50/30 pr-0 sm:w-[350px] dark:from-gray-800 dark:to-purple-900/20"
            >
              <SheetHeader className="border-b border-purple-200/30 dark:border-purple-800/30">
                <SheetTitle>
                  <div className="flex items-center gap-2">
                    <LogoImage className="h-6 w-6 text-purple-600" />
                    <LogoText />
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex h-full flex-col">
                <nav className="flex flex-col gap-4 px-4 py-6">
                  <a
                    href={homeLinks.home}
                    className="px-2 py-3 text-lg font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    onClick={() => setOpen(false)}
                  >
                    {t("links.home")}
                  </a>
                  <a
                    href={homeLinks.features}
                    className="px-2 py-3 text-lg font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    onClick={() => setOpen(false)}
                  >
                    {t("links.features")}
                  </a>

                  <a
                    href={homeLinks.howItWorks}
                    className="px-2 py-3 text-lg font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    onClick={() => setOpen(false)}
                  >
                    {t("links.howItWorks")}
                  </a>
                  <a
                    href={homeLinks.frequentlyAsked}
                    className="px-2 py-3 text-lg font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    onClick={() => setOpen(false)}
                  >
                    {t("links.frequentlyAsked")}
                  </a>
                  <a
                    href={homeLinks.blog}
                    className="px-2 py-3 text-lg font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    onClick={() => setOpen(false)}
                  >
                    {t("links.blog")}
                  </a>
                  
                  {/* Separator for legal links */}
                  <div className="border-t border-purple-200/30 dark:border-purple-800/30 my-2"></div>
                  
                  <a
                    href={homeLinks.privacy}
                    className="px-2 py-3 text-lg font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    onClick={() => setOpen(false)}
                  >
                    {t("links.privacy")}
                  </a>
                  <a
                    href={homeLinks.terms}
                    className="px-2 py-3 text-lg font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    onClick={() => setOpen(false)}
                  >
                    {t("links.terms")}
                  </a>
                  <a
                    href={homeLinks.disclaimer}
                    className="px-2 py-3 text-lg font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    onClick={() => setOpen(false)}
                  >
                    {t("links.disclaimer")}
                  </a>
                </nav>
              </div>
              <div className="border-border mt-auto border-t border-purple-200/30 px-4 py-4 dark:border-purple-800/30">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t("themeLabel")}
                    </span>
                    <ThemeToggleButton variant="outline" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t("localeLabel")}
                    </span>
                    <LocaleDropdown variant="outline" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
