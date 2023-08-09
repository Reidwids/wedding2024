import prisma from "@/app/lib/prisma";
import { isValidBody } from "@/app/utils/utils";
import { NextRequest, NextResponse } from "next/server";

export type CreateGroupReq = {
	guests: { name: string; email: string }[];
};

// Create a group of guests
export async function POST(req: NextRequest) {
	if (!isValidBody(req.body, ["guests"])) {
		return new NextResponse(JSON.stringify({ name: "Invalid body" }), { status: 400 });
	}

	const { guests }: CreateGroupReq = await req.json();

	if (!guests.length) {
		return new NextResponse(JSON.stringify({ message: "No emails provided" }), { status: 400 });
	}
	const guestsExist = await prisma.guest.findMany({
		where: {
			email: {
				in: guests.map((guest) => guest.email),
			},
		},
	});

	if (guestsExist.length) {
		return new NextResponse(JSON.stringify({ message: "Guests already exist" }), { status: 400 });
	}

	try {
		const newGroup = await prisma.group.create({ data: {} });
		await prisma.guest.createMany({
			data: guests.map((guest) => ({
				...guest,
				groupId: newGroup.id,
			})),
		});

		return new NextResponse(JSON.stringify({ message: "Guests created" }), { status: 200 });
	} catch (error) {
		console.log(error);
		return new NextResponse(JSON.stringify(error), { status: 400 });
	}
}
