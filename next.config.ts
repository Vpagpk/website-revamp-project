import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for shared hosting deployment
  output: 'export',
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
