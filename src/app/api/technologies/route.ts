import { NextResponse, NextRequest } from "next/server";
import checkkeys from "@/lib/checkKeys";
import { headers } from "next/headers";
import { decode } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const json = await request.json();
  const Authentication = headers().get("Authentication") || "";
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

  const requiredKeys = ["name", "image"];

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
    const technology = await prisma.technology.create({
      data: {
        name: json.name,
        image: json.image,
      },
    });

    return NextResponse.json(technology, { status: 201 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id") || "";
  const mode = request.nextUrl.searchParams.get("mode");

  if (mode === "single") {
    try {
      const technology = await prisma.technology.findUnique({
        where: {
          id,
        },
      });

      if (!technology) {
        return NextResponse.json(
          { status: 404, message: "Technology not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(technology, { status: 200 });
    } catch (e) {
      return NextResponse.json({ status: 500, error: e }, { status: 500 });
    }
  }

  try {
    const technologies = await prisma.technology.findMany();
    return NextResponse.json(technologies, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const json = await request.json();
  const Authentication = headers().get("Authentication") || "";
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

  const requiredKeys = [
    "id",
    "name",
    "image"
  ];

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
    const technology = await prisma.technology.update({
      where: {
        id: json.id
      },
      data: {
        name: json.name,
        image: json.image,
      },
    });

    return NextResponse.json(technology, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id") || "";
  const Authentication = headers().get("Authentication") || "";
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
    const technology = await prisma.technology.delete({
      where: {
        id
      }
    });

    return NextResponse.json(technology, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}