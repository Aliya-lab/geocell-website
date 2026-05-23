/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // basePath removed: site now serves from custom domain root
}

module.exports = nextConfig
