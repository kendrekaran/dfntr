import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";

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
  title: "DFNDR Security | Seattle, Bellevue & Tacoma Security Services & Firewatch Services",
  description: "DFNDR provides professional security officers, firewatch, concierge, mobile patrols, and corporate security throughout Seattle, Bellevue, Tacoma, and Everett. Reliable protection, 24/7 peace of mind.",
  keywords: "security services, firewatch services, security officers, mobile patrols, corporate security, Seattle security, Bellevue security, Tacoma security, Everett security, 24/7 monitoring, access control, mobile patrol, corporate security, security companies in Seattle, security companies in Bellevue, Washington state security guards, best security company in Seattle, best security company in Bellevue, professional security guards Seattle, professional security guards Bellevue, licensed security guards Seattle, licensed security guards Bellevue, Seattle security guard services, Bellevue security guard services, private security company Seattle, private security company Bellevue, local security guards Seattle, local security guards Bellevue, 24/7 security services Seattle, 24/7 security services Bellevue, armed security Seattle, armed security Bellevue, unarmed security Seattle, unarmed security Bellevue, mobile patrol security Seattle, mobile patrol security Bellevue, event security Seattle, event security Bellevue, construction site security Seattle, construction site security Bellevue, hotel security Seattle, hotel security Bellevue, concierge security Seattle, concierge security Bellevue, front desk security Seattle, front desk security Bellevue, corporate office security Seattle, corporate office security Bellevue, HOA security services Seattle, HOA security services Bellevue, gated community security Seattle, gated community security Bellevue, fire watch security Seattle, fire watch security Bellevue, loss prevention Seattle, loss prevention Bellevue, cash transport security Seattle, cash transport security Bellevue, hospital security Seattle, hospital security Bellevue, retail security Seattle, retail security Bellevue, security guard staffing Seattle Bellevue",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} antialiased`}
      >
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
