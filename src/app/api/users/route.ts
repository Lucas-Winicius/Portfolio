import { NextResponse, NextRequest } from "next/server";
import checkkeys from "@/lib/checkKeys";
import { encode } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import generateCode from "@/lib/generateCode";

export async function POST(request: NextRequest) {
  const json = await request.json();
  const requiredKeys = ["nick", "pass"];
  const hex = generateCode(100);
  const missingKeys = checkkeys(requiredKeys, json);
  const ADM_PASS = process.env.ADM_PASS;

  if (json.ADM_PASS != ADM_PASS) {
    return NextResponse.json(
      {
        status: 401,
        message: "Authentication could not be verified.",
      },
      { status: 401 }
    );
  }

  if (missingKeys.length > 0) {
    return NextResponse.json(
      {
        status: 400,
        message: `You have missed the following parameters: ${missingKeys}`,
      },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.create({
      data: {
        nick: json.nick,
        pass: json.pass,
        hex: hex,
      },
    });

    const auth = encode({
      id: user.id,
      nick: user.nick,
      hex: user.hex,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });

    return NextResponse.json({ user, auth }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}
