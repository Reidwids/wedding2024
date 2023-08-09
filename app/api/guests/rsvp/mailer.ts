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

		await new Promise((resolve, reject) => {
			// verify connection configuration
			transporter.verify(function (error, success) {
				if (error) {
					console.log(error);
					reject(error);
				} else {
					console.log("Server is ready to take our messages");
					resolve(success);
				}
			});
		});

		return await transporter.sendMail(options);
	} catch (error) {
		console.log(error);
		return new NextResponse(JSON.stringify(error), { status: 400 });
	}
};
