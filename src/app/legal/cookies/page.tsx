import { Metadata } from "next";
import { Header } from "../../(home)/_components/header";
import { Footer } from "../../(home)/_components/footer";
import Link from "next/link";
import { ArrowLeft, Cookie, Settings, BarChart, Target, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | ReelGrabber - Instagram Downloader",
  description: "ReelGrabber Cookie Policy. Learn about how we use cookies and similar technologies on our Instagram downloader website.",
  keywords: "cookie policy, cookies, tracking, web analytics, advertising cookies",
};

export default function CookiePolicyPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              {/* Back Link */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>

              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 text-sm font-medium text-purple-700 shadow-lg dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300 mb-6">
                  <Cookie className="h-4 w-4" />
                  Legal Information
                </div>
                <h1 className="bg-gradient-to-br from-gray-900 via-purple-900 to-orange-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-white dark:via-purple-200 dark:to-orange-200 mb-4">
                  Cookie Policy
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Last updated: January 15, 2025
                </p>
              </div>

              {/* Content */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Are Cookies?</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, analyze traffic, and provide personalized content.
                      </p>
                      <p>
                        ReelGrabber uses cookies to enhance your browsing experience and provide better service functionality.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Types of Cookies We Use</h2>
                    
                    <div className="space-y-6">
                      {/* Essential Cookies */}
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Essential Cookies</h3>
                        </div>
                        <div className="space-y-2 text-gray-600 dark:text-gray-300">
                          <p><strong>Purpose:</strong> Required for basic website functionality</p>
                          <p><strong>Examples:</strong></p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Language preference settings</li>
                            <li>Theme preferences (dark/light mode)</li>
                            <li>Basic security measures</li>
                          </ul>
                          <p><strong>Can be disabled:</strong> No - these are necessary for the site to function</p>
                        </div>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="border-l-4 border-blue-500 pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Analytics Cookies</h3>
                        </div>
                        <div className="space-y-2 text-gray-600 dark:text-gray-300">
                          <p><strong>Purpose:</strong> Help us understand how visitors use our website</p>
                          <p><strong>Provider:</strong> Google Analytics</p>
                          <p><strong>Data collected:</strong></p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Page views and session duration</li>
                            <li>User navigation patterns</li>
                            <li>Device and browser information</li>
                            <li>Geographic location (country/city level)</li>
                          </ul>
                          <p><strong>Can be disabled:</strong> Yes - through browser settings or opt-out</p>
                        </div>
                      </div>

                      {/* Advertising Cookies */}
                      <div className="border-l-4 border-orange-500 pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Advertising Cookies</h3>
                        </div>
                        <div className="space-y-2 text-gray-600 dark:text-gray-300">
                          <p><strong>Purpose:</strong> Display relevant advertisements and measure ad performance</p>
                          <p><strong>Provider:</strong> Google AdSense</p>
                          <p><strong>Data collected:</strong></p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Ad interaction and click data</li>
                            <li>Interest-based advertising preferences</li>
                            <li>Conversion tracking</li>
                          </ul>
                          <p><strong>Can be disabled:</strong> Yes - through ad settings or browser preferences</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Cookies</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        ReelGrabber uses third-party services that may set their own cookies:
                      </p>
                      
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Google Analytics</h4>
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>_ga, _ga_*, _gid - Track users and sessions</li>
                          <li>Duration: 2 years (ga), 24 hours (gid)</li>
                          <li><Link href="https://policies.google.com/privacy" className="text-purple-600 hover:underline">Google Privacy Policy</Link></li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Google AdSense</h4>
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>_gcl_au - Track ad conversions</li>
                          <li>IDE, DSID - Advertising preferences</li>
                          <li>Duration: Up to 2 years</li>
                          <li><Link href="https://policies.google.com/technologies/ads" className="text-purple-600 hover:underline">Google Ads Policy</Link></li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Settings className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Managing Your Cookie Preferences</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>You have several options to control cookies:</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Browser Settings</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Block all cookies (may affect site functionality)</li>
                            <li>Block third-party cookies only</li>
                            <li>Delete existing cookies</li>
                            <li>Set cookies to expire when browser closes</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Opt-Out Links</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li><Link href="https://tools.google.com/dlpage/gaoptout" className="text-purple-600 hover:underline">Google Analytics Opt-out</Link></li>
                            <li><Link href="https://adssettings.google.com" className="text-purple-600 hover:underline">Google Ads Settings</Link></li>
                            <li><Link href="https://optout.aboutads.info" className="text-purple-600 hover:underline">Digital Advertising Alliance Opt-out</Link></li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Browser-Specific Instructions</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li><Link href="https://support.google.com/chrome/answer/95647" className="text-purple-600 hover:underline">Chrome Cookie Settings</Link></li>
                            <li><Link href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-purple-600 hover:underline">Firefox Cookie Settings</Link></li>
                            <li><Link href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" className="text-purple-600 hover:underline">Safari Cookie Settings</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Impact of Disabling Cookies</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>Disabling certain types of cookies may affect your experience:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Essential Cookies:</strong> Site may not function properly</li>
                        <li><strong>Analytics Cookies:</strong> We cannot improve the service based on usage data</li>
                        <li><strong>Advertising Cookies:</strong> You may see less relevant advertisements</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Updates to This Policy</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our practices.
                      </p>
                      <p>
                        Please check this page periodically for updates. The "Last updated" date at the top indicates when the policy was last revised.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        If you have questions about our use of cookies, please contact us:
                      </p>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <p><strong>Email:</strong> privacy@reelgrabber.com</p>
                        <p><strong>Website:</strong> https://reelgrabber.com</p>
                      </div>
                    </div>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
