import { NextResponse, NextRequest } from "next/server";
import checkkeys from "@/lib/checkKeys";
import { encode } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const json = await request.json();
  const requiredKeys = ["nick", "pass"];
  const missingKeys = checkkeys(requiredKeys, json);

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
    const user = await prisma.user.findFirst({
      where: {
        nick: json.nick,
        pass: json.pass,
      },
      select: {
        id: true,
        nick: true,
        pass: false,
        hex: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          status: 404,
          message:
            "Unable to log in. Please check the credentials provided and try again.",
        },
        { status: 404 }
      );
    }

    const auth = encode(user)

    return NextResponse.json({user, auth}, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}
