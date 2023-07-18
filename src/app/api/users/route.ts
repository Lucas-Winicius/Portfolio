import { NextResponse, NextRequest } from "next/server";
import checkkeys from "@/lib/checkKeys";
import prisma from "@/lib/prisma";
import generateCode from "@/lib/generateCode";

export async function POST(request: Request) {
  const json = await request.json();
  const requiredKeys = ["nick", "pass"];
  const hex = generateCode(100);

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
    const user = await prisma.user.create({
      data: {
        nick: json.nick,
        pass: json.pass,
        hex: hex,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}

export async function GET(request: Request) {
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

    return NextResponse.json(user, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}
