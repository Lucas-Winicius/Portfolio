import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest, context: any) {
  const id = parseInt(context?.params?.id) || 0;
  const mode = request.nextUrl.searchParams.get("mode");

  if (mode === "single") {
    const technology = await prisma.technologies.findUnique({
      where: {
        id
      }
    });

    if (!technology) {
      return NextResponse.json(
        { status: 404, message: "This technology was not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(technology, { status: 200 });
  }

  if (mode === "all") {
    const technologies = await prisma.technologies.findMany();
    return NextResponse.json(technologies, { status: 200 });
  }
}

export async function PUT(request: Request, context: any) {
  const id = parseInt(context?.params?.id) || 0;
  const json = await request.json();

  const updatedTechnology = await prisma.technologies.update({
    where: {
      id
    },
    data: {
      name: json.name,
      image: json.image
    }
  });

  return NextResponse.json(updatedTechnology, { status: 200 });
}

export async function DELETE(request: Request, context: any) {
  const id = parseInt(context?.params?.id) || 0;

  const deletedTechnology = await prisma.technologies.delete({
    where: {
      id
    }
  });

  return NextResponse.json(deletedTechnology, { status: 200 });
}
