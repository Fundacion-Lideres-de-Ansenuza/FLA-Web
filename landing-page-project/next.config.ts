import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**', // Allow any path under this hostname
      },
      // Add other hostnames if needed in the future
    ],
  },
  /* other config options here */
};

export default nextConfig;
