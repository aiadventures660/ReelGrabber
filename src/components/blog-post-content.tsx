"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { getBlogPostsByLocale, BlogPost } from "@/lib/blog-data";

export function BlogPostContent() {
  const params = useParams();
  const locale = useLocale();
  const t = useTranslations('blog');
  const blogPosts = getBlogPostsByLocale(locale);
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {locale === 'en-US' ? 'Post Not Found' :
           locale === 'es-ES' ? 'Publicación No Encontrada' :
           locale === 'de-DE' ? 'Beitrag Nicht Gefunden' :
           locale === 'fr-FR' ? 'Article Non Trouvé' :
           'Статья Не Найдена'}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {locale === 'en-US' ? 'The blog post you are looking for does not exist.' :
           locale === 'es-ES' ? 'La publicación del blog que buscas no existe.' :
           locale === 'de-DE' ? 'Der Blogbeitrag, den Sie suchen, existiert nicht.' :
           locale === 'fr-FR' ? "L'article de blog que vous recherchez n'existe pas." :
           'Статья блога, которую вы ищете, не существует.'}
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('backToBlog')}
        </Link>
      </div>
    );
  }

  // Dynamic content based on post and locale
  const getBlogContent = () => {
    return (
      <div className="prose prose-lg max-w-none">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {locale === 'en-US' ? 'Welcome to this guide!' : 
             locale === 'es-ES' ? '¡Bienvenido a esta guía!' :
             locale === 'de-DE' ? 'Willkommen zu diesem Leitfaden!' :
             locale === 'fr-FR' ? 'Bienvenue dans ce guide !' :
             'Добро пожаловать в это руководство!'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {locale === 'en-US' ? 'This comprehensive guide will walk you through everything you need to know about downloading Instagram content using ReelGrabber.' :
             locale === 'es-ES' ? 'Esta guía completa te llevará a través de todo lo que necesitas saber sobre descargar contenido de Instagram usando ReelGrabber.' :
             locale === 'de-DE' ? 'Diese umfassende Anleitung führt Sie durch alles, was Sie über das Herunterladen von Instagram-Inhalten mit ReelGrabber wissen müssen.' :
             locale === 'fr-FR' ? 'Ce guide complet vous guidera à travers tout ce que vous devez savoir sur le téléchargement de contenu Instagram avec ReelGrabber.' :
             'Это подробное руководство проведет вас через все, что вам нужно знать о загрузке контента Instagram с помощью ReelGrabber.'}
          </p>
          
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-3">
              {locale === 'en-US' ? 'Ready to get started?' :
               locale === 'es-ES' ? '¿Listo para empezar?' :
               locale === 'de-DE' ? 'Bereit anzufangen?' :
               locale === 'fr-FR' ? 'Prêt à commencer ?' :
               'Готовы начать?'}
            </h3>
            <p className="text-purple-100 mb-4">
              {locale === 'en-US' ? 'Use ReelGrabber to download Instagram content quickly and safely.' :
               locale === 'es-ES' ? 'Usa ReelGrabber para descargar contenido de Instagram de forma rápida y segura.' :
               locale === 'de-DE' ? 'Verwenden Sie ReelGrabber, um Instagram-Inhalte schnell und sicher herunterzuladen.' :
               locale === 'fr-FR' ? 'Utilisez ReelGrabber pour télécharger du contenu Instagram rapidement et en toute sécurité.' :
               'Используйте ReelGrabber для быстрой и безопасной загрузки контента Instagram.'}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-purple-600 px-4 py-2 font-semibold transition-all duration-200 hover:scale-105"
            >
              <Download className="h-4 w-4" />
              {locale === 'en-US' ? 'Start Downloading' :
               locale === 'es-ES' ? 'Comenzar a Descargar' :
               locale === 'de-DE' ? 'Download starten' :
               locale === 'fr-FR' ? 'Commencer à Télécharger' :
               'Начать Загрузку'}
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Back to Blog */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('backToBlog') || 'Back to Blog'}
      </Link>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 mb-4">
          <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium">
            {post.category}
          </span>
          <span className="text-gray-500 dark:text-gray-400">•</span>
          <span>{post.readTime}</span>
        </div>
        
        <h1 className="bg-gradient-to-br from-gray-900 via-purple-900 to-orange-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-white dark:via-purple-200 dark:to-orange-200 mb-6">
          {post.title}
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {post.description}
        </p>
      </header>

      {/* Article Content */}
      <article>
        {getBlogContent()}
      </article>
    </>
  );
}
