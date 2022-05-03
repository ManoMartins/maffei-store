/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
  },
  images: {
    domains: ['store-images.s-microsoft.com', 'images.alphacoders.com', 'images.wallpapersden.com', 'images.expothemes.com'],
  },
}

module.exports = nextConfig
