"use client";

import { useLocale, useTranslations } from "next-intl";
import { getBlogPostsByLocale, BlogPost } from "@/lib/blog-data";
import { formatBlogDate } from "@/lib/date-utils";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function BlogContent() {
  const locale = useLocale();
  const t = useTranslations('blog');
  const [blogPosts, setBlogPosts] = useState(() => getBlogPostsByLocale(locale));

  // Update blog posts when locale changes
  useEffect(() => {
    const posts = getBlogPostsByLocale(locale);
    setBlogPosts(posts);
  }, [locale]);

  return (
    <>
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 text-sm font-medium text-purple-700 shadow-lg dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300 mb-6">
          <Calendar className="h-4 w-4" />
          Instagram Downloader Blog
        </div>
        <h1 className="bg-gradient-to-br from-gray-900 via-purple-900 to-orange-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-white dark:via-purple-200 dark:to-orange-200">
          {t('title')}
        </h1>
        <p className="mx-auto max-w-[800px] text-lg text-gray-600 md:text-xl lg:text-2xl dark:text-gray-300 mt-6">
          {t('subtitle')}
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post: BlogPost) => (
          <article
            key={post.slug}
            className="group relative rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] dark:bg-gray-800/80"
          >
            <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 mb-4">
              <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {post.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
              {post.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {formatBlogDate(post.date)}
              </span>
              
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group"
              >
                {t('readMore')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-purple-100 mb-6">
            {t('ctaDescription')}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-white text-purple-600 px-6 py-3 font-semibold transition-all duration-200 hover:scale-105"
          >
            {t('ctaButton')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
