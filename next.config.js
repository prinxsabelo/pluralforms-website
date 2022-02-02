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
  ]
}
