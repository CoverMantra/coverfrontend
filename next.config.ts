import type { NextConfig } from "next";

const allowedImageHosts = ["cdnwebapp.indialends.com"];

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: allowedImageHosts.map((host) => ({
      protocol: "https",
      hostname: host,
      pathname: "/**",
    })),
  },

  async rewrites() {
    return [
      {
        source: "/api-proxy/:path*",
        destination: "https://www.covermantra.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
