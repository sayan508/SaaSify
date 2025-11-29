import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaaSify — Build Faster with the Power of AI",
  description: "Turn ideas into reality with AI-driven speed, precision, and scalability",
  icons: {
    icon: "/favicon.ico",   
    shortcut: "/favicon.ico",
    apple: "/favicon.png", 
  },

  openGraph: {
    title: "SaaSify — Build Faster with the Power of AI",
    description: "Accelerate product development with AI-powered tools.",
    images: ["/og-image.png"],
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
        {children}
      </body>
    </html>
  );
}
