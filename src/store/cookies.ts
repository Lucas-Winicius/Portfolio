import { Cookie } from "next/font/google";
import { create } from "zustand";

type Cookie = {
  cookie?: string;
  lang?: string;
};

type State = {
  cookie: Cookie;
  setCookie: (cookie: Cookie) => void;
};

const useCookieStore = create<State>((set) => ({
  cookie: {},
  setCookie: (cookie) => set(() => ({ cookie: { ...cookie } }))
}));

export default useCookieStore;
