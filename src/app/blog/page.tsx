import { Metadata } from "next";
import { Header } from "../(home)/_components/header";
import { Footer } from "../(home)/_components/footer";
import { BlogContent } from "@/components/blog-content";

export const metadata: Metadata = {
  title: "Blog - Instagram Downloader Guides & Tips",
  description: "Learn how to download Instagram videos, photos, reels, and stories. Free guides, tips, and tutorials for using ReelGrabber.",
  keywords: "instagram downloader guide, how to download instagram videos, instagram reel downloader tutorial, instagram story download",
};

export default function BlogPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <BlogContent />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
