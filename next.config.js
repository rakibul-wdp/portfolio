/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useTypeScriptCli: false,
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
