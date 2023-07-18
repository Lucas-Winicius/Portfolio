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

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id") || "";
  const mode = request.nextUrl.searchParams.get("mode");

  if (mode === "single") {
    try {
      const post = await prisma.post.findUnique({
        where: {
          id,
        },
      });

      if (!post) {
        return NextResponse.json(
          { status: 404, message: "Post not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(post, { status: 200 });
    } catch (e) {
      return NextResponse.json({ status: 500, error: e }, { status: 500 });
    }
  }

  try {
    const post = await prisma.post.findMany();
    return NextResponse.json(post, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const json = await request.json();
  const requiredKeys = ["id", "title", "content", "tags"];
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
    const post = await prisma.post.update({
      where: {
        id: json.id,
      },
      data: {
        title: json.title,
        content: json.content,
        tags: json.tags,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id") || "";

  try {
    const post = await prisma.post.delete({
      where: {
        id
      }
    });

    return NextResponse.json(post, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}
