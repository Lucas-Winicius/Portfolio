"use client";
import * as H from "./styled";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export default function Header() {
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState({ lang: "ptBR", firstLoad: true });

  useEffect(() => {
    if (lang.firstLoad) {
      const langG = Cookies.get("lang") as string;
      setLang({ lang: langG, firstLoad: false });
    }

    Cookies.set("lang", lang.lang, {
      expires: 7,
      sameSite: "strict",
      path: "/"
    });

    i18n.changeLanguage(lang.lang);
  }, [lang, i18n]);

  const toggleLang = (): void => {
    const newLanguage = lang.lang == "ptBR" ? "en" : "ptBR";
    setLang({ lang: newLanguage, firstLoad: false });
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
