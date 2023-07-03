import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import ptBR from "./languages/ptBR.json";
import en from "./languages/en.json";

i18n.use(initReactI18next).init({
  fallbackLng: "pt-BR",
  resources: {
    en: en,
    ptBR: ptBR
  }
});

export default i18n;
