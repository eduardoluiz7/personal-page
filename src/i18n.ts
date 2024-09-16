import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import ptTranslation from './locales/pt/translation.json';

i18n
  .use(initReactI18next) // Integração do i18next com o React
  .init({
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation },
    },
    lng: 'en', // Idioma padrão
    fallbackLng: 'en', // Idioma fallback
    interpolation: { escapeValue: false }, // React já faz o escaping por padrão
  });

export default i18n;