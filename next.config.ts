import type { NextConfig } from "next";

const pages=process.env.GITHUB_PAGES==="true";
const nextConfig: NextConfig = {
  ...(pages?{output:"export",basePath:"/vinylandtonic",assetPrefix:"/vinylandtonic/",trailingSlash:true}:{}),
  images:{unoptimized:true},
  typescript:{ignoreBuildErrors:true},
};

export default nextConfig;
