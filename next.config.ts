import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ensures app behavior is consistent
  devIndicators: {
    buildActivity: false, // Removes "Static Route" notification
    buildActivityPosition: "bottom-right", // Just in case it's still enabled
  },
};

export default nextConfig;
