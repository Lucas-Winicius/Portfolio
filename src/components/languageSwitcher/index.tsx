import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const setLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <button onClick={() => setLanguage("ptBR")}>Portugues</button>
      <button onClick={() => setLanguage("en")}>Ingles</button>
    </>
  );
};
