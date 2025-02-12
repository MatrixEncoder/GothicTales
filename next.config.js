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
  
  // Explicitly define routes for static export
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const dynamicRoutes = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/submit': { page: '/submit' },
      '/story': { page: '/story' },
      '/killer': { page: '/killer' },
      '/legend': { page: '/legend' }
    };

    // Add dynamic routes for stories, killers, and legends
    const contentDirs = [
      path.join(dir, 'src/content/stories'),
      path.join(dir, 'src/content/killers'),
      path.join(dir, 'src/content/legends')
    ];

    for (const contentDir of contentDirs) {
      if (fs.existsSync(contentDir)) {
        const files = fs.readdirSync(contentDir)
          .filter(file => file.endsWith('.md'));
        
        files.forEach(file => {
          const slug = file.replace('.md', '');
          const basePath = contentDir.includes('stories') ? '/story' :
                           contentDir.includes('killers') ? '/killer' :
                           '/legend';
          
          dynamicRoutes[`${basePath}/${slug}`] = { 
            page: `${basePath}/[slug]`,
            query: { slug }
          };
        });
      }
    }

    return dynamicRoutes;
  }
}

module.exports = nextConfig
