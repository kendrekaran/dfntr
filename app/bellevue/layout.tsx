import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DFNDR Security Bellevue | Professional Security Services in Bellevue, WA | 24/7 Protection",
  description: "DFNDR provides premier security services in Bellevue, WA including professional security officers, firewatch, concierge, mobile patrols, and corporate security. Licensed, insured, and trusted by businesses across Bellevue.",
  keywords: "Bellevue security services, Bellevue security guards, professional security Bellevue WA, 24/7 security Bellevue, Bellevue security company, licensed security guards Bellevue, Bellevue security officers, Bellevue firewatch services, Bellevue mobile patrols, Bellevue corporate security, Bellevue access control, security companies in Bellevue, best security company in Bellevue, professional security guards Bellevue, private security company Bellevue, local security guards Bellevue, armed security Bellevue, unarmed security Bellevue, mobile patrol security Bellevue, event security Bellevue, construction site security Bellevue, hotel security Bellevue, concierge security Bellevue, front desk security Bellevue, corporate office security Bellevue, HOA security services Bellevue, gated community security Bellevue, fire watch security Bellevue, loss prevention Bellevue, cash transport security Bellevue, hospital security Bellevue, retail security Bellevue, Bellevue Washington security guards, security guard staffing Bellevue",
  authors: [{ name: "DFNDR Security" }],
  creator: "DFNDR Security",
  publisher: "DFNDR Security",
  robots: "index, follow",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dfndrsecurity.co/bellevue",
    siteName: "DFNDR Security",
    title: "DFNDR Security Bellevue | Professional Security Services in Bellevue, WA",
    description: "DFNDR provides premier security services in Bellevue, WA including professional security officers, firewatch, concierge, mobile patrols, and corporate security. Licensed, insured, and trusted by businesses across Bellevue.",
    images: [
      {
        url: "/ogimage.png",
        width: 1200,
        height: 630,
        alt: "DFNDR Security Bellevue - Professional Security Services with 24/7 Monitoring & Response",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DFNDR Security Bellevue | Professional Security Services in Bellevue, WA",
    description: "DFNDR provides premier security services in Bellevue, WA including professional security officers, firewatch, concierge, mobile patrols, and corporate security. Licensed, insured, and trusted by businesses across Bellevue.",
    images: ["/ogimage.png"],
    creator: "@dfndrsecurity",
    site: "@dfndrsecurity",
  },
  alternates: {
    canonical: "https://dfndrsecurity.co/bellevue",
  },
  category: "Security Services",
  classification: "Business Services",
  other: {
    "theme-color": "#8B5CF6",
    "msapplication-TileColor": "#8B5CF6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "DFNDR Security Bellevue",
    "application-name": "DFNDR Security Bellevue",
    "msapplication-config": "/browserconfig.xml",
    "geo.region": "US-WA",
    "geo.placename": "Bellevue, WA",
    "geo.position": "47.6101;-122.2015",
    "ICBM": "47.6101, -122.2015",
  },
};

export default function BellevueLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SecurityService",
              "name": "DFNDR Security Bellevue",
              "description": "Professional security services in Bellevue, WA including security officers, firewatch, concierge, mobile patrols, and corporate security. Licensed, insured, and trusted protection.",
              "url": "https://dfndrsecurity.co/bellevue",
              "logo": "https://dfndrsecurity.co/logo.svg",
              "image": "https://dfndrsecurity.co/ogimage.png",
              "telephone": "+1-XXX-XXX-XXXX",
              "email": "info@dfndrsecurity.co",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bellevue",
                "addressRegion": "WA",
                "postalCode": "98004",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.6101,
                "longitude": -122.2015
              },
              "areaServed": "Bellevue, WA",
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
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              },
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
