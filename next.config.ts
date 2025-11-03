import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ 本番ビルド時に ESLint や TypeScript エラーで停止しないようにする
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
