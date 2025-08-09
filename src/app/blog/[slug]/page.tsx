import { Metadata } from "next";
import { Header } from "../../(home)/_components/header";
import { Footer } from "../../(home)/_components/footer";
import { getBlogPostsByLocale } from "@/lib/blog-data";
import { getLocale } from "next-intl/server";
import { BlogPostContent } from "@/components/blog-post-content";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const locale = await getLocale();
  const blogPosts = getBlogPostsByLocale(locale);
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  
  return {
    title: `${post.title} | ReelGrabber Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20">
          <div className="container mx-auto px-4 py-16">
            <BlogPostContent />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

