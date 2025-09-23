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
  themeColor: "#0a0a0a",
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
      <body className={`antialiased font-sans bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white`}>
        {/* Premium background effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.05),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.05),transparent_40%)]" />
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
