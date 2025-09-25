import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eab308",
};

export const metadata: Metadata = {
  title: "Vpagpk - Premium Digital Solutions",
  description: "Transform your digital presence with cutting-edge web solutions, creative design, and innovative technology.",
  keywords: "web development, digital solutions, creative design, technology, premium services",
  authors: [{ name: "Vpagpk" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`antialiased font-sans bg-gradient-to-br from-yellow-900/20 via-amber-900/30 to-black text-white`}>
        {/* Premium background effects with yellow/gold theme */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.08),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(217,119,6,0.06),transparent_40%)]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>
        
        <ErrorReporter />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
