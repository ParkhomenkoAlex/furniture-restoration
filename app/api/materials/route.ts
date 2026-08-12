import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
    const materials = await prisma.material.findMany({
        orderBy: {
            id: "asc",
        },
    });

    return NextResponse.json(materials);
}
