module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  defaultNS: 'index',
  pages: {
    '*': ['index'],
  },
  loadLocaleFrom: (lang, ns) => {
    return import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default);
  },
};
