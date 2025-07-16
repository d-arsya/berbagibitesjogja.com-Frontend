import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'news-api.berbagibitesjogja.com',
      pathname: '**',
    },
    ],
  },
};

export default nextConfig;
