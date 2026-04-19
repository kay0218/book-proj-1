/** @type {import('next').NextConfig} */
const repoName = "/book-proj-1";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: repoName,
  assetPrefix: repoName,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;