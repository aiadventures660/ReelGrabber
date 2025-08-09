import { Metadata } from "next";
import { Header } from "../../(home)/_components/header";
import { Footer } from "../../(home)/_components/footer";
import Link from "next/link";
import { ArrowLeft, DollarSign, Target, BarChart, Shield, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "AdSense Policy | ReelGrabber - Instagram Downloader",
  description: "ReelGrabber AdSense Policy. Learn about our advertising practices and how we use Google AdSense on our Instagram downloader website.",
  keywords: "adsense policy, advertising policy, google adsense, ads disclaimer",
};

export default function AdSensePolicyPage() {
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
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 text-sm font-medium text-green-700 shadow-lg dark:from-green-900/30 dark:to-blue-900/30 dark:text-green-300 mb-6">
                  <DollarSign className="h-4 w-4" />
                  Advertising Information
                </div>
                <h1 className="bg-gradient-to-br from-gray-900 via-purple-900 to-orange-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-white dark:via-purple-200 dark:to-orange-200 mb-4">
                  AdSense Policy
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Last updated: January 15, 2025
                </p>
              </div>

              {/* Content */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Our Advertising</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        ReelGrabber is a free service supported by advertising revenue. We use Google AdSense to display advertisements that help us maintain and improve our Instagram downloader service.
                      </p>
                      <p>
                        This policy explains how we use advertising on our website and how it may affect your browsing experience.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Google AdSense Integration</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        We participate in the Google AdSense program, which allows us to display targeted advertisements based on:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Website content and context</li>
                        <li>User interests and browsing behavior</li>
                        <li>Geographic location</li>
                        <li>Device type and browser information</li>
                        <li>Previous interactions with advertisements</li>
                      </ul>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <p><strong>Publisher ID:</strong> Our Google AdSense Publisher ID will be displayed when required for transparency.</p>
                      </div>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Types of Advertisements</h2>
                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Display Ads</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                          <li>Banner advertisements in various sizes</li>
                          <li>Text-based advertisements</li>
                          <li>Image and rich media advertisements</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Responsive Ads</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                          <li>Automatically sized ads that adapt to different screen sizes</li>
                          <li>Mobile-optimized advertisements</li>
                          <li>Native ads that blend with site content</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-orange-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Auto Ads</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                          <li>Machine learning-optimized ad placements</li>
                          <li>Automatically placed advertisements for better user experience</li>
                          <li>Performance-optimized ad formats</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Collection for Advertising</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        Google AdSense may collect and use the following information to serve relevant advertisements:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Cookies and Identifiers:</strong> To track ad performance and user preferences</li>
                        <li><strong>IP Address:</strong> For geographic targeting and fraud prevention</li>
                        <li><strong>User Agent:</strong> Browser and device information</li>
                        <li><strong>Referrer URL:</strong> The website that referred you to our site</li>
                        <li><strong>Page Content:</strong> To serve contextually relevant advertisements</li>
                        <li><strong>Interaction Data:</strong> Clicks, views, and engagement with advertisements</li>
                      </ul>

                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                        <p><strong>Note:</strong> This data is processed by Google according to their privacy policy. We do not have direct access to personal information collected by Google AdSense.</p>
                      </div>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Personalized vs Non-Personalized Ads</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Personalized Ads</h4>
                          <ul className="list-disc pl-4 space-y-1 text-sm text-green-700 dark:text-green-300">
                            <li>Based on your interests and browsing history</li>
                            <li>More relevant to your preferences</li>
                            <li>Higher engagement rates</li>
                            <li>Requires consent in some regions</li>
                          </ul>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Non-Personalized Ads</h4>
                          <ul className="list-disc pl-4 space-y-1 text-sm text-blue-700 dark:text-blue-300">
                            <li>Based on current webpage content</li>
                            <li>Geographic location only</li>
                            <li>No personal data tracking</li>
                            <li>Default option in privacy-focused regions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Advertising Choices</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>You have several options to control the advertisements you see:</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ad Personalization Settings</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li><Link href="https://adssettings.google.com" className="text-purple-600 hover:underline" target="_blank">Google Ads Settings</Link> - Manage your ad preferences</li>
                            <li><Link href="https://myadcenter.google.com" className="text-purple-600 hover:underline" target="_blank">My Ad Center</Link> - Control what ads you see</li>
                            <li>Turn off personalized ads entirely</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Browser Controls</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Use ad blockers (may affect site functionality)</li>
                            <li>Disable third-party cookies</li>
                            <li>Use private/incognito browsing mode</li>
                            <li>Clear cookies regularly</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Industry Opt-Out Tools</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li><Link href="https://optout.aboutads.info" className="text-purple-600 hover:underline" target="_blank">Digital Advertising Alliance Opt-out</Link></li>
                            <li><Link href="https://optout.networkadvertising.org" className="text-purple-600 hover:underline" target="_blank">Network Advertising Initiative Opt-out</Link></li>
                            <li><Link href="https://youronlinechoices.eu" className="text-purple-600 hover:underline" target="_blank">Your Online Choices (EU)</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ad Content Standards</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        All advertisements displayed on ReelGrabber must comply with Google AdSense policies, which prohibit:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Inappropriate content (adult, violent, illegal)</li>
                        <li>Misleading or deceptive advertisements</li>
                        <li>Malware or harmful software promotion</li>
                        <li>Copyright infringement</li>
                        <li>Counterfeit goods or services</li>
                      </ul>
                      
                      <p>
                        If you encounter inappropriate advertisements, please report them using Google's ad reporting tools or contact us.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <ExternalLink className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Third-Party Advertising Partners</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        In addition to Google AdSense, we may work with other advertising partners:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Additional ad networks for better coverage</li>
                        <li>Affiliate marketing programs</li>
                        <li>Sponsored content partnerships</li>
                      </ul>
                      
                      <p>
                        All advertising partners must comply with applicable privacy laws and our content standards.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Revenue and Transparency</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        <strong>Free Service:</strong> Advertising revenue allows us to provide ReelGrabber as a free service to users worldwide.
                      </p>
                      <p>
                        <strong>No Purchase Required:</strong> You are never required to click on or purchase from advertisements to use our service.
                      </p>
                      <p>
                        <strong>Editorial Independence:</strong> Advertisements do not influence our editorial content or service functionality.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">GDPR and Privacy Compliance</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        We comply with GDPR and other privacy regulations regarding advertising:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Consent management for EU users</li>
                        <li>Transparent data processing information</li>
                        <li>Right to opt-out of personalized advertising</li>
                        <li>Data minimization principles</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to Advertising Practices</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        We may update our advertising practices from time to time. Significant changes will be communicated through:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Updates to this AdSense Policy</li>
                        <li>Website notifications</li>
                        <li>Changes to consent mechanisms</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us About Advertising</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        If you have questions about our advertising practices or wish to report inappropriate ads:
                      </p>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <p><strong>Email:</strong> ads@reelgrabber.com</p>
                        <p><strong>General Contact:</strong> privacy@reelgrabber.com</p>
                        <p><strong>Website:</strong> https://reelgrabber.com</p>
                      </div>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Policies</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>For more information about how we handle your data and privacy:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><Link href="/legal/privacy" className="text-purple-600 hover:underline">Privacy Policy</Link> - How we collect and use your information</li>
                        <li><Link href="/legal/cookies" className="text-purple-600 hover:underline">Cookie Policy</Link> - Detailed information about cookies and tracking</li>
                        <li><Link href="/legal/terms" className="text-purple-600 hover:underline">Terms of Service</Link> - General terms for using our service</li>
                        <li><Link href="https://policies.google.com/privacy" className="text-purple-600 hover:underline" target="_blank">Google Privacy Policy</Link> - Google's data practices</li>
                      </ul>
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
