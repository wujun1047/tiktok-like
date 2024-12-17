/** @type {import('next').NextConfig} */
const nextConfig = {
  // 确保配置正确
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixabay.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
};

module.exports = nextConfig;
