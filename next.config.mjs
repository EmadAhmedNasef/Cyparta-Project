/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "sadakatcdn.cyparta.com",
      },
    ],
  },
};

export default nextConfig;
