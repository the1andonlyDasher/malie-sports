/** @type {import('next').NextConfig} */



const withPWA = require('next-pwa')({
  dest: 'public',
  disable: false,
  register: true,
  mode:"production",

  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  reactStrictMode: true,
   output: "export",
})


