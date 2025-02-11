require('dotenv').config({ path: '.env.local' });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY
  },
  basePath: '/GothicTales',
  assetPrefix: '/GothicTales/',
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  }
}

module.exports = nextConfig
