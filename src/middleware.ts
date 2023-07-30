import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const AuthCookies = req.cookies.has(`UserToken`);

  if (pathname === "/dashboard" && !AuthCookies) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname === "/login" && AuthCookies) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/login", "/dashboard"],
};
