/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  poweredByHeader: false,
};

module.exports = nextTranslate(nextConfig);
