import React from "react";

import { useTranslations } from "next-intl";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { HelpCircle, Shield } from "lucide-react";

import { homeSections } from "@/lib/constants";

export function FrequentlyAsked() {
  const t = useTranslations("pages.home.frequentlyAsked");

  return (
    <section
      id={homeSections.frequentlyAsked}
      className="relative w-full scroll-mt-12 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-16 md:py-24 dark:from-gray-900 dark:via-blue-950/10 dark:to-purple-950/10"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-blue-200/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-purple-200/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-medium text-blue-700 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300">
              <HelpCircle className="h-4 w-4" />
              {t("badge")}
            </div>
            <h2 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl dark:from-white dark:to-gray-300">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[800px] text-lg text-gray-600 md:text-xl dark:text-gray-300">
              Everything you need to know about downloading Instagram videos, photos, and reels
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-8">
            {/* General */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-lg border border-white/20 dark:from-blue-950/20 dark:to-blue-900/40 dark:border-gray-700/20">
              <h3 className="mb-6 flex items-center text-xl font-bold text-gray-900 dark:text-white">
                <div className="mr-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-3 shadow-lg">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                {t("sections.general.title")}
              </h3>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-blue-200 dark:border-blue-800">
                  <AccordionTrigger className="py-4 text-left font-medium text-gray-900 hover:text-blue-600 hover:no-underline dark:text-white dark:hover:text-blue-400">
                    {t("sections.general.q1.trigger")}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-start text-gray-600 dark:text-gray-300">
                    {t("sections.general.q1.content")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-blue-200 dark:border-blue-800">
                  <AccordionTrigger className="py-4 text-left font-medium text-gray-900 hover:text-blue-600 hover:no-underline dark:text-white dark:hover:text-blue-400">
                    {t("sections.general.q2.trigger")}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-start text-gray-600 dark:text-gray-300">
                    {t("sections.general.q2.content")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-blue-200 dark:border-blue-800">
                  <AccordionTrigger className="py-4 text-left font-medium text-gray-900 hover:text-blue-600 hover:no-underline dark:text-white dark:hover:text-blue-400">
                    {t("sections.general.q3.trigger")}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-start text-gray-600 dark:text-gray-300">
                    {t("sections.general.q3.content")}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Technical */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 p-8 shadow-lg border border-white/20 dark:from-purple-950/20 dark:to-purple-900/40 dark:border-gray-700/20">
              <h3 className="mb-6 flex items-center text-xl font-bold text-gray-900 dark:text-white">
                <div className="mr-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 p-3 shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                {t("sections.technical.title")}
              </h3>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-4" className="border-b border-purple-200 dark:border-purple-800">
                  <AccordionTrigger className="py-4 text-left font-medium text-gray-900 hover:text-purple-600 hover:no-underline dark:text-white dark:hover:text-purple-400">
                    {t("sections.technical.q1.trigger")}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-start text-gray-600 dark:text-gray-300">
                    {t("sections.technical.q1.content")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-b border-purple-200 dark:border-purple-800">
                  <AccordionTrigger className="py-4 text-left font-medium text-gray-900 hover:text-purple-600 hover:no-underline dark:text-white dark:hover:text-purple-400">
                    {t("sections.technical.q2.trigger")}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-start text-gray-600 dark:text-gray-300">
                    {t("sections.technical.q2.content")}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
