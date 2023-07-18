import { NextResponse, NextRequest } from "next/server";
import checkkeys from "@/lib/checkKeys";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const json = await request.json();
  const requiredKeys = ["title", "content", "tags"];
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
    const post = await prisma.post.create({
      data: {
        title: json.title,
        content: json.content,
        tags: json.tags,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}
