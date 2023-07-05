"use client";
import React from "react";
import * as C from "./styled";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

function Cookie() {
  const cookies = Cookies.get();
  const [hasCookies, setHasCookies] = useState(true);

  useEffect(() => {
    setHasCookies(Object.keys(cookies).length > 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (): void => {
    Cookies.set("lang", "ptBR", {
      expires: 7,
      sameSite: "strict",
      path: "/"
    });

    setHasCookies(true);
  };

  return (
    <>
      {!hasCookies && (
        <C.Container>
          <h1>Cookies!</h1>
          <p>
            Nós usamos cookies para melhorar sua experiência em nosso site. Ao
            continuar navegando, você concorda com o uso de cookies.
          </p>
          <button onClick={handleClick}>Entendi</button>
        </C.Container>
      )}
    </>
  );
}

export default Cookie;
