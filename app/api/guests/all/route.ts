import { sendTestMail } from "@/app/lib/emails/mailer";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const guests = await prisma.guest.findMany();
	await sendTestMail("derekreidwilkinson@yahoo.ca");
	return new NextResponse(JSON.stringify(guests), { status: 200 });
}
