"use client";
import React from "react";

import * as C from "./styled";

const cookie: React.FC = () => {
  return (
    <C.Container>
      <h1>Cookies!</h1>
      <p>
        Nós usamos cookies para melhorar sua experiência em nosso site. Ao
        continuar navegando, você concorda com o uso de cookies.
      </p>
      <button>Entendo</button>
    </C.Container>
  );
};

export default cookie;
