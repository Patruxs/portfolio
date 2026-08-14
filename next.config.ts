import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Set by the GitHub Pages workflow to "/portfolio"; empty for local dev
  basePath: process.env.BASE_PATH || "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
