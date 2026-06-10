/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [{ hostname: 'wp.nebonga.com' }, { hostname: 'nebonga.local' }],
  },
}

module.exports = nextConfig
