/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;