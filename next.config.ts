import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: process.env.STRAPI_API_MEDIA_HOSTNAME,
      // },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
  turbopack: {
    rules: {
      '*.svg': {
        as: '*.js',
        loaders: ['@svgr/webpack'],
      },
    },
  },
};

export default nextConfig;
