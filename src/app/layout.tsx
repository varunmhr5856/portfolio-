import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { MatrixRain } from "@/components/ui/MatrixRain";

export const metadata: Metadata = {
  title: "Varun Mehrotra | Cybersecurity Portfolio",
  description: "Modern cybersecurity portfolio for Varun Mehrotra - Cybersecurity Enthusiast & Network Security Learner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[var(--color-cyber-green)] selection:text-black`}
      >
        <MatrixRain />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
