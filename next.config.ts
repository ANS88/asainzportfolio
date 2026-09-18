import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/asainzportfolio" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/asainzportfolio/" : "",
};

export default nextConfig;
