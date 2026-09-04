import type { NextConfig } from "next";

// A GitHub Pages project site serves from /<repo>/, not from the domain root.
// The production build for www.clayspacebk.com must stay root-relative, so the
// base path is opt-in via an env var rather than baked into the config:
//     PAGES_BASE_PATH=/<repo-name> npm run build
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  turbopack: {},
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  // This site ships as a static export. Making it explicit means the build fails
  // if anything incompatible is added (route handlers, server actions, dynamic
  // segments) rather than the deployed snapshot silently going stale.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
