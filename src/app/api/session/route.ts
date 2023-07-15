import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import generateHex from "@/lib/generateHex";

export async function POST(request: Request) {
  const { access_code, ...json } = await request.json();
  const ADM_KEY = process.env.ACCESS_CODE;

  if (access_code !== ADM_KEY) {
    return NextResponse.json(
      { status: 401, error: "Access denied" },
      { status: 401 }
    );
  }

  const hex = generateHex(80);

  const user = await prisma.user.create({
    data: {
      ...json,
      hex,
      appetizer: 0
    }
  });

  return NextResponse.json(
    {
      status: 201,
      userNick: user.nick,
      userHex: user.hex
    },
    { status: 201 }
  );
}
