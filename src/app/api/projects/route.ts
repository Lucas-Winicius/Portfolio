import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import generateHex from "@/lib/generateHex";

export async function POST(request: Request) {
  const json = await request.json();

  if (
    !json.name ||
    !json.description ||
    !json.images ||
    !json.github ||
    !json.url ||
    !json.technologies
  ) {
    return NextResponse.json(
      {
        status: 400,
        message:
          "Either one of the following parameters is missing: ( name | description | images | github | url | image )."
      },
      { status: 400 }
    );
  }

  const hexCode = generateHex(5);

  const project = await prisma.projects.create({
    data: {
      name: json.name,
      description: json.description,
      images: json.images,
      githubLink: json.github,
      projectLink: json.url,
      hexCode: hexCode,
      visibility: json.visibility || "VISIBLE",
      technologies: json.technologies
    }
  });

  return NextResponse.json(project, { status: 201 });
}
