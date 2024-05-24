/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: ['wp.nebonga.com', 'nebonga.local'], // 画像を取得するホスト名を許可する
  },
}

module.exports = nextConfig
