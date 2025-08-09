import { Metadata } from "next";

export const siteConfig = {
  name: "ReelGrabber",
  domain: "reel-grabber.vercel.com",
  shortName: "ReelGrabber",
  creator: "riad-azz",
  description:
    "Free Instagram video downloader - Download Instagram videos, photos, reels, and stories instantly. No login required, fast and secure. Works on all devices.",
  ogDescription:
    "Download Instagram content instantly - videos, photos, reels & stories. Free, fast, secure. No registration required.",
  keywords: "instagram video downloader, download instagram videos, instagram photo downloader, reel downloader, instagram story downloader, free video downloader, instagram media downloader",
  url: "https://reel-grabber.vercel.com",
};

export const siteMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    creator: `@${siteConfig.creator}`,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/web.manifest.json",
  verification: {
    google: "google-site-verification-code-here",
  },
};
