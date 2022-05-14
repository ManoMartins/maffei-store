/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
  },
  images: {
    domains: ['cdn.cloudflare.steamstatic.com', 'www.gtplanet.net'],
    hostname: 'cdn.cloudflare.steamstatic.com',
  },
};

module.exports = nextConfig;
