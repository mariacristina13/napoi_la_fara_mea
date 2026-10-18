/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Let next/image load pictures hosted on Wikimedia Commons (used on the home page).
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
