import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBr from "./languages/pt-BR.json";
import enUs from "./languages/en-US.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en-US",
  resources: {
    "en-US": enUs,
    "pt-BR": ptBr,
  },
});

export default i18n;
