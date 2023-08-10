import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";
import { render } from "@react-email/render";
import RsvpMail from "@/app/lib/emails/RsvpMail";

export async function GET() {
	const guests = await prisma.guest.findMany();
	await sendRSVPConfirmedMail("reidwids");
	return new NextResponse(JSON.stringify(guests), { status: 200 });
}

const sendRSVPConfirmedMail = async (email: string) => {
	const emailHtml = render(RsvpMail("EMAIL GOES HERE"));

	const options = {
		from: "reidwids@gmail.com",
		to: "derekreidwilkinson@yahoo.ca",
		subject: "Testing RSVP mailer",
		html: emailHtml,
	};

	await sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

	return await sendgrid.send(options);
};
