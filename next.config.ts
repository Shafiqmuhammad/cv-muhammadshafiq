// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.qrserver.com", "muhammad-shafiq00786.vercel.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.qrserver.com"
      }
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
