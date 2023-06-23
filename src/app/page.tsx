"use client";

import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/languageSwitcher";

// Exemplo de como acessar os estilos inferidos do arquivo theme.ts dentro do styled-components;

export const Container = styled.div`
  h1 {
    font-size: ${(props) => props.theme.font.sizes.medium};

    /* color: ${(props) => props.theme.colors.gray_200}; */
  }
`;

export default function Home() {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>{t("titles")}</h1>
      <LanguageSwitcher />
    </Container>
  );
}
