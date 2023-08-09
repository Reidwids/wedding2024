import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const guests = await prisma.guest.findMany();
	return new NextResponse(JSON.stringify(guests), { status: 200 });
}
