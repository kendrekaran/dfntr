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
  title: "DFNDR Security Tacoma | Professional Security Services in Tacoma, WA | 24/7 Protection",
  description: "DFNDR provides premier security services in Tacoma, WA including professional security officers, firewatch, concierge, mobile patrols, and corporate security. Licensed, insured, and trusted by businesses across Tacoma.",
  keywords: "Tacoma security services, Tacoma security guards, professional security Tacoma WA, 24/7 security Tacoma, Tacoma security company, licensed security guards Tacoma, Tacoma security officers, Tacoma firewatch services, Tacoma mobile patrols, Tacoma corporate security, Tacoma access control, security companies in Tacoma, best security company in Tacoma, professional security guards Tacoma, private security company Tacoma, local security guards Tacoma, armed security Tacoma, unarmed security Tacoma, mobile patrol security Tacoma, event security Tacoma, construction site security Tacoma, hotel security Tacoma, concierge security Tacoma, front desk security Tacoma, corporate office security Tacoma, HOA security services Tacoma, gated community security Tacoma, fire watch security Tacoma, loss prevention Tacoma, cash transport security Tacoma, hospital security Tacoma, retail security Tacoma, Tacoma Washington security guards, security guard staffing Tacoma",
  authors: [{ name: "DFNDR Security" }],
  creator: "DFNDR Security",
  publisher: "DFNDR Security",
  robots: "index, follow",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dfndrsecurity.co/tacoma",
    siteName: "DFNDR Security",
    title: "DFNDR Security Tacoma | Professional Security Services in Tacoma, WA",
    description: "DFNDR provides premier security services in Tacoma, WA including professional security officers, firewatch, concierge, mobile patrols, and corporate security. Licensed, insured, and trusted by businesses across Tacoma.",
    images: [
      {
        url: "/ogimage.png",
        width: 1200,
        height: 630,
        alt: "DFNDR Security Tacoma - Professional Security Services with 24/7 Monitoring & Response",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DFNDR Security Tacoma | Professional Security Services in Tacoma, WA",
    description: "DFNDR provides premier security services in Tacoma, WA including professional security officers, firewatch, concierge, mobile patrols, and corporate security. Licensed, insured, and trusted by businesses across Tacoma.",
    images: ["/ogimage.png"],
    creator: "@dfndrsecurity",
    site: "@dfndrsecurity",
  },
  alternates: {
    canonical: "https://dfndrsecurity.co/tacoma",
  },
  category: "Security Services",
  classification: "Business Services",
  other: {
    "theme-color": "#8B5CF6",
    "msapplication-TileColor": "#8B5CF6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "DFNDR Security Tacoma",
    "application-name": "DFNDR Security Tacoma",
    "msapplication-config": "/browserconfig.xml",
    "geo.region": "US-WA",
    "geo.placename": "Tacoma, WA",
    "geo.position": "47.2529;-122.4443",
    "ICBM": "47.2529, -122.4443",
  },
};

export default function TacomaLayout({
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
              "name": "DFNDR Security Tacoma",
              "description": "Professional security services in Tacoma, WA including security officers, firewatch, concierge, mobile patrols, and corporate security. Licensed, insured, and trusted protection.",
              "url": "https://dfndrsecurity.co/tacoma",
              "logo": "https://dfndrsecurity.co/logo.svg",
              "image": "https://dfndrsecurity.co/ogimage.png",
              "telephone": "+1-XXX-XXX-XXXX",
              "email": "info@dfndrsecurity.co",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tacoma",
                "addressRegion": "WA",
                "postalCode": "98402",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.2529,
                "longitude": -122.4443
              },
              "areaServed": "Tacoma, WA",
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
                "reviewCount": "125"
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
