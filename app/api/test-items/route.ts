import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
    const items = await prisma.testItem.findMany({
        orderBy: {
            id: "asc",
        },
    });

    return NextResponse.json(items);
}