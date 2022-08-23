/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
  },
  images: {
    domains: [
      'cdn.cloudflare.steamstatic.com',
      'www.gtplanet.net',
      'localhost',
      '192.168.137.232',
    ],
    hostname: 'cdn.cloudflare.steamstatic.com',
  },
};

module.exports = nextConfig;
