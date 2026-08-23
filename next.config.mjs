/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const repoName = "/book-proj-1";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? repoName : "",
  assetPrefix: isProd ? `${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoName : "",
  },
};

export default nextConfig;