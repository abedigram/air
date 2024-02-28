/** @type {import('next').NextConfig} */
import nextPwa from "next-pwa";

const withPWA = nextPwa({
  dest: "public",
});

const nextConfig = withPWA({
  // config
});

export default nextConfig;
