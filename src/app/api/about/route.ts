import { NextResponse, NextRequest } from "next/server";
import checkkeys from "@/lib/checkKeys";
import { decode } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const json = await request.json();
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

  const requiredKeys = ["aboutText"];

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
    const verifyAbout = await prisma.about.findMany();

    if (verifyAbout.length) {
      return NextResponse.json(
        { status: 409, message: "Item already exists, please try editing it." },
        { status: 409 }
      );
    }

    const about = await prisma.about.create({
      data: {
        aboutText: json.aboutText,
        instagram: json.instagram,
        github: json.github,
        linkedin: json.linkedin,
      },
    });

    return NextResponse.json(about, { status: 201 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const about = await prisma.about.findFirst();
    const gitApi = await (
      await fetch("https://api.github.com/users/Lucas-Winicius")
    ).json();

    if (!about) {
      return NextResponse.json(
        { status: 404, message: "About not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ ...about, gitApi }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const json = await request.json();
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

  const requiredKeys = ["aboutText"];

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
    const about = await prisma.about.update({
      where: {
        id: json.id,
      },
      data: {
        aboutText: json.aboutText,
        instagram: json.instagram,
        github: json.github,
        linkedin: json.linkedin,
      },
    });

    return NextResponse.json(about, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}
