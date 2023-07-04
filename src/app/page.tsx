"use client";
import Landing from "@/patterns/landing/index";
import Cookie from "@/patterns/cookie/index";
import useCookieStore from "@/store/cookies";

export default function Home() {
  const cookies = useCookieStore((state) => state.cookie);

  return (
    <>
      <Landing />
      {!cookies.cookie && <Cookie />}
    </>
  );
}
