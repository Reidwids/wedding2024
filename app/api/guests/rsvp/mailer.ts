import { render } from "@react-email/render";
import { createTransport } from "nodemailer";
import RsvpMail from "../../../emails/RsvpMail";
import { NextResponse } from "next/server";

const createTransporter = async () => {
	return createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: "reidwids@gmail.com",
			pass: process.env.GMAIL_APP_PASSWORD,
		},
	});
};

export const sendRSVPConfirmedMail = async (email: string) => {
	try {
		const emailHtml = render(RsvpMail("EMAIL GOES HERE"));

		const options = {
			from: "reidwids@gmail.com",
			to: "derekreidwilkinson@yahoo.ca",
			subject: "Testing RSVP mailer",
			html: emailHtml,
		};

		const transporter = await createTransporter();

		return await new Promise((resolve, reject) => {
			transporter.sendMail(options, (err, info) => {
				if (err) {
					console.error(err);
					reject(err);
				} else {
					resolve(info);
				}
			});
		});
	} catch (error) {
		console.log(error);
		return new NextResponse(JSON.stringify(error), { status: 400 });
	}
};
