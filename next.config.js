/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: ['wp.nebonga.com', 'nebonga.local'],
  },
}

module.exports = nextConfig
