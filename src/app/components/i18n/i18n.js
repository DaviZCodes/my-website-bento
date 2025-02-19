import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/us-en.json";
import es from "./locales/es-br.json";
import zh from "./locales/zh-cn.json";
import pt from "./locales/pt-br.json";

i18n.use(initReactI18next).init({
  resources: {
    "us-en": { translation: en },
    "es-br": { translation: es },
    "zh-cn": { translation: zh },
    "pt-br": { translation: pt },
  },
  lng: "us-en", // Default language
  fallbackLng: "us-en", // If the selected language is not available, fall back to English
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
