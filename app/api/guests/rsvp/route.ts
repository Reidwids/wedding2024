import { sendRsvpNotifications } from "@/emails/mailer";
import prisma from "@/app/lib/prisma";
import { isValidBody } from "@/app/utils/utils";
import { Guest } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// Get all guests connected to an email within a group
export type GuestsRSVPReq = {
	guests: Guest[];
	email: string;
};

export async function PUT(req: NextRequest) {
	if (!isValidBody(req.body, ["guests"])) {
		return new NextResponse(JSON.stringify({ name: "Invalid body" }), { status: 400 });
	}

	const { guests, email }: GuestsRSVPReq = await req.json();

	try {
		const reqGuests = await prisma.guest.findMany({
			where: {
				email: {
					in: guests.map((guest) => guest.email),
				},
			},
		});

		// Make sure all emails exist
		if (reqGuests.length !== guests.length) {
			return new NextResponse(JSON.stringify({ message: "Provided guest does not exist" }), { status: 400 });
		}

		// Make sure all guest groups are the same
		const groupIds = reqGuests.map((guest) => guest.groupId);
		if (new Set(groupIds).size !== 1) {
			return new NextResponse(JSON.stringify({ message: "Guests are not in the same group" }), { status: 400 });
		}

		for (const guest of guests) {
			await prisma.guest.update({
				where: {
					email: guest.email,
				},
				data: {
					rsvp: guest.rsvp,
					rspvDate: new Date(),
				},
			});
		}
		await sendRsvpNotifications(email, guests);

		return new NextResponse(JSON.stringify({ message: "Guests RSVP'd" }), { status: 200 });
	} catch (error) {
		console.log(error);
		return new NextResponse(JSON.stringify(error), { status: 400 });
	}
}
