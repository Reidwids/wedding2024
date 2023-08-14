import sendgrid from "@sendgrid/mail";
import { render } from "@react-email/render";
import RsvpMail from "@/emails/RsvpMail";
import RsvpNotification from "@/emails/RsvpNotification";
import { Guest } from "@prisma/client";

// export const sendTestMail = async (email: string) => {
// 	const emailHtml = render(RsvpMail("EMAIL GOES HERE"));

// 	const options = {
// 		from: "reidwids@gmail.com",
// 		to: email,
// 		subject: "Testing RSVP mailer",
// 		html: emailHtml,
// 	};

// 	await sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

// 	return await sendgrid.send(options);
// };

export const sendRsvpNotification = async (guests: Guest[]) => {
	console.log("Sending RSVP notification");
	const emailHtml = render(RsvpNotification({ guests: guests }));

	const options = {
		from: "reidwids@gmail.com",
		to: "reidwids@gmail.com",
		subject: `${guests.length} guests have RSVP'd`,
		html: emailHtml,
	};

	await sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

	return await sendgrid.send(options);
};
