import prisma from "@/app/lib/prisma";
import { isValidBody } from "@/app/utils/utils";
import { NextRequest, NextResponse } from "next/server";

export type GuestsRSVPReq = {
	emails: string[];
};

// Get all guests connected to an email within a group
export async function PUT(req: NextRequest) {
	if (!isValidBody(req.body, ["emails"])) {
		return new NextResponse(JSON.stringify({ name: "Invalid body" }), { status: 400 });
	}

	const { emails }: GuestsRSVPReq = await req.json();

	try {
		const guests = await prisma.guest.findMany({
			where: {
				email: {
					in: emails,
				},
			},
		});

		// Make sure all emails exist
		if (guests.length !== emails.length) {
			return new NextResponse(JSON.stringify({ message: "Provided email does not exist" }), { status: 400 });
		}

		// Make sure all guest groups are the same
		const groupIds = guests.map((guest) => guest.groupId);
		if (new Set(groupIds).size !== 1) {
			return new NextResponse(JSON.stringify({ message: "Guests are not in the same group" }), { status: 400 });
		}

		await prisma.guest.updateMany({
			where: {
				email: {
					in: emails,
				},
			},
			data: {
				rsvp: true,
				rspvDate: new Date(),
			},
		});
		return new NextResponse(JSON.stringify({ message: "Guests RSVP'd" }), { status: 200 });
	} catch (error) {
		console.log(error);
		return new NextResponse(JSON.stringify(error), { status: 400 });
	}
}
