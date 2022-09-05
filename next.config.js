/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
const { withGoogleFonts } = require("nextjs-google-fonts");

module.exports = withGoogleFonts({
  googleFonts: {
    fonts: [
      "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
    ],
  },
});