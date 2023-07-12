import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest, context: any) {
  const id = parseInt(context?.params?.id) || 0;
  const mode = request.nextUrl.searchParams.get("mode");

  if (mode === "single") {
    const social = await prisma.social.findUnique({
      where: {
        id
      }
    });

    if (!social) {
      return NextResponse.json(
        { status: 404, message: "This social was not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(social, { status: 200 });
  }

  if (mode === "all") {
    const social = await prisma.social.findMany();
    return NextResponse.json(social, { status: 200 });
  }
}

export async function PUT(request: Request, context: any) {
  const id = parseInt(context?.params?.id) || 0;
  const json = await request.json();

  const updatedSocial = await prisma.social.update({
    where: {
      id
    },
    data: {
      name: json.name,
      image: json.image
    }
  });

  return NextResponse.json(updatedSocial, { status: 200 });
}

export async function DELETE(request: Request, context: any) {
  const id = parseInt(context?.params?.id) || 0;

  const deletedSocial = await prisma.social.delete({
    where: {
      id
    }
  });

  return NextResponse.json(deletedSocial, { status: 200 });
}
