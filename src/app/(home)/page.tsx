import HomePage from "./page-content";

import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Free Instagram Video Downloader - Download Instagram Videos, Reels & Photos",
    description: "Download Instagram videos, photos, reels, and stories instantly with ReelGrabber. Free, fast, secure. No login required. Works on all devices.",
    keywords: "instagram video downloader, download instagram videos, instagram reel downloader, instagram photo downloader, free instagram downloader",
    alternates: {
      canonical: siteConfig.url,
    },
    openGraph: {
      title: "ReelGrabber - Free Instagram Video Downloader",
      description: "Download Instagram videos, photos, reels & stories instantly. Free, fast, secure. No login required.",
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "ReelGrabber Instagram Video Downloader",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default HomePage;
