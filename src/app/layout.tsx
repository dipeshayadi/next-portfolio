import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Student | Portfolio",
  description: "High-end scrollytelling personal portfolio website.",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
    >
      <body className="antialiased min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-white/20">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
