import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS ? "/asainzportfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  // Plain <img> and <a> tags don't get basePath added, so expose it for building those URLs.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
