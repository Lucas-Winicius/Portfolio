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
      id: user.id,
      userNick: user.nick,
      userHex: user.hex
    },
    { status: 201 }
  );
}

export async function GET(request: Request) {
  const json = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      nick: json.nick,
      pass: json.pass
    }
  });

  if (!user) {
    return NextResponse.json(
      { status: 404, message: "User not found." },
      { status: 404 }
    );
  }

  NextResponse.json(
    {
      status: 200,
      id: user.id,
      userNick: user.nick,
      userHex: user.hex
    },
    { status: 200 }
  );

  user.appetizer += 1;

  if (user?.tempUser && user.uses !== null) {
    user.uses -= 1;

    if (user.uses <= 0) {
      await prisma.user.delete({
        where: {
          id: user.id
        }
      });
    }
  }
  await prisma.user.update({
    where: {
      id: user.id
    },
    data: {
      appetizer: user.appetizer,
      uses: user.uses
    }
  });
}
