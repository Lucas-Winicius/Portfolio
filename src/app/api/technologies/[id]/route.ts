import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request, context: any) {
  const id = parseInt(context?.params?.id) || 0;

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

  return NextResponse.json(technology, { status: 201 });
}
