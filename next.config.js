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
<<<<<<< HEAD
  // output: "export",
  distDir: "dist"
=======
  output: "export",
  distDir: 'dist',
});


>>>>>>> d2b022680a35ba90b5761ff0dee51affee7887d7



