import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Your Awesome Brand - Fresh Fashion & Trends", // Default title
    template: "%s | Your Awesome Brand", // Template for page-specific titles
  },
  description: "Discover the latest fashion trends at Your Awesome Brand. Quality clothing and accessories at the best prices.",
  keywords: ["fashion", "clothing", "apparel", "new arrivals", "shop online", "moda", "ropa", "ecommerce"], // Added ecommerce
  // Example for Open Graph (you'd need a hosted image and metadataBase)
  // openGraph: {
  //   title: "Your Awesome Brand - Fresh Fashion & Trends",
  //   description: "Discover the latest fashion trends...",
  //   images: [{ url: '/og-image.jpg', width: 800, height: 600, alt: 'Your Awesome Brand Logo' }],
  //   siteName: "Your Awesome Brand",
  // },
  // For metadataBase, if using absolute URLs for OG images:
  // metadataBase: new URL('https://yourawesomebrand.com'), // Replace with actual domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
