import React from "react";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

import { Copy, Download, Clipboard, Play, ArrowRight } from "lucide-react";

import { homeLinks, homeSections } from "@/lib/constants";

export function HowItWorks() {
  const t = useTranslations("pages.home.howItWorks");

  const steps = [
    {
      number: 1,
      icon: Copy,
      titleKey: "steps.copy.title",
      descriptionKey: "steps.copy.descriptionDesktop",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/40",
    },
    {
      number: 2,
      icon: Clipboard,
      titleKey: "steps.paste.title",
      descriptionKey: "steps.paste.descriptionDesktop",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/40",
    },
    {
      number: 3,
      icon: Download,
      titleKey: "steps.download.title",
      descriptionKey: "steps.download.descriptionDesktop",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/40",
    },
  ];

  return (
    <section
      id={homeSections.howItWorks}
      className="relative w-full scroll-mt-12 overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 py-16 md:py-24 dark:from-gray-900 dark:via-purple-950/10 dark:to-pink-950/10"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-purple-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-pink-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 text-sm font-medium text-purple-700 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300">
              <Play className="h-4 w-4" />
              {t("badge")}
            </div>
            <h2 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl dark:from-white dark:to-gray-300">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-[800px] text-lg text-gray-600 md:text-xl dark:text-gray-300">
              {t("description")}
            </p>
          </div>

          {/* Desktop version */}
          <div className="relative mx-auto mt-16 hidden w-full max-w-6xl md:block">
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative">
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-8 left-full z-0 hidden lg:block">
                        <ArrowRight className="h-6 w-6 text-purple-300 transform translate-x-4" />
                      </div>
                    )}
                    
                    <div className="relative flex flex-col items-center space-y-6">
                      <div className={`z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${step.gradient} text-xl font-bold text-white shadow-xl`}>
                        {step.number}
                      </div>
                      <div className={`group h-full rounded-3xl bg-gradient-to-br ${step.bgGradient} p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20 dark:border-gray-700/20`}>
                        <div className="mb-6 flex justify-center">
                          <div className={`rounded-xl bg-gradient-to-r ${step.gradient} p-3 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                          {t(step.titleKey)}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {t(step.descriptionKey)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile version with vertical steps */}
          <div className="relative mx-auto w-full max-w-sm space-y-8 md:hidden">
            {/* Vertical connecting line */}
            <div className="absolute top-0 bottom-16 left-8 w-0.5 bg-gradient-to-b from-purple-300 to-pink-300"></div>

            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex items-start space-x-6">
                  <div className={`z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r ${step.gradient} font-bold text-white shadow-lg`}>
                    {step.number}
                  </div>
                  <div className={`flex-1 rounded-2xl bg-gradient-to-br ${step.bgGradient} p-6 shadow-lg border border-white/20 dark:border-gray-700/20`}>
                    <div className="mb-3 flex items-center">
                      <div className={`rounded-lg bg-gradient-to-r ${step.gradient} p-2 mr-3 shadow-md`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {t(step.titleKey)}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t(step.descriptionKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={homeLinks.hero}>{t("ctaButton")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
