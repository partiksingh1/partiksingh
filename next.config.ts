import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['github.com', 'images.unsplash.com'], // Add any other domains from which you want to load images
  }
};

export default nextConfig;
