import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Configure for Replit environment - allow all hosts for proxy compatibility
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  // Allow all hosts for Replit proxy environment
  experimental: {
    allowedRevalidateHeaderKeys: ['*'],
  },
  // Allow dev origins for Replit proxy compatibility
  allowedDevOrigins: [
    '*.replit.dev',
    '*.repl.co',
    '*.kirk.replit.dev', 
    'localhost',
    '127.0.0.1',
    '0.0.0.0',
  ],
};

export default nextConfig;
