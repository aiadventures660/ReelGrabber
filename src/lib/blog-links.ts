import { getBlogPostsByLocale, BlogPost } from './blog-data';

export interface BlogLink {
  href: string;
  post: BlogPost;
}

export function getBlogLinks(locale: string): BlogLink[] {
  const posts = getBlogPostsByLocale(locale);
  return posts.map(post => ({
    href: `/blog/${post.slug}`,
    post
  }));
}

export function findBlogPost(slug: string, locale: string): BlogPost | null {
  const posts = getBlogPostsByLocale(locale);
  return posts.find(post => post.slug === slug) || null;
}

// Generate sitemap URLs for all blog posts in all languages
export function getAllBlogUrls(): string[] {
  const locales = ['en-US', 'es-ES', 'de-DE', 'fr-FR', 'ru-RU'];
  const urls: string[] = [];
  
  locales.forEach(locale => {
    const posts = getBlogPostsByLocale(locale);
    posts.forEach(post => {
      urls.push(`/blog/${post.slug}`);
    });
  });
  
  return Array.from(new Set(urls)); // Remove duplicates
}
