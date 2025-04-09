import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import en from './locales/en.json';
import zh from './locales/zh.json';

i18n.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    resources: {
        en: { translation: en},
        zh :{ translation:zh}
    },
    fallbackLng: "en", // default language
    interpolation: {
        escapeValue: false
    }
})

export default i18n;