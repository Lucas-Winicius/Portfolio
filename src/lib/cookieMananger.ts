import { getCookie, setCookie } from "cookies-next";

function parseString(string: string): Record<string, string> {
  const values: Record<string, string> = {};

  for (const keyValue of string.split("&")) {
    const [key, value] = keyValue.split("=");
    values[key] = value ?? "";
  }

  return values;
}

function reverseString(parsedValues: Record<string, string>): string {
  const keyValuePairs = [];

  for (const key in parsedValues) {
    const value = parsedValues[key];
    const keyValue = `${key}=${value}`;
    keyValuePairs.push(keyValue);
  }

  return keyValuePairs.join("&");
}

export function getCookies(name: string): Record<string, string> {
  const cookieString: string = getCookie(name) as string;
  const cookieParsed: Record<string, string> = parseString(cookieString || "");
  return cookieParsed;
}

export function setCookies(cookie: { cookie?: string; lang?: string }): void {
  const reversedString = reverseString(cookie);
  setCookie("preferences", reversedString, {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    sameSite: "strict",
    path: "/"
  });
}
