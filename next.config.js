<<<<<<< HEAD
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
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  basePath: '/GothicTales',
  assetPrefix: '/GothicTales/',
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551
}

module.exports = nextConfig
