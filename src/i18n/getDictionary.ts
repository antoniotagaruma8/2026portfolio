const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (locale !== 'en' && locale !== 'es') {
    return dictionaries.en();
  }
  return dictionaries[locale as keyof typeof dictionaries]();
};
