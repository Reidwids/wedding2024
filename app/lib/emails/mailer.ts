import sendgrid from "@sendgrid/mail";
import { render } from "@react-email/render";
import RsvpMail from "@/app/lib/emails/RsvpMail";

export const sendTestMail = async (email: string) => {
	const emailHtml = render(RsvpMail("EMAIL GOES HERE"));

	const options = {
		from: "reidwids@gmail.com",
		to: email,
		subject: "Testing RSVP mailer",
		html: emailHtml,
	};

	await sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

	return await sendgrid.send(options);
};
