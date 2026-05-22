import type { NextConfig } from "next";

const allowedImageHosts = [
  "cdnwebapp.indialends.com",
  "www.vivifin.com",
  "moneyview.in",
  "www.fdplfinance.com",
  "www.flexsalary.com",
  "www.getzype.com",
];

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // TypeScript errors ignore block jo pehle add kiya tha
  typescript: {
    ignoreBuildErrors: true,
  },

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
        // Yahan se extra '/api' hata diya aur ise seedhe naye backend port 5010 par map kar diya
        destination: "http://localhost:5001/api/:path*",
      },
    ];
  },
};

export default nextConfig;