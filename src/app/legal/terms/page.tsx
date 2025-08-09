import { Metadata } from "next";
import { Header } from "../../(home)/_components/header";
import { Footer } from "../../(home)/_components/footer";
import Link from "next/link";
import { ArrowLeft, FileText, AlertTriangle, Scale, Users, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | ReelGrabber - Instagram Downloader",
  description: "ReelGrabber Terms of Service. Read our terms and conditions for using our Instagram downloader service.",
  keywords: "terms of service, terms and conditions, instagram downloader terms, user agreement",
};

export default function TermsOfServicePage() {
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
                  <FileText className="h-4 w-4" />
                  Legal Information
                </div>
                <h1 className="bg-gradient-to-br from-gray-900 via-purple-900 to-orange-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-white dark:via-purple-200 dark:to-orange-200 mb-4">
                  Terms of Service
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Last updated: January 15, 2025
                </p>
              </div>

              {/* Content */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg dark:bg-gray-800/80">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        By accessing and using ReelGrabber ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.
                      </p>
                      <p>
                        If you do not agree to abide by the above, please do not use this service.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Service Description</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        ReelGrabber is a web-based service that allows users to download publicly available Instagram content including:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Instagram videos and reels</li>
                        <li>Instagram photos and carousels</li>
                        <li>Instagram stories (when publicly accessible)</li>
                      </ul>
                      <p>
                        The service is provided free of charge and is supported by advertisements.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Scale className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Acceptable Use</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>You agree to use ReelGrabber only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Download private or copyrighted content without permission</li>
                        <li>Use the service for commercial purposes without authorization</li>
                        <li>Attempt to circumvent any security measures</li>
                        <li>Use automated tools to scrape or abuse the service</li>
                        <li>Download content that violates Instagram's Terms of Service</li>
                        <li>Redistribute downloaded content without proper rights</li>
                        <li>Use the service to harass, stalk, or violate others' privacy</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Copyright and Intellectual Property</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        <strong>Important:</strong> Users are responsible for ensuring they have the right to download and use any content. ReelGrabber does not grant any rights to downloaded content.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Only download content you own or have permission to download</li>
                        <li>Respect copyright laws and Instagram's terms of service</li>
                        <li>Downloaded content remains the property of its original creators</li>
                        <li>Commercial use of downloaded content may require additional permissions</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Service Availability</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        We strive to provide reliable service, but we do not guarantee:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Continuous, uninterrupted service availability</li>
                        <li>Compatibility with all Instagram content types</li>
                        <li>Service functionality during Instagram API changes</li>
                        <li>Specific download speeds or quality levels</li>
                      </ul>
                      <p>
                        We reserve the right to modify, suspend, or discontinue the service at any time.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Disclaimers and Limitations</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        <strong>Service "As Is":</strong> ReelGrabber is provided "as is" without warranties of any kind.
                      </p>
                      <p>
                        <strong>No Liability:</strong> We are not liable for any damages arising from the use of our service, including but not limited to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Direct, indirect, or consequential damages</li>
                        <li>Loss of data or profits</li>
                        <li>Service interruptions or errors</li>
                        <li>Third-party claims related to downloaded content</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. User Responsibilities</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>As a user of ReelGrabber, you are responsible for:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Ensuring you have rights to download content</li>
                        <li>Complying with applicable laws and regulations</li>
                        <li>Respecting intellectual property rights</li>
                        <li>Using the service ethically and responsibly</li>
                        <li>Reporting any abuse or violations</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Privacy and Data</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
                      </p>
                      <p>
                        We do not store Instagram URLs or downloaded content on our servers.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Termination</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        We reserve the right to terminate or suspend access to our service immediately, without prior notice, for conduct that we believe violates these Terms of Service.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Changes to Terms</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date.
                      </p>
                      <p>
                        Continued use of the service after changes constitutes acceptance of the new terms.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Governing Law</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        These Terms of Service are governed by and construed in accordance with applicable international laws.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Contact Information</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        If you have questions about these Terms of Service, please contact us:
                      </p>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <p><strong>Email:</strong> legal@reelgrabber.com</p>
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
