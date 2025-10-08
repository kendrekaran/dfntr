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
  title: "Privacy Policy | DFNDR Security - Protecting Your Information",
  description: "Read DFNDR Security's privacy policy to understand how we collect, use, and protect your personal information when you visit our website or use our services.",
  keywords: "privacy policy, DFNDR Security, data protection, personal information, privacy practices, security company privacy, information collection, data usage, privacy rights",
  authors: [{ name: "DFNDR Security" }],
  creator: "DFNDR Security",
  publisher: "DFNDR Security",
  robots: "index, follow",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dfndrsecurity.us/privacy-policy",
    siteName: "DFNDR Security",
    title: "Privacy Policy | DFNDR Security - Protecting Your Information",
    description: "Read DFNDR Security's privacy policy to understand how we collect, use, and protect your personal information when you visit our website or use our services.",
    images: [
      {
        url: "/ogimage.png",
        width: 1200,
        height: 630,
        alt: "DFNDR Security Privacy Policy - Transparent Data Practices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | DFNDR Security - Protecting Your Information",
    description: "Read DFNDR Security's privacy policy to understand how we collect, use, and protect your personal information when you visit our website or use our services.",
    images: ["/ogimage.png"],
    creator: "@dfndrsecurity",
    site: "@dfndrsecurity",
  },
  alternates: {
    canonical: "https://dfndrsecurity.us/privacy-policy",
  },
  category: "Legal",
  classification: "Privacy Policy",
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

export default function PrivacyPolicyLayout({
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
              "@type": "WebPage",
              "name": "Privacy Policy | DFNDR Security",
              "description": "Read DFNDR Security's privacy policy to understand how we collect, use, and protect your personal information when you visit our website or use our services.",
              "url": "https://dfndrsecurity.us/privacy-policy",
              "inLanguage": "en-US",
              "isPartOf": {
                "@type": "WebSite",
                "name": "DFNDR Security",
                "url": "https://dfndrsecurity.us"
              },
              "about": {
                "@type": "Organization",
                "name": "DFNDR Security",
                "url": "https://dfndrsecurity.us",
                "logo": "https://dfndrsecurity.us/logo.svg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "253-523-3834",
                  "email": "support@dfndr.app",
                  "contactType": "customer service"
                }
              },
              "datePublished": "2025-10-06",
              "dateModified": "2025-10-06"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
