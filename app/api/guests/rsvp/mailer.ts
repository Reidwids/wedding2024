import { render } from "@react-email/render";
import RsvpMail from "../../../emails/RsvpMail";
import sendgrid from "@sendgrid/mail";

export const sendRSVPConfirmedMail = async (email: string) => {
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
