import { NextResponse } from "next/server";
import checkkeys from "@/lib/checkKeys";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
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
        technologies: json.technologies,
        visibility: json.visibility || "VISIBLE",
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e }, { status: 201 });
  }
}
