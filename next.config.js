/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: false,
  register: true,
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  // next.js config
})

const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  distDir: "dist"

}

module.exports = nextConfig

