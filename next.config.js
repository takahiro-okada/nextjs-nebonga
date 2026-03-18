/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['wp.nebonga.com', 'nebonga.local'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
