import { siteConfig } from '@/lib/site'

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": siteConfig.name,
    "alternateName": "Instagram Video Downloader",
    "applicationCategory": "MultimediaApplication",
    "description": siteConfig.description,
    "url": siteConfig.url,
    "screenshot": `${siteConfig.url}/og-image.jpg`,
    "featureList": [
      "Download Instagram videos",
      "Download Instagram photos", 
      "Download Instagram reels",
      "Download Instagram stories",
      "Batch download carousels",
      "No login required",
      "Free to use"
    ],
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2547",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url
    }
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to download Instagram videos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply paste the Instagram post URL into ReelGrabber, click download, and the video will be saved to your device instantly. No login or registration required."
        }
      },
      {
        "@type": "Question", 
        "name": "Is ReelGrabber free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ReelGrabber is completely free to use. There are no hidden fees, subscriptions, or limits on downloads."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download Instagram reels and stories?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ReelGrabber supports downloading Instagram videos, photos, reels, stories, and carousel posts with multiple images."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to install any software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No installation required. ReelGrabber works directly in your web browser on any device - desktop, mobile, or tablet."
        }
      }
    ]
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  )
}
