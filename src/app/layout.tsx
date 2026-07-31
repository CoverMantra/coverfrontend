import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import "aos/dist/aos.css";
import ClientLayout from "../../src/app/clientlayout";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#FF7819",
};

export const metadata: Metadata = {
  title: "CoverMantra - Your Trusted Loan & Insurance Partner",
  description:
    "Discover the best insurance plans with CoverMantra. Compare and buy health, life, car, and travel insurance policies at competitive rates. Get expert advice today!",
  metadataBase: new URL("https://www.covermantra.com"),
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "CoverMantra",
    "covermantra loans",
    "covermantra",
    "insurance",
    "health insurance",
    "life insurance",
    "car insurance",
    "travel insurance",
    "insurance plans",
    "premium calculator",
    "insurance comparison",
  ],
  openGraph: {
    title: "CoverMantra - Your Trusted Insurance Partner",
    description: "Compare and buy the best insurance plans for your needs at affordable rates.",
    url: "https://www.covermantra.com",
    siteName: "CoverMantra",
    images: [
      {
        url: "https://www.covermantra.com/baseimage.png",
        width: 1200,
        height: 630,
        alt: "CoverMantra Insurance Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoverMantra - Your Trusted Loan & Insurance Partner",
    description: "Compare and buy the best insurance plans for your needs at affordable rates.",
    images: ["https://www.covermantra.com/baseimage.png"],
  },
  alternates: {
    canonical: "https://www.covermantra.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CoverMantra",
    "url": "https://www.covermantra.com",
    "logo": "https://www.covermantra.com/icon.png",
    "sameAs": [
      "https://facebook.com",
      "https://www.instagram.com/cover_mantra_pvt_ltd",
      "https://www.linkedin.com/company/covermantra/about"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@covermantra.in",
      "contactType": "customer support"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CoverMantra",
    "url": "https://www.covermantra.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.covermantra.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect & DNS Prefetch to speed up load time */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1075025135055761');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1075025135055761&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
