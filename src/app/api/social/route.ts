import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const json = await request.json();

  if (!json.name || !json.image) {
    return NextResponse.json(
      {
        status: 400,
        message: "Some parameters are missing (name | image)"
      },
      { status: 400 }
    );
  }

  const social = await prisma.social.create({
    data: {
      name: json.name,
      image: json.image
    }
  });

  return NextResponse.json(social, { status: 201 });
}
