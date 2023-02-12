/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Docker pipeline setting
  output: "standalone",
  // Image source
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
