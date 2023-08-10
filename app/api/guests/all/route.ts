import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { sendRSVPConfirmedMail } from "../../emails/mailer";

export async function GET() {
	const guests = await prisma.guest.findMany();
	await sendRSVPConfirmedMail("reidwids");
	return new NextResponse(JSON.stringify(guests), { status: 200 });
}
