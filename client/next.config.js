/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com']
  },
  /* Add Your Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },

  cssModules: true
}

module.exports = nextConfig
