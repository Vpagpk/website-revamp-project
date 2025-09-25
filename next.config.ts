import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure for Replit environment
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
  // Allow all hosts for Replit proxy
  experimental: {
    allowMiddlewareResponseBody: true,
  },
};

export default nextConfig;
