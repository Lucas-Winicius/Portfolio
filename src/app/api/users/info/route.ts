import { NextRequest, NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { decode } from "@/lib/jwt";

export async function POST(request: NextRequest) {
  const Authentication = request.cookies.get("UserToken")?.value || "";
  const decoded = decode(Authentication);

  if (!decoded.success) {
    return NextResponse.json(
      {
        status: 401,
        message: "The login information is incorrect. Please log in again.",
      },
      {
        status: 401,
      }
    );
  }

  return NextResponse.json({ status: 200, user: decoded }, { status: 200 });
}
