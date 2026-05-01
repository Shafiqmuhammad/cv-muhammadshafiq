


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "api.qrserver.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "cv-muhammadshafiq.vercel.app",
//         pathname: "/**",
//       },
//     ],
//   },
//   reactStrictMode: true,
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,   // ← add this line
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.qrserver.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cv-muhammadshafiq.vercel.app",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;