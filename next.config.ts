import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        hostname: "www.google.com",
      },
      {
        hostname: "framerusercontent.com",
      },
    ],
  },
};

export default nextConfig;
