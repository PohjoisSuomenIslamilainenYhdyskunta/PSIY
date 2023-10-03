const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fi'],
  },
  localePath: path.resolve('./public/locales')
}