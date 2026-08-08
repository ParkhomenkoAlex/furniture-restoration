import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
    const tools = await prisma.tool.findMany({
        orderBy: {
            id: "asc",
        },
    });

    return NextResponse.json(tools);
}