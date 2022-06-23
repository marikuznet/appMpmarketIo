import { createI18n } from 'vue-i18n';

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages() {
  const locales = require.context('./lang', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

function checkDefaultLanguage() { //Определяем язык браузера
  let matched = null;
  let languages = Object.getOwnPropertyNames(loadLocaleMessages());
  languages.forEach(lang => {
    if (lang === navigator.language) {
      matched = lang;
    }
  });
  if (!matched) {
    languages.forEach(lang => {
      let languagePartials = navigator.language.split("-")[0];
      if (lang === languagePartials) {
        matched = lang;
      }
    });
  }
  return matched;
}
export const selectedLocale = localStorage.getItem('locale') || checkDefaultLanguage() || "ru";

const setDateTimeFormats = {
  short: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
  long: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  },
};

const dateTimeFormats = {
  en: setDateTimeFormats,
  es: setDateTimeFormats,
  de: setDateTimeFormats,
  'en-GB': setDateTimeFormats,
};

export default createI18n({
  locale: selectedLocale || "ru",
  globalInjection: true,
  fallbackLocale: "ru",
  /*locale: process.env.VUE_APP_I18N_LOCALE || 'ru',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ru',*/
  messages: loadLocaleMessages(),
  dateTimeFormats,
});