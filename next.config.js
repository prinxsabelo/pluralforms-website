const withPlugins = require('next-compose-plugins')
const withImages = require('next/image')
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io']
  }
}

module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      { "ssr": true, "displayName": true, "preprocess": false }
    ]
  ],
}
module.exports = withPlugins([[withImages]], nextConfig)


