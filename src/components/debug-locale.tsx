"use client";

import { useLocale } from "next-intl";
import { getBlogPostsByLocale, BlogPost } from "@/lib/blog-data";
import { useEffect, useState } from "react";

export function DebugLocale() {
  const locale = useLocale();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    console.log('Debug - useLocale() returned:', locale);
    setCurrentLocale(locale);
    const blogPosts = getBlogPostsByLocale(locale);
    console.log('Debug - getBlogPostsByLocale() returned:', blogPosts.length, 'posts');
    console.log('Debug - First post:', blogPosts[0]);
    setPosts(blogPosts);
  }, [locale]);

  return (
    <div className="bg-red-100 p-4 rounded mb-4 text-black">
      <h3>Debug Info:</h3>
      <p>Current Locale: {currentLocale}</p>
      <p>Posts Count: {posts.length}</p>
      <p>First Post Title: {posts[0]?.title || 'No posts'}</p>
    </div>
  );
}
