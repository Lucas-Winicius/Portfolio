"use client";
import * as H from "./styled";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function Header() {
  const { t, i18n } = useTranslation();

  const localLang = localStorage.getItem("language") || "ptBR";
  const [lang, setLang] = useState(localLang);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const toggleLang = () => {
    const newLanguage = lang == "ptBR" ? "en" : "ptBR";
    setLang(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <H.header>
      <Image src={Logo} alt="LW" width={100} />
      <H.nav>
        <ul>
          <li>
            <Link href="/">{t("header.navigation.home")}</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">{t("header.navigation.contact")}</Link>
          </li>
          <li>
            <button onClick={toggleLang} title={t("header.button.title")}>
              <span id="blur">{t("header.button.flag")}</span>
              <span>{t("header.button.flag")}</span>
            </button>
          </li>
        </ul>
      </H.nav>
    </H.header>
  );
}
