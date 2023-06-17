/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        port: "",
        pathname: "/img/2e73/**",
      },
    ],
  },
};

module.exports = nextConfig;
