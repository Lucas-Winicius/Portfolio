import { NextResponse, NextRequest } from "next/server";
import checkkeys from "@/lib/checkKeys";
import { headers } from "next/headers";
import { decode } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const json = await request.json();
  const requiredKeys = ["email", "title", "content"];

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
    const message = await prisma.message.create({
      data: {
        email: json.email,
        title: json.title,
        content: json.content,
      },
    });

    return NextResponse.json(message, { status: 201 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id") || "";
  const mode = request.nextUrl.searchParams.get("mode");

  if (mode === "single") {
    try {
      const message = await prisma.message.findUnique({
        where: {
          id,
        },
      });

      if (!message) {
        return NextResponse.json(
          { status: 404, message: "Message not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(message, { status: 200 });
    } catch (e) {
      return NextResponse.json({ status: 500, error: e }, { status: 500 });
    }
  }

  try {
    const messages = await prisma.message.findMany();
    return NextResponse.json(messages, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id") || "";
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

  try {
    const message = await prisma.message.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(message, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}
