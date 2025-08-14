import type { NextConfig } from "next";

const mountPath = process.env.COSMIC_MOUNT_PATH;
const basePath = mountPath && mountPath !== "/" ? mountPath : undefined;

const config: NextConfig = {
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default config;
