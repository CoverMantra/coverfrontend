/** @type {import('next').NextConfig} */
const allowedImageHosts = ["cdnwebapp.indialends.com"];

const nextConfig = {
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
        source: "/api-proxy/:path*", // local path
        destination: "https://www.covermantra.com/api/:path*", // actual backend API
      },
    ];
  },
};

module.exports = nextConfig;
