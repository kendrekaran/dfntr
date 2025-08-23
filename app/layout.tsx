import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import PerformanceMonitor from "./components/performance-monitor";
import ServiceWorkerRegistration from "./components/service-worker-registration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Reduced from 9 weights to 4 essential ones
  display: "swap",
});

export const metadata: Metadata = {
  title: "DFNDR Security | Seattle, Bellevue & Tacoma Security Services & Firewatch Services",
  description: "DFNDR provides professional security officers, firewatch, concierge, mobile patrols, and corporate security throughout Seattle, Bellevue, Tacoma, and Everett. Reliable protection, 24/7 peace of mind.",
  keywords: "security services, firewatch services, security officers, mobile patrols, corporate security, Seattle security, Bellevue security, Tacoma security, Everett security, 24/7 monitoring, access control, mobile patrol, corporate security",
  authors: [{ name: "DFNDR Security" }],
  creator: "DFNDR Security",
  publisher: "DFNDR Security",
  robots: "index, follow",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dfndrsecurity.co",
    siteName: "DFNDR Security",
    title: "DFNDR Security | Professional Security Services in Seattle, Bellevue & Tacoma",
    description: "DFNDR provides professional security officers, firewatch, concierge, mobile patrols, and corporate security throughout Seattle, Bellevue, Tacoma, and Everett. Reliable protection, 24/7 peace of mind.",
    images: [
      {
        url: "/ogimage.png",
        width: 1200,
        height: 630,
        alt: "DFNDR Security - Professional Security Services with 24/7 Monitoring & Response",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DFNDR Security | Professional Security Services in Seattle, Bellevue & Tacoma",
    description: "DFNDR provides professional security officers, firewatch, concierge, mobile patrols, and corporate security throughout Seattle, Bellevue, Tacoma, and Everett. Reliable protection, 24/7 peace of mind.",
    images: ["/ogimage.png"],
    creator: "@dfndrsecurity",
    site: "@dfndrsecurity",
  },
  alternates: {
    canonical: "https://dfndrsecurity.co",
  },
  category: "Security Services",
  classification: "Business Services",
  other: {
    "theme-color": "#8B5CF6",
    "msapplication-TileColor": "#8B5CF6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "DFNDR Security",
    "application-name": "DFNDR Security",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/api/fonts/inter-tight-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/api/fonts/inter-tight-500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preload critical images */}
        <link rel="preload" href="/logo.svg" as="image" />
        <link rel="preload" href="/shield.svg" as="image" />
        {/* Service Worker */}
        <link rel="serviceworker" href="/sw.js" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} antialiased`}
      >
        <PerformanceMonitor />
        <ServiceWorkerRegistration />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SecurityService",
              "name": "DFNDR Security",
              "description": "Professional security services including security officers, firewatch, concierge, mobile patrols, and corporate security throughout Seattle, Bellevue, Tacoma, and Everett.",
              "url": "https://dfndrsecurity.co",
              "logo": "https://dfndrsecurity.co/logo.svg",
              "image": "https://dfndrsecurity.co/ogimage.png",
              "telephone": "+1-XXX-XXX-XXXX",
              "email": "info@dfndrsecurity.co",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Seattle",
                "addressRegion": "WA",
                "addressCountry": "US"
              },
              "areaServed": [
                "Seattle, WA",
                "Bellevue, WA", 
                "Tacoma, WA",
                "Everett, WA"
              ],
              "serviceType": [
                "Security Officers",
                "Firewatch Services",
                "Concierge Services",
                "Mobile Patrols",
                "Corporate Security",
                "Access Control",
                "24/7 Monitoring"
              ],
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$",
              "sameAs": [
                "https://www.facebook.com/dfndrsecurity",
                "https://www.linkedin.com/company/dfndrsecurity",
                "https://twitter.com/dfndrsecurity"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
