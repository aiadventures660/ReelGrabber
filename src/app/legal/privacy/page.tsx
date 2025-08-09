import { Metadata } from "next";
import { Header } from "../../(home)/_components/header";
import { Footer } from "../../(home)/_components/footer";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, Cookie, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | ReelGrabber - Instagram Downloader",
  description: "ReelGrabber Privacy Policy. Learn how we collect, use, and protect your personal information when using our Instagram downloader service.",
  keywords: "privacy policy, data protection, personal information, instagram downloader privacy",
};

export default function PrivacyPolicyPage() {
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
                  <Shield className="h-4 w-4" />
                  Legal Information
                </div>
                <h1 className="bg-gradient-to-br from-gray-900 via-purple-900 to-orange-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-white dark:via-purple-200 dark:to-orange-200 mb-4">
                  Privacy Policy
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Last updated: January 15, 2025
                </p>
              </div>

              {/* Content */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  
                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Eye className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Information We Collect</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        ReelGrabber is committed to protecting your privacy. We collect minimal information to provide our Instagram downloading service:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Instagram URLs:</strong> We temporarily process the Instagram URLs you provide to extract downloadable content.</li>
                        <li><strong>Usage Analytics:</strong> We collect anonymous usage statistics through Google Analytics to improve our service.</li>
                        <li><strong>Device Information:</strong> Basic device and browser information for compatibility purposes.</li>
                        <li><strong>Cookies:</strong> We use cookies for language preferences and basic functionality.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Lock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. How We Use Your Information</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>We use the collected information for the following purposes:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Processing Instagram download requests</li>
                        <li>Improving our service performance and user experience</li>
                        <li>Analyzing usage patterns to enhance functionality</li>
                        <li>Ensuring service security and preventing abuse</li>
                        <li>Displaying relevant advertisements through Google AdSense</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Data Processing and Storage</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        <strong>No Personal Data Storage:</strong> We do not store Instagram URLs, downloaded content, or personal information on our servers.
                      </p>
                      <p>
                        <strong>Temporary Processing:</strong> Instagram URLs are processed in real-time and immediately discarded after providing download links.
                      </p>
                      <p>
                        <strong>Third-Party Services:</strong> We use Google Analytics and Google AdSense, which may collect data according to their privacy policies.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Cookie className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Cookies and Tracking</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>ReelGrabber uses cookies for:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Essential Cookies:</strong> Required for basic site functionality and language preferences</li>
                        <li><strong>Analytics Cookies:</strong> Google Analytics cookies to understand user behavior</li>
                        <li><strong>Advertising Cookies:</strong> Google AdSense cookies for displaying relevant advertisements</li>
                      </ul>
                      <p>
                        You can control cookies through your browser settings. Disabling cookies may affect site functionality.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Third-Party Services</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>Our service integrates with the following third-party services:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                        <li><strong>Google AdSense:</strong> For displaying advertisements</li>
                        <li><strong>Instagram:</strong> For accessing public content metadata</li>
                      </ul>
                      <p>
                        These services have their own privacy policies that govern their data collection and use practices.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Your Rights</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>You have the right to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Access information about data we collect</li>
                        <li>Request deletion of any personal data we may have</li>
                        <li>Opt-out of analytics tracking</li>
                        <li>Control cookie preferences</li>
                        <li>Contact us with privacy concerns</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Children's Privacy</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        ReelGrabber is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Changes to Privacy Policy</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">9. Contact Us</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        If you have questions about this Privacy Policy or our data practices, please contact us at:
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
