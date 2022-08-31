const path = require('path')
module.exports = {
    i18n: {
      defaultLocale: 'vi',
      locales: ['en', 'vi'],
      react: {
        useSuspense: false,
      },
    },
    localePath: path.resolve('.src/i18n/languages'),
    
  };