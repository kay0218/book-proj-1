/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/book-proj-1",
  assetPrefix: "/book-proj-1/",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/book-proj-1",
  },
};

export default nextConfig;