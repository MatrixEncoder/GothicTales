require('dotenv').config({ path: '.env.local' });
const path = require('path');
const fs = require('fs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Disable type checking during build to speed up process
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint during build
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY
  },
  webpack: (config, { isServer }) => {
    // Fallback for node-specific modules
    config.resolve.fallback = { 
      fs: false, 
      net: false, 
      tls: false 
    };

    // Disable source maps in production
    if (!isServer) {
      config.devtool = false;
    }

    return config;
  },
  // Netlify requires output to be static
  output: 'export',
  // Ensure all routes are statically generated
  trailingSlash: true,
}

module.exports = nextConfig
