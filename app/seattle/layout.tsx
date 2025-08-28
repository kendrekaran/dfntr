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
  title: "DFNDR Security Seattle | Professional Security Services in Seattle, WA | 24/7 Protection",
  description: "DFNDR provides premier security services in Seattle, WA including professional security officers, firewatch, concierge, mobile patrols, and corporate security. Licensed, insured, and trusted by businesses across Seattle.",
  keywords: "Seattle security services, Seattle security guards, professional security Seattle WA, 24/7 security Seattle, Seattle security company, licensed security guards Seattle, Seattle security officers, Seattle firewatch services, Seattle mobile patrols, Seattle corporate security, Seattle access control, security companies in Seattle, best security company in Seattle, professional security guards Seattle, private security company Seattle, local security guards Seattle, armed security Seattle, unarmed security Seattle, mobile patrol security Seattle, event security Seattle, construction site security Seattle, hotel security Seattle, concierge security Seattle, front desk security Seattle, corporate office security Seattle, HOA security services Seattle, gated community security Seattle, fire watch security Seattle, loss prevention Seattle, cash transport security Seattle, hospital security Seattle, retail security Seattle, Seattle Washington security guards, security guard staffing Seattle",
  authors: [{ name: "DFNDR Security" }],
  creator: "DFNDR Security",
  publisher: "DFNDR Security",
  robots: "index, follow",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dfndrsecurity.co/seattle",
    siteName: "DFNDR Security",
    title: "DFNDR Security Seattle | Professional Security Services in Seattle, WA",
    description: "DFNDR provides premier security services in Seattle, WA including professional security officers, firewatch, concierge, mobile patrols, and corporate security. Licensed, insured, and trusted by businesses across Seattle.",
    images: [
      {
        url: "/ogimage.png",
        width: 1200,
        height: 630,
        alt: "DFNDR Security Seattle - Professional Security Services with 24/7 Monitoring & Response",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DFNDR Security Seattle | Professional Security Services in Seattle, WA",
    description: "DFNDR provides premier security services in Seattle, WA including professional security officers, firewatch, concierge, mobile patrols, and corporate security. Licensed, insured, and trusted by businesses across Seattle.",
    images: ["/ogimage.png"],
    creator: "@dfndrsecurity",
    site: "@dfndrsecurity",
  },
  alternates: {
    canonical: "https://dfndrsecurity.co/seattle",
  },
  category: "Security Services",
  classification: "Business Services",
  other: {
    "theme-color": "#8B5CF6",
    "msapplication-TileColor": "#8B5CF6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "DFNDR Security Seattle",
    "application-name": "DFNDR Security Seattle",
    "msapplication-config": "/browserconfig.xml",
    "geo.region": "US-WA",
    "geo.placename": "Seattle, WA",
    "geo.position": "47.6062;-122.3321",
    "ICBM": "47.6062, -122.3321",
  },
};

export default function SeattleLayout({
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
              "name": "DFNDR Security Seattle",
              "description": "Professional security services in Seattle, WA including security officers, firewatch, concierge, mobile patrols, and corporate security. Licensed, insured, and trusted protection.",
              "url": "https://dfndrsecurity.co/seattle",
              "logo": "https://dfndrsecurity.co/logo.svg",
              "image": "https://dfndrsecurity.co/ogimage.png",
              "telephone": "+1-XXX-XXX-XXXX",
              "email": "info@dfndrsecurity.co",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Seattle",
                "addressRegion": "WA",
                "postalCode": "98101",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.6062,
                "longitude": -122.3321
              },
              "areaServed": "Seattle, WA",
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
                "reviewCount": "200"
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
