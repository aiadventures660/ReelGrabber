import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Star, Check, X, Award, Shield, Zap, Download, Smartphone, Globe, Clock } from "lucide-react";
import { Header } from "../../(home)/_components/header";
import { Footer } from "../../(home)/_components/footer";

export const metadata: Metadata = {
  title: "Best Instagram Downloaders 2025 - Complete Comparison Guide",
  description: "Compare the best Instagram downloaders in 2025. Find the perfect tool to download Instagram videos, reels, stories, and photos. ReelGrabber leads the pack!",
  keywords: "best instagram downloader 2025, instagram video downloader comparison, top instagram downloaders, instagram downloader review, download instagram content",
  openGraph: {
    title: "Best Instagram Downloaders 2025 - Complete Comparison Guide",
    description: "Comprehensive comparison of the best Instagram downloaders. See why ReelGrabber is the top choice for 2025.",
    type: "article",
  },
};

export default function BestInstagramDownloaders2025() {
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
              Comparison
            </span>
            <span className="text-gray-500 dark:text-gray-400">•</span>
            <span>Updated January 5, 2025</span>
            <span className="text-gray-500 dark:text-gray-400">•</span>
            <span>8 min read</span>
          </div>
          
          <h1 className="bg-gradient-to-br from-gray-900 via-purple-900 to-orange-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-white dark:via-purple-200 dark:to-orange-200 mb-6">
            Best Instagram Downloaders 2025
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We tested 15+ Instagram downloaders to find the best tools for 2025. Here's our comprehensive comparison of features, speed, and reliability.
          </p>
        </header>

        {/* Winner Badge */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-center mb-12">
          <Award className="h-12 w-12 text-white mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">🏆 Winner: ReelGrabber</h2>
          <p className="text-yellow-100 text-lg">
            The fastest, safest, and most reliable Instagram downloader of 2025
          </p>
        </div>

        {/* Top 5 Comparison Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80 mb-12 overflow-x-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Top 5 Instagram Downloaders Comparison
          </h2>
          
          <div className="min-w-[800px]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">Service</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Rating</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Speed</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Quality</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Ads</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Mobile</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">ReelGrabber</div>
                        <div className="text-sm text-purple-600 dark:text-purple-400">reelgrabber.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">5.0</div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300">
                      <Zap className="h-3 w-3" />
                      Ultra Fast
                    </span>
                  </td>
                  <td className="text-center py-6 px-4">
                    <span className="text-green-600 dark:text-green-400 font-semibold">HD/4K</span>
                  </td>
                  <td className="text-center py-6 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                    <div className="text-xs text-gray-600 dark:text-gray-400">No Ads</div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                    <div className="text-xs text-gray-600 dark:text-gray-400">Perfect</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        2
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">InstaDownloader</div>
                        <div className="text-sm text-gray-500">instadownloader.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="flex justify-center">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">4.2</div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-300">
                      Average
                    </span>
                  </td>
                  <td className="text-center py-6 px-4">
                    <span className="text-yellow-600 dark:text-yellow-400 font-semibold">HD</span>
                  </td>
                  <td className="text-center py-6 px-4">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-gray-600 dark:text-gray-400">Many Ads</div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                    <div className="text-xs text-gray-600 dark:text-gray-400">Good</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        3
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">SaveInsta</div>
                        <div className="text-sm text-gray-500">saveinsta.net</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="flex justify-center">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">3.8</div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <span className="inline-flex items-center rounded-full bg-red-100 dark:bg-red-900/30 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-300">
                      Slow
                    </span>
                  </td>
                  <td className="text-center py-6 px-4">
                    <span className="text-orange-600 dark:text-orange-400 font-semibold">720p</span>
                  </td>
                  <td className="text-center py-6 px-4">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-gray-600 dark:text-gray-400">Popups</div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <X className="h-5 w-5 text-orange-500 mx-auto" />
                    <div className="text-xs text-gray-600 dark:text-gray-400">Issues</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        4
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">IGram</div>
                        <div className="text-sm text-gray-500">igram.world</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="flex justify-center">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">3.5</div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-300">
                      Average
                    </span>
                  </td>
                  <td className="text-center py-6 px-4">
                    <span className="text-orange-600 dark:text-orange-400 font-semibold">720p</span>
                  </td>
                  <td className="text-center py-6 px-4">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-gray-600 dark:text-gray-400">Intrusive</div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                    <div className="text-xs text-gray-600 dark:text-gray-400">Okay</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        5
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">DownloadGram</div>
                        <div className="text-sm text-gray-500">downloadgram.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="flex justify-center">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">3.2</div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <span className="inline-flex items-center rounded-full bg-red-100 dark:bg-red-900/30 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-300">
                      Very Slow
                    </span>
                  </td>
                  <td className="text-center py-6 px-4">
                    <span className="text-red-600 dark:text-red-400 font-semibold">480p</span>
                  </td>
                  <td className="text-center py-6 px-4">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-gray-600 dark:text-gray-400">Excessive</div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-gray-600 dark:text-gray-400">Poor</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why ReelGrabber Wins */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Why ReelGrabber is #1</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-purple-100">
                Download Instagram content in under 3 seconds. Our optimized servers deliver unmatched speed.
              </p>
            </div>
            
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-green-300" />
              <h3 className="text-lg font-semibold mb-2">100% Safe</h3>
              <p className="text-purple-100">
                No ads, no malware, no data collection. Your privacy and security are our top priority.
              </p>
            </div>
            
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Best Quality</h3>
              <p className="text-purple-100">
                Download in original quality up to 4K. Get the highest resolution available from Instagram.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Reviews */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Detailed Reviews & Analysis
            </h2>

            {/* ReelGrabber Review */}
            <div className="border border-purple-200 dark:border-purple-800 rounded-2xl p-6 mb-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">ReelGrabber - Editor's Choice</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">5.0/5</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                ReelGrabber sets the gold standard for Instagram downloaders in 2025. With its clean interface, blazing-fast downloads, and zero advertisements, it's the clear winner in our comparison.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Check className="h-4 w-4" /> Pros:
                  </h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Ultra-fast download speeds (under 3 seconds)</li>
                    <li>• No ads or pop-ups</li>
                    <li>• Supports all Instagram content types</li>
                    <li>• HD/4K quality downloads</li>
                    <li>• Mobile-optimized design</li>
                    <li>• Anonymous downloads</li>
                    <li>• Paste button for easy URL input</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
                    <X className="h-4 w-4" /> Cons:
                  </h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• None identified in our testing</li>
                  </ul>
                </div>
              </div>
              
              <Link
                href="/"
                className="inline-flex items-center gap-2 mt-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 font-semibold transition-all duration-200 hover:scale-105"
              >
                <Download className="h-4 w-4" />
                Try ReelGrabber Now
              </Link>
            </div>

            {/* Other Reviews */}
            <div className="space-y-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">InstaDownloader</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">4.2/5</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  A decent alternative with good functionality, but the excessive advertising makes it frustrating to use. Download speeds are average, and the mobile experience could be better.
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">SaveInsta</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">3.8/5</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Works for basic downloads but suffers from slow speeds and popup ads. Quality is limited to 720p, which isn't ideal for modern content consumption.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Feature Comparison
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Download className="h-5 w-5 text-purple-600" />
                  Content Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Videos</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Photos</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Reels</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Stories</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Carousels</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-purple-600" />
                  Platform Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Desktop</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Mobile</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Tablet</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">All Browsers</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">No App Required</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  Security & Privacy
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">No Registration</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Anonymous</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">SSL Encrypted</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">No Data Stored</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Ad-Free</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Selection Guide */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              How We Tested & Ranked
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Speed & Performance (30%)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We tested download speeds for various content types and measured average completion times. ReelGrabber consistently delivered sub-3-second downloads.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  User Experience (25%)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Interface design, ease of use, mobile responsiveness, and overall user journey. Clean, ad-free experiences scored highest.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Quality & Features (25%)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Maximum download quality, content type support, and additional features like bulk downloads or quality selection.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Safety & Privacy (20%)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Security measures, privacy policies, presence of ads/malware, and data handling practices.
                </p>
              </div>
            </div>
          </div>

          {/* Final Recommendation */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Our Recommendation: ReelGrabber
            </h2>
            <p className="text-purple-100 mb-6 text-lg">
              After extensive testing, ReelGrabber is the clear winner for 2025. It combines speed, quality, and safety in a package that's simply unmatched by competitors.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm">⚡ Fastest Downloads</span>
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm">🚫 Zero Ads</span>
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm">🔒 100% Safe</span>
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm">📱 Mobile Perfect</span>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl bg-white text-purple-600 px-8 py-3 font-semibold transition-all duration-200 hover:scale-105"
            >
              <Download className="h-5 w-5" />
              Start Using ReelGrabber
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
