"use client";
import jsCookies from "js-cookie";
import { useEffect, useState } from "react";

function Cookies() {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setHide(!!jsCookies.get().CookieConfirmation);
  }, []);

  const handleConfirmation = () => {
    jsCookies.set("CookieConfirmation", "accepted", {
      path: "/",
      expires: 15,
      sameSite: "Lax",
    });
    setHide(true);
  };

  return (
    <div
      className={`fixed left-4 bottom-4 w-2/4 bg-slate-100 rounded p-2 text-zinc-950 font-bold space-y-2 lg:w-1/4 ${
        hide && "hidden"
      }`}
    >
      <p>
        Utilizamos cookies com o objetivo de melhorar a sua experiência como
        usuário. Ao utilizar a página, você concorda que nós utilizemos cookies.
        🍪
      </p>
      <button
        onClick={handleConfirmation}
        className="bg-zinc-950 w-full text-slate-50 py-2"
      >
        Entendo
      </button>
    </div>
  );
}

export default Cookies;
