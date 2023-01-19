/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
