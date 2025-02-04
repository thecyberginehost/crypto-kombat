import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ensures app behavior is consistent
  devIndicators: {
    buildActivity: false, // Removes "Static Route" notification
    buildActivityPosition: "bottom-right", // Ensures it's completely disabled
  },
  output: "export", // Fix for 404 errors on Vercel by ensuring static export
  trailingSlash: true, // Helps prevent missing routes in Vercel
  images: {
    unoptimized: true, // Avoids issues with image optimization on Vercel
  },
};

export default nextConfig;
