import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const AuthCookies = req.cookies.has(
    `UserToken-${process.env.USER_TOKEN_HASH}`
  );

  if (pathname === "/dashboard" && !AuthCookies) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname === "/login" && AuthCookies) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  
  if (AuthCookies) {
    const authToken =
      req.cookies.get(`UserToken-${process.env.USER_TOKEN_HASH}`)?.value || "";

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("Authentication", authToken);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/login", "/dashboard"],
};
