"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Home() {
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState("pt-BR");

  const toggleLang = () => {
    const newLanguage = lang == "pt-BR" ? "en-US" : "pt-BR";
    setLang(newLanguage);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <h1>{t("title")}</h1>
      <button onClick={toggleLang}>Troca</button>
    </>
  );
}
