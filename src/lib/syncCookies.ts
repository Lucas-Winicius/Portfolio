import useCookieStore from "@/store/cookies";
import { setCookies } from "./cookieMananger";
import { changeLanguage } from "i18next";

const { getState, subscribe } = useCookieStore;

subscribe(() => {
  const newCookie = getState().cookie;
  setCookies(newCookie);

  if (newCookie.lang) {
    changeLanguage(newCookie.lang);
  }
  console.log("Cookie alterado:", newCookie);
});
