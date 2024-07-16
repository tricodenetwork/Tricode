/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "afxkeiua4oauvagy.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scontent.fabv2-2.fna.fbcdn.net",
        port: "",
        pathname: "/v/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
  rewrites: async () => {
    console.log("NODE_ENV:", process.env.NODE_ENV);
    console.log("Rewrites being applied");
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value:
              process.env.NODE_ENV === "development"
                ? "client.localhost:3000"
                : "client.tricode.pro",
          },
        ],
        destination: "/client/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
