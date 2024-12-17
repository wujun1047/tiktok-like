/** @type {import('next').NextConfig} */
const nextConfig = {
  // 确保配置正确
  reactStrictMode: true,
  images: {
    domains: ["cdn.pixabay.com"], // 添加 pixabay 的域名到允许列表
  },
};

module.exports = nextConfig;
