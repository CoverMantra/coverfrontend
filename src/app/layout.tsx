import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import "aos/dist/aos.css";
import ClientLayout from "../../src/app/clientlayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoverMantra - Your Trusted Loan & Insurance Partner",
  description:
    "Discover the best insurance plans with CoverMantra. Compare and buy health, life, car, and travel insurance policies at competitive rates. Get expert advice today!",
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
  alternates: {
    canonical: "https://www.covermantra.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
