import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, CheckCircle, AlertCircle } from "lucide-react";
import { Header } from "../../(home)/_components/header";
import { Footer } from "../../(home)/_components/footer";

export const metadata: Metadata = {
  title: "How to Download Instagram Videos in 2025 - Complete Guide",
  description: "Learn how to download Instagram videos easily with ReelGrabber. Step-by-step guide for downloading videos, reels, and stories. Free, fast, and secure.",
  keywords: "how to download instagram videos, instagram video downloader, download instagram reels, instagram story downloader, free instagram downloader",
  openGraph: {
    title: "How to Download Instagram Videos in 2025 - Complete Guide",
    description: "Complete step-by-step guide to downloading Instagram videos using ReelGrabber. Works for posts, reels, and stories.",
    type: "article",
  },
};

export default function HowToDownloadInstagramVideos() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20">
          <div className="container mx-auto px-4 py-16">
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 mb-4">
            <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium">
              Tutorial
            </span>
            <span className="text-gray-500 dark:text-gray-400">•</span>
            <span>Updated January 15, 2025</span>
            <span className="text-gray-500 dark:text-gray-400">•</span>
            <span>5 min read</span>
          </div>
          
          <h1 className="bg-gradient-to-br from-gray-900 via-purple-900 to-orange-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-white dark:via-purple-200 dark:to-orange-200 mb-6">
            How to Download Instagram Videos in 2025
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Complete step-by-step guide to downloading Instagram videos using ReelGrabber. Works for posts, reels, and stories - no app installation required.
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              What You'll Learn
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                How to download Instagram videos in 3 simple steps
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Download Instagram reels and stories
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Batch download multiple photos from carousels
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Best practices for safe downloading
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Step-by-Step Guide
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Step 1: Copy the Instagram Post URL
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Open Instagram and navigate to the video you want to download. Tap the three dots (•••) menu and select "Copy Link".
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Pro tip:</strong> You can copy links from Instagram posts, reels, and stories using this method.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Step 2: Paste URL in ReelGrabber
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Visit ReelGrabber and paste the copied URL into the input field. You can use the paste button for quick access.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                    <AlertCircle className="h-5 w-5" />
                    <strong>Note:</strong> Make sure the URL starts with "https://www.instagram.com"
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Step 3: Download Your Content
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Click the "Download" button and your content will be saved to your device automatically. For carousel posts, all images will be downloaded with a short delay between each one.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Supported Content Types
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  ✅ What Works
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Instagram videos and reels</li>
                  <li>• Instagram photos</li>
                  <li>• Carousel posts (multiple images)</li>
                  <li>• Instagram stories</li>
                  <li>• IGTV videos</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  ❌ Limitations
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Private account content</li>
                  <li>• Live streams</li>
                  <li>• Content requiring login</li>
                  <li>• Age-restricted content</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Download Instagram Videos?
            </h2>
            <p className="text-purple-100 mb-6">
              Try ReelGrabber now - it's completely free and works instantly!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl bg-white text-purple-600 px-6 py-3 font-semibold transition-all duration-200 hover:scale-105"
            >
              <Download className="h-4 w-4" />
              Start Downloading
            </Link>
          </div>
        </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
