require('dotenv').config({ path: '.env.local' });

// Load environment variables

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  }
}

module.exports = nextConfig
