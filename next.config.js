/** @type {import('next').NextConfig} */
const nextConfig = {
  // SVGR (.svg loading)
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  reactStrictMode: true,

  // Docker pipeline setting
  output: "standalone",

  // Image source
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
