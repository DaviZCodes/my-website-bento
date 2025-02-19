import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/us-en.json";
import es from "./locales/es-br.json";
import zh from "./locales/zh-cn.json";
import pt from "./locales/pt-br.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
  zh: { translation: zh },
  pt: { translation: pt },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
