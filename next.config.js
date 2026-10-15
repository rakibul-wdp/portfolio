/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  experimental: {
    useTypeScriptCli: false,
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
