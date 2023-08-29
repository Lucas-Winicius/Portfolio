import { NextResponse, NextRequest } from "next/server";
import checkkeys from "@/lib/checkKeys";
import { headers } from "next/headers";
import { decode } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
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
  const json = await request.json();

  const requiredKeys = [
    "name",
    "description",
    "images",
    "github",
    "technologies",
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
    const project = await prisma.project.create({
      data: {
        name: json.name,
        description: json.description,
        images: json.images,
        github: json.github,
        url: json.url,
        technologies: json.technologies,
        visibility: json.visibility || "VISIBLE",
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id") || "";
  const mode = request.nextUrl.searchParams.get("mode");

  if (mode === "single") {
    try {
      const project = await prisma.project.findUnique({
        where: {
          id,
        },
      });

      if (!project) {
        return NextResponse.json(
          { status: 404, message: "Project not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(project, { status: 200 });
    } catch (e) {
      return NextResponse.json({ status: 500, error: e }, { status: 500 });
    }
  }

  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(projects, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
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
  const json = await request.json();

  const requiredKeys = [
    "id",
    "name",
    "description",
    "images",
    "github",
    "technologies",
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
    const project = await prisma.project.update({
      where: {
        id: json.id,
      },
      data: {
        name: json.name,
        description: json.description,
        images: json.images,
        github: json.github,
        url: json.url,
        technologies: json.technologies,
        visibility: json.visibility || "VISIBLE",
      },
    });

    return NextResponse.json(project, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
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
    const project = await prisma.project.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(project, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 500 });
  }
}
