import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // statik export
  trailingSlash: true,
  images: {
    unoptimized: true,       // ✅ Image Optimization kapalı
  },
};

export default nextConfig;
