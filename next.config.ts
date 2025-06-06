import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";

const repoName = "quieasy";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  output: 'export',
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  basePath: isGithubPages ? `/${repoName}` : "",
  trailingSlash: true,
};

export default nextConfig;
