/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{ hostname: 'wp.nebonga.com' }, { hostname: 'nebonga.local' }],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
