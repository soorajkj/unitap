import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        hostname: "www.google.com",
      },
    ],
  },
};

export default nextConfig;
