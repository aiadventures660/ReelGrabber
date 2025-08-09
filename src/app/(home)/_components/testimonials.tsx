import React from "react";

import { useTranslations } from "next-intl";
import { Star, Users, Download, TrendingUp } from "lucide-react";

import { homeSections } from "@/lib/constants";

export function Testimonials() {
  const t = useTranslations("pages.home.testimonials");

  const stats = [
    {
      value: "50K+",
      label: t("stats.downloads"),
      icon: Download,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    },
    {
      value: "100K+",
      label: t("stats.users"),
      icon: Users,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    },
    {
      value: "4.9/5",
      label: t("stats.rating"),
      icon: Star,
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20",
    },
  ];

  return (
    <section
      id={homeSections.testimonials}
      className="relative w-full overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30 py-16 md:py-24 dark:from-gray-900 dark:via-orange-950/10 dark:to-pink-950/10"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-20 w-24 h-24 bg-orange-200/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-20 w-32 h-32 bg-pink-200/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
          <div className="space-y-6">
            <h2 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl dark:from-white dark:to-gray-300">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-[800px] text-lg text-gray-600 md:text-xl dark:text-gray-300">
              {t("description")}
            </p>
          </div>

          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${stat.bgGradient} p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20 dark:border-gray-700/20`}
                >
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  
                  <div className="relative flex flex-col items-center space-y-4 text-center">
                    <div className={`rounded-2xl bg-gradient-to-r ${stat.gradient} p-3 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent md:text-5xl`}>
                      {stat.value}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </span>
                  </div>

                  {/* Sparkle animation */}
                  <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <TrendingUp className="h-4 w-4 text-purple-400 animate-pulse" />
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
