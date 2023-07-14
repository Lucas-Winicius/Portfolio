import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest, context: any) {
  const hexCode = String(context?.params?.hexCode) || "";
  const mode = request.nextUrl.searchParams.get("mode");

  if (mode === "single") {
    const project = await prisma.projects.findFirst({
      where: {
        hexCode: hexCode
      }
    });

    return NextResponse.json(project, { status: 200 });
  } else {
    const projects = await prisma.projects.findMany();

    return NextResponse.json(projects, { status: 200 });
  }
}

export async function PUT(request: NextRequest, context: any) {
  const hexCode = String(context?.params?.hexCode) || "";
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

  const projectEdit = await prisma.projects.update({
    where: {
      hexCode
    },
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

  return NextResponse.json(projectEdit, { status: 200 });
}
