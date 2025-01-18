import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp'],
  },
  reactStrictMode: false,
  transpilePackages: ['@mdi/js', '@mdi/react'],
  /* config options here */
}

export default nextConfig
