/** @type {import('next').NextConfig} */
import nextPwa from "next-pwa";

const withPWA = nextPwa({
  dest: "public",
  disable: false, //process.env.NODE_ENV === "development"
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  cacheStartUrl: true,
  //   runtimeCaching, //TODO
});

const nextConfig = withPWA({
  // config
});

export default nextConfig;
