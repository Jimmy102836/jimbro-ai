/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  distDir: '.next',
  trailingSlash: false,
  poweredByHeader: false,
};

module.exports = nextConfig;
