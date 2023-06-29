/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  },
}
const { i18n } = require('next-i18next')
const withYAML = require('next-yaml')
module.exports = withYAML(module.exports)
module.exports = { i18n}
