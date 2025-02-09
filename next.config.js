/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  basePath: '/GothicTales',
  assetPrefix: '/GothicTales/',
}

module.exports = nextConfig
