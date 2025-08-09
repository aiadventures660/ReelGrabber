export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  locale: string;
}

export interface LocalizedBlogPosts {
  [locale: string]: BlogPost[];
}

export const blogPosts: LocalizedBlogPosts = {
  "en-US": [
    {
      slug: "how-to-download-instagram-videos",
      title: "How to Download Instagram Videos in 2025",
      description: "Complete step-by-step guide to downloading Instagram videos using ReelGrabber. Works for posts, reels, and stories.",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Tutorial",
      locale: "en-US",
    },
    {
      slug: "download-instagram-reels-guide",
      title: "Best Way to Download Instagram Reels",
      description: "Learn the fastest method to download Instagram reels in high quality. No app installation required.",
      date: "2025-01-10",
      readTime: "3 min read",
      category: "Guide",
      locale: "en-US",
    },
    {
      slug: "instagram-story-downloader",
      title: "How to Download Instagram Stories",
      description: "Save Instagram stories before they disappear. Complete guide to downloading stories with ReelGrabber.",
      date: "2025-01-05",
      readTime: "4 min read",
      category: "Tutorial",
      locale: "en-US",
    },
    {
      slug: "best-instagram-downloaders-2025",
      title: "Best Instagram Downloaders 2025",
      description: "Comprehensive comparison of top Instagram downloaders. See why ReelGrabber ranks #1 for speed, safety, and quality.",
      date: "2025-01-03",
      readTime: "8 min read",
      category: "Comparison",
      locale: "en-US",
    },
  ],
  "es-ES": [
    {
      slug: "como-descargar-videos-instagram",
      title: "Cómo Descargar Videos de Instagram en 2025",
      description: "Guía completa paso a paso para descargar videos de Instagram usando ReelGrabber. Funciona para publicaciones, reels e historias.",
      date: "2025-01-15",
      readTime: "5 min de lectura",
      category: "Tutorial",
      locale: "es-ES",
    },
    {
      slug: "guia-descargar-reels-instagram",
      title: "Mejor Forma de Descargar Reels de Instagram",
      description: "Aprende el método más rápido para descargar reels de Instagram en alta calidad. No requiere instalación de aplicaciones.",
      date: "2025-01-10",
      readTime: "3 min de lectura",
      category: "Guía",
      locale: "es-ES",
    },
    {
      slug: "descargador-historias-instagram",
      title: "Cómo Descargar Historias de Instagram",
      description: "Guarda las historias de Instagram antes de que desaparezcan. Guía completa para descargar historias con ReelGrabber.",
      date: "2025-01-05",
      readTime: "4 min de lectura",
      category: "Tutorial",
      locale: "es-ES",
    },
    {
      slug: "mejores-descargadores-instagram-2025",
      title: "Mejores Descargadores de Instagram 2025",
      description: "Comparación completa de los mejores descargadores de Instagram. Descubre por qué ReelGrabber es el #1 en velocidad, seguridad y calidad.",
      date: "2025-01-03",
      readTime: "8 min de lectura",
      category: "Comparación",
      locale: "es-ES",
    },
  ],
  "de-DE": [
    {
      slug: "instagram-videos-herunterladen",
      title: "Instagram Videos Herunterladen in 2025",
      description: "Vollständige Schritt-für-Schritt-Anleitung zum Herunterladen von Instagram-Videos mit ReelGrabber. Funktioniert für Posts, Reels und Stories.",
      date: "2025-01-15",
      readTime: "5 Min. Lesezeit",
      category: "Tutorial",
      locale: "de-DE",
    },
    {
      slug: "instagram-reels-herunterladen-anleitung",
      title: "Beste Methode zum Herunterladen von Instagram Reels",
      description: "Lerne die schnellste Methode zum Herunterladen von Instagram Reels in hoher Qualität. Keine App-Installation erforderlich.",
      date: "2025-01-10",
      readTime: "3 Min. Lesezeit",
      category: "Anleitung",
      locale: "de-DE",
    },
    {
      slug: "instagram-story-downloader",
      title: "Instagram Stories Herunterladen",
      description: "Speichere Instagram Stories bevor sie verschwinden. Vollständige Anleitung zum Herunterladen von Stories mit ReelGrabber.",
      date: "2025-01-05",
      readTime: "4 Min. Lesezeit",
      category: "Tutorial",
      locale: "de-DE",
    },
    {
      slug: "beste-instagram-downloader-2025",
      title: "Beste Instagram Downloader 2025",
      description: "Umfassender Vergleich der besten Instagram Downloader. Erfahre warum ReelGrabber #1 in Geschwindigkeit, Sicherheit und Qualität ist.",
      date: "2025-01-03",
      readTime: "8 Min. Lesezeit",
      category: "Vergleich",
      locale: "de-DE",
    },
  ],
  "fr-FR": [
    {
      slug: "telecharger-videos-instagram",
      title: "Comment Télécharger des Vidéos Instagram en 2025",
      description: "Guide complet étape par étape pour télécharger des vidéos Instagram avec ReelGrabber. Fonctionne pour les posts, reels et stories.",
      date: "2025-01-15",
      readTime: "5 min de lecture",
      category: "Tutoriel",
      locale: "fr-FR",
    },
    {
      slug: "guide-telecharger-reels-instagram",
      title: "Meilleure Façon de Télécharger des Reels Instagram",
      description: "Apprenez la méthode la plus rapide pour télécharger des reels Instagram en haute qualité. Aucune installation d'application requise.",
      date: "2025-01-10",
      readTime: "3 min de lecture",
      category: "Guide",
      locale: "fr-FR",
    },
    {
      slug: "telechargeur-stories-instagram",
      title: "Comment Télécharger des Stories Instagram",
      description: "Sauvegardez les stories Instagram avant qu'elles ne disparaissent. Guide complet pour télécharger des stories avec ReelGrabber.",
      date: "2025-01-05",
      readTime: "4 min de lecture",
      category: "Tutoriel",
      locale: "fr-FR",
    },
    {
      slug: "meilleurs-telechargeurs-instagram-2025",
      title: "Meilleurs Téléchargeurs Instagram 2025",
      description: "Comparaison complète des meilleurs téléchargeurs Instagram. Découvrez pourquoi ReelGrabber est #1 en vitesse, sécurité et qualité.",
      date: "2025-01-03",
      readTime: "8 min de lecture",
      category: "Comparaison",
      locale: "fr-FR",
    },
  ],
  "ru-RU": [
    {
      slug: "kak-skachat-video-instagram",
      title: "Как Скачать Видео из Instagram в 2025",
      description: "Полное пошаговое руководство по загрузке видео из Instagram с помощью ReelGrabber. Работает для постов, reels и историй.",
      date: "2025-01-15",
      readTime: "5 мин чтения",
      category: "Учебник",
      locale: "ru-RU",
    },
    {
      slug: "rukovodstvo-skachat-reels-instagram",
      title: "Лучший Способ Скачать Reels из Instagram",
      description: "Изучите самый быстрый метод загрузки reels из Instagram в высоком качестве. Не требует установки приложений.",
      date: "2025-01-10",
      readTime: "3 мин чтения",
      category: "Руководство",
      locale: "ru-RU",
    },
    {
      slug: "zagruzchik-istoriy-instagram",
      title: "Как Скачать Истории Instagram",
      description: "Сохраняйте истории Instagram до их исчезновения. Полное руководство по загрузке историй с ReelGrabber.",
      date: "2025-01-05",
      readTime: "4 мин чтения",
      category: "Учебник",
      locale: "ru-RU",
    },
    {
      slug: "luchshie-zagruzchiki-instagram-2025",
      title: "Лучшие Загрузчики Instagram 2025",
      description: "Подробное сравнение лучших загрузчиков Instagram. Узнайте, почему ReelGrabber #1 по скорости, безопасности и качеству.",
      date: "2025-01-03",
      readTime: "8 мин чтения",
      category: "Сравнение",
      locale: "ru-RU",
    },
  ],
};

export function getBlogPostsByLocale(locale: string): BlogPost[] {
  return blogPosts[locale] || blogPosts["en-US"];
}
