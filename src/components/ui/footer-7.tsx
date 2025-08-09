import React from "react";
import { Github, Twitter, MessageCircle, Heart } from "lucide-react";

interface Footer7Props {
  logo?: {
    url: string;
    src?: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Download", href: "#hero" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Support", href: "#" },
      { name: "Feedback", href: "#" },
      { name: "API", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "Terms of Service", href: "/legal/terms" },
      { name: "Cookie Policy", href: "/legal/cookies" },
      { name: "Disclaimer", href: "/legal/disclaimer" },
      { name: "AdSense Policy", href: "/legal/adsense" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <Github className="size-5" />, href: "https://github.com/riad-azz", label: "GitHub" },
  { icon: <Twitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <MessageCircle className="size-5" />, href: "#", label: "Discord" },
];

const defaultLegalLinks = [
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Terms of Service", href: "/legal/terms" },
  { name: "Cookie Policy", href: "/legal/cookies" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    alt: "ReelGrabber Logo",
    title: "ReelGrabber",
  },
  sections = defaultSections,
  description = "Fast, free, and secure social media downloader. Download videos, photos, and reels instantly without any login required.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 ReelGrabber. Made with ❤️ for content creators.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-16 md:py-24 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-400/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-orange-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url} className="flex items-center gap-2 group">
                {/* Video play icon to match the logo */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-white"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-8l6-3.5v7L10 12z"/>
                  </svg>
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {logo.title}
                </h2>
              </a>
            </div>
            <p className="max-w-[80%] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-gray-500 dark:text-gray-400">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="group">
                  <a 
                    href={social.href} 
                    aria-label={social.label}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/60 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-200 group-hover:scale-110 dark:bg-gray-800/60"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-8 md:grid-cols-3 lg:gap-16">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-gray-900 dark:text-white">{section.title}</h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                    >
                      <a href={link.href} className="inline-block hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-purple-200/30 dark:border-purple-800/30 pt-8 text-sm text-gray-600 dark:text-gray-400 md:flex-row md:items-center">
          <div className="flex items-center gap-2 order-2 lg:order-1">
            <span>{copyright.replace("❤️", "")}</span>
            <Heart className="text-red-500 w-4 h-4 fill-current" />
          </div>
          <ul className="order-1 flex flex-col gap-4 md:order-2 md:flex-row md:gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
