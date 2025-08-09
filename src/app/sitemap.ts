import { siteConfig } from '@/lib/site'
import { getAllBlogUrls } from '@/lib/blog-links'

export default function sitemap() {
  const blogUrls = getAllBlogUrls();
  
  const staticPages = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${siteConfig.url}/#features`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/#how-it-works`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/#faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ];

  // Add blog post URLs
  const blogPages = blogUrls.map(blogUrl => ({
    url: `${siteConfig.url}${blogUrl}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...blogPages];
}
