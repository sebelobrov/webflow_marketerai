import type { NextConfig } from "next";

const mountPath = process.env.COSMIC_MOUNT_PATH;
const basePath = mountPath && mountPath !== "/" ? mountPath : undefined;

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
