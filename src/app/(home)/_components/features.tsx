import React from "react";

import { useTranslations } from "next-intl";

import { CheckCircle, Shield, Image, Zap, Sparkles, Heart, Monitor } from "lucide-react";

import { homeSections } from "@/lib/constants";

export function Features() {
  const t = useTranslations("pages.home.features");

  const features = [
    {
      icon: Shield,
      titleKey: "cards.free.title",
      descriptionKey: "cards.free.description",
      gradient: "from-green-400 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    },
    {
      icon: CheckCircle,
      titleKey: "cards.noRegistration.title",
      descriptionKey: "cards.noRegistration.description",
      gradient: "from-blue-400 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    },
    {
      icon: Zap,
      titleKey: "cards.fast.title",
      descriptionKey: "cards.fast.description",
      gradient: "from-yellow-400 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20",
    },
    {
      icon: Image,
      titleKey: "cards.hdQuality.title",
      descriptionKey: "cards.hdQuality.description",
      gradient: "from-purple-400 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    },
  ];

  return (
    <section
      id={homeSections.features}
      className="relative w-full scroll-mt-12 overflow-hidden bg-gradient-to-b from-white to-gray-50/50 py-16 md:py-24 dark:from-gray-900 dark:to-gray-800/50"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-200/20 rounded-full blur-xl animate-pulse dark:bg-purple-800/20"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-pink-200/20 rounded-full blur-xl animate-pulse delay-1000 dark:bg-pink-800/20"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 text-sm font-medium text-purple-700 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300">
              <Heart className="h-4 w-4" />
              {t("badge")}
            </div>
            <h2 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl dark:from-white dark:to-gray-300">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-[800px] text-lg text-gray-600 md:text-xl dark:text-gray-300">
              {t("description")}
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${feature.bgGradient} p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20 dark:border-gray-700/20`}
                >
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  
                  <div className="relative flex flex-col items-center space-y-4 text-center">
                    <div className={`rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t(feature.descriptionKey)}
                    </p>
                  </div>

                  {/* Sparkle animation */}
                  <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
