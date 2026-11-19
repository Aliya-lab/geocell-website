/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // basePath removed: site now serves from custom domain root.
  // /cb and /CB permanent redirects live in vercel.json. next.config redirects
  // are not applied when output is "export".
}

module.exports = nextConfig
