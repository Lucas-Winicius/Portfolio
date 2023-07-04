"use client";
import React from "react";
import useCookieStore from "@/store/cookies";

import * as C from "./styled";

function Cookie() {
  const setCookie = useCookieStore((state) => state.setCookie);

  const acceptCookie = () => {
    setCookie({ cookie: "accepted" });
  };

  return (
    <C.Container>
      <h1>Cookies!</h1>
      <p>
        Nós usamos cookies para melhorar sua experiência em nosso site. Ao
        continuar navegando, você concorda com o uso de cookies.
      </p>
      <button onClick={acceptCookie}>Entendo</button>
    </C.Container>
  );
}

export default Cookie;
