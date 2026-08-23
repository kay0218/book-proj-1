/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/book-proj-1",
  assetPrefix: "/book-proj-1/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;