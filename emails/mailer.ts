import sendgrid from "@sendgrid/mail";
import { render } from "@react-email/render";
import RsvpMail from "@/emails/RsvpMail";
import RsvpNotification from "@/emails/RsvpNotification";
import { Guest } from "@prisma/client";

export const sendRSVPConfirmation = async (email: string, guests: Guest[]) => {
	const emailHtml = render(RsvpMail({ guests: guests }));

	const options = {
		from: "reidwids@gmail.com",
		to: email,
		subject: "N&D 2024 - RSVP Confirmation",
		html: emailHtml,
	};

	await sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

	return await sendgrid.send(options);
};

export const sendRsvpNotifications = async (email: string, guests: Guest[]) => {
	console.log("Sending RSVP notification");
	// Send Success email to Organizer
	const emailHtml = render(RsvpNotification({ guests: guests }));

	const options = {
		from: "reidwids@gmail.com",
		to: "reidwids@gmail.com",
		subject: `${guests.length} guests have RSVP'd`,
		html: emailHtml,
	};

	await sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);
	await sendgrid.send(options);

	// Send Success email to requesting user
	await sendRSVPConfirmation(email, guests);

	return;
};
