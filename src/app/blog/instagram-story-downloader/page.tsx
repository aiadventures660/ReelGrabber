import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Clock, Eye, Shield, AlertTriangle, CheckCircle, Zap } from "lucide-react";
import { Header } from "../../(home)/_components/header";
import { Footer } from "../../(home)/_components/footer";

export const metadata: Metadata = {
  title: "Instagram Story Downloader - Save Stories Before They Disappear",
  description: "Download Instagram stories easily with ReelGrabber. Save stories before they disappear in 24 hours. Free, anonymous, and works on all devices.",
  keywords: "instagram story downloader, download instagram stories, save instagram stories, instagram story saver, anonymous story viewer",
  openGraph: {
    title: "Instagram Story Downloader - Save Stories Before They Disappear",
    description: "Save Instagram stories before they disappear. Complete guide to downloading stories with ReelGrabber.",
    type: "article",
  },
};

export default function InstagramStoryDownloader() {
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
            <span>Updated January 5, 2025</span>
            <span className="text-gray-500 dark:text-gray-400">•</span>
            <span>4 min read</span>
          </div>
          
          <h1 className="bg-gradient-to-br from-gray-900 via-purple-900 to-orange-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-white dark:via-purple-200 dark:to-orange-200 mb-6">
            Instagram Story Downloader Guide
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Learn how to download Instagram stories before they disappear. Save photos and videos from stories anonymously and securely.
          </p>
        </header>

        {/* Key Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg dark:bg-gray-800/80 text-center">
            <Clock className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">24hr Window</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Save before expiration</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg dark:bg-gray-800/80 text-center">
            <Eye className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Anonymous</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">No trace left behind</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg dark:bg-gray-800/80 text-center">
            <Shield className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Safe & Secure</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">No login required</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg dark:bg-gray-800/80 text-center">
            <Zap className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Instant</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Download in seconds</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-3xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  Important: Stories Disappear After 24 Hours
                </h3>
                <p className="text-orange-700 dark:text-orange-300">
                  Instagram stories are only available for 24 hours after posting. Use ReelGrabber to save them permanently before they vanish forever.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              How to Download Instagram Stories
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Find the Instagram Story
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Open Instagram and go to the profile that has the story you want to download. You can access stories from the main feed or by visiting a specific profile.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      <strong>💡 Quick Tip:</strong> Stories appear as colored rings around profile pictures. Tap to view the story content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Get the Story URL
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    While viewing the story, tap the three dots (•••) and select "Copy Link". This copies the story URL to your clipboard.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Note:</strong> Each individual story slide has its own unique URL. Copy the URL for each story you want to download.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Download with ReelGrabber
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Paste the story URL into ReelGrabber and click "Download". The story photo or video will be saved to your device instantly.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 font-semibold transition-all duration-200 hover:scale-105"
                  >
                    <Download className="h-4 w-4" />
                    Download Stories Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Story Types You Can Download
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Supported Content
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Photo stories
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Video stories
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Stories with text overlays
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Stories with stickers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Boomerang stories
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Limitations
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Private account stories (need access)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Expired stories (after 24 hours)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Live video streams
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Stories with music (copyright)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy & Ethics
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Anonymous Downloading
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  ReelGrabber doesn't require login, so your downloads are completely anonymous. The story owner won't know you downloaded their content.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Respect Content Creators
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Only download stories for personal use. Don't redistribute or use downloaded content without permission from the original creator.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Legal Considerations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Downloading public stories for personal use is generally acceptable, but always respect copyright and privacy laws in your jurisdiction.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Save Stories Before They Disappear!
            </h2>
            <p className="text-purple-100 mb-6">
              Don't let great content vanish after 24 hours. Start downloading Instagram stories with ReelGrabber today.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl bg-white text-purple-600 px-6 py-3 font-semibold transition-all duration-200 hover:scale-105"
            >
              <Download className="h-4 w-4" />
              Start Downloading Stories
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
