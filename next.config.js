const { paraglide } = require('@inlang/paraglide-next/plugin');
const { version } = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

module.exports = paraglide({
  paraglide: {
    project: './project.inlang',
    outdir: './src/paraglide',
  },
  publicRuntimeConfig: {
    version,
  },
  ...nextConfig,
});
