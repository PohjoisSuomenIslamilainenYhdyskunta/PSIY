const { i18n } = require('./next-i18next.config');
const withYAML = require('next-yaml');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  },
  i18n,
};

module.exports = withYAML(module.exports);