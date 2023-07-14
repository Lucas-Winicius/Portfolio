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
