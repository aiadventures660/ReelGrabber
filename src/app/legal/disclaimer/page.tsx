import { Metadata } from "next";
import { Header } from "../../(home)/_components/header";
import { Footer } from "../../(home)/_components/footer";
import Link from "next/link";
import { ArrowLeft, AlertTriangle, Shield, ExternalLink, Info, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | ReelGrabber - Instagram Downloader",
  description: "ReelGrabber Disclaimer. Important information about using our Instagram downloader service responsibly.",
  keywords: "disclaimer, liability, instagram downloader disclaimer, service limitations",
};

export default function DisclaimerPage() {
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
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 text-sm font-medium text-orange-700 shadow-lg dark:from-orange-900/30 dark:to-red-900/30 dark:text-orange-300 mb-6">
                  <AlertTriangle className="h-4 w-4" />
                  Important Information
                </div>
                <h1 className="bg-gradient-to-br from-gray-900 via-purple-900 to-orange-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-white dark:via-purple-200 dark:to-orange-200 mb-4">
                  Disclaimer
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Last updated: January 15, 2025
                </p>
              </div>

              {/* Content */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  
                  {/* Important Notice */}
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg dark:bg-orange-900/20">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      <h2 className="text-xl font-bold text-orange-800 dark:text-orange-200 m-0">Important Notice</h2>
                    </div>
                    <p className="text-orange-700 dark:text-orange-300 m-0">
                      Please read this disclaimer carefully before using ReelGrabber. By using our service, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
                    </p>
                  </div>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Info className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">General Information</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        ReelGrabber is an independent web-based service that allows users to download publicly available Instagram content. We are not affiliated with, endorsed by, or sponsored by Instagram, Meta Platforms Inc., or any of their subsidiaries.
                      </p>
                      <p>
                        The information and services provided on this website are for general informational purposes only.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Scale className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Responsibility</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        <strong>Copyright Compliance:</strong> Users are solely responsible for ensuring they have the legal right to download and use any content. ReelGrabber does not monitor or control the content users choose to download.
                      </p>
                      <p>
                        <strong>Lawful Use:</strong> You must comply with all applicable laws, including but not limited to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Copyright and intellectual property laws</li>
                        <li>Privacy and data protection regulations</li>
                        <li>Instagram's Terms of Service</li>
                        <li>Local and international laws in your jurisdiction</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Service Limitations</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        <strong>No Warranties:</strong> ReelGrabber is provided "as is" without any warranties, express or implied, including but not limited to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Availability, reliability, or uninterrupted access</li>
                        <li>Accuracy, completeness, or timeliness of service</li>
                        <li>Compatibility with all devices or browsers</li>
                        <li>Freedom from viruses or other harmful components</li>
                        <li>Specific download quality or speed</li>
                      </ul>
                      
                      <p>
                        <strong>Service Dependencies:</strong> Our service relies on Instagram's public API and infrastructure. Changes to Instagram's platform may affect our service functionality.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        To the maximum extent permitted by applicable law, ReelGrabber and its operators shall not be liable for any:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Direct, indirect, incidental, special, or consequential damages</li>
                        <li>Loss of profits, data, or business opportunities</li>
                        <li>Personal injury or property damage</li>
                        <li>Legal claims arising from downloaded content</li>
                        <li>Service interruptions or technical issues</li>
                        <li>Actions taken by third parties (including Instagram)</li>
                      </ul>
                      
                      <p>
                        <strong>Maximum Liability:</strong> In no event shall our total liability exceed the amount you paid for using our service (which is currently $0 as we provide a free service).
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <ExternalLink className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Third-Party Content and Links</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        <strong>Instagram Content:</strong> All content downloaded through our service remains the property of its original creators and Instagram. We do not claim ownership of any downloaded content.
                      </p>
                      <p>
                        <strong>External Links:</strong> Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of service of these external sites.
                      </p>
                      <p>
                        <strong>Advertisements:</strong> We display third-party advertisements through Google AdSense. We are not responsible for the content or accuracy of these advertisements.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Disclaimers</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        <strong>Data Security:</strong> While we implement reasonable security measures, we cannot guarantee the security of data transmitted over the internet.
                      </p>
                      <p>
                        <strong>Browser Compatibility:</strong> Our service is designed for modern web browsers. Functionality may vary across different browsers and devices.
                      </p>
                      <p>
                        <strong>Download Quality:</strong> The quality and format of downloaded content depend on Instagram's original file specifications and may vary.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Privacy and Data Processing</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        <strong>Data Processing:</strong> We process Instagram URLs temporarily to provide download functionality. We do not store personal data or downloaded content.
                      </p>
                      <p>
                        <strong>Analytics:</strong> We use Google Analytics to understand website usage. This data is processed according to Google's privacy policy.
                      </p>
                      <p>
                        For detailed information about our data practices, please refer to our <Link href="/legal/privacy" className="text-purple-600 hover:underline">Privacy Policy</Link>.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes and Updates</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        We reserve the right to modify this disclaimer at any time without prior notice. Changes will be effective immediately upon posting.
                      </p>
                      <p>
                        We may also modify, suspend, or discontinue our service at any time without liability.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Governing Law</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        This disclaimer is governed by applicable international laws. Any disputes will be resolved in accordance with these laws.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        If you have questions about this disclaimer or our service, please contact us:
                      </p>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <p><strong>Email:</strong> legal@reelgrabber.com</p>
                        <p><strong>Website:</strong> https://reelgrabber.com</p>
                      </div>
                    </div>
                  </section>

                  {/* Final Notice */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg dark:bg-red-900/20">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <h3 className="text-lg font-bold text-red-800 dark:text-red-200 m-0">Final Notice</h3>
                    </div>
                    <p className="text-red-700 dark:text-red-300 m-0">
                      By using ReelGrabber, you acknowledge that you have read this disclaimer, understand its contents, and agree to use our service at your own risk and in compliance with all applicable laws.
                    </p>
                  </div>

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
