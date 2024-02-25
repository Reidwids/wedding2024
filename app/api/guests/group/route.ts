import prisma from "@/app/lib/prisma";
import { isValidBody } from "@/app/utils/utils";
import { Guest } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export type GetGuestsReq = {
	email: string;
};
export type GetGuestsRes = {
	id: string;
	guests: Guest[];
};

// Get all guests connected to an email within a group
export async function POST(req: NextRequest) {
	if (!isValidBody(req.body, ["email"])) {
		return new NextResponse(JSON.stringify({ name: "Invalid body" }), { status: 400 });
	}
	const { email }: GetGuestsReq = await req.json();
	try {
		const group = await prisma.group.findFirst({
			where: {
				guests: {
					some: {
						email: email.toLowerCase(),
					},
				},
			},
			include: {
				guests: true,
			},
		});

		if (group) {
			return new NextResponse(JSON.stringify(group), { status: 200 });
		} else {
			const guest = await prisma.guest.findFirst({
				where: {
					email: email.toLowerCase(),
				},
			});
			if (guest) {
				return new NextResponse(JSON.stringify({ guests: [guest] }), { status: 200 });
			} else {
				return new NextResponse(JSON.stringify({ message: "Guest not found" }), { status: 404 });
			}
		}
	} catch (error) {
		console.log(error);
		return new NextResponse(JSON.stringify(error), { status: 400 });
	}
}
