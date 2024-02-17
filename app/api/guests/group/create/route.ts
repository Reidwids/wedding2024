import prisma from "@/app/lib/prisma";
import { isValidBody } from "@/app/utils/utils";
import { Guest } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export type CreateGroupReq = {
	groups: { name: string; email: string }[][];
};

// Create a group of guests
export async function POST(req: NextRequest) {
	if (!isValidBody(req.body, ["guests"])) {
		return new NextResponse(JSON.stringify({ name: "Invalid body" }), { status: 400 });
	}

	const { groups }: CreateGroupReq = await req.json();

	if (!groups.length) {
		return new NextResponse(JSON.stringify({ message: "No groups provided" }), { status: 400 });
	}
	for (const group of groups) {
		const guestsExist = await prisma.guest.findMany({
			where: {
				email: {
					in: group.map((guest) => guest.email.toLowerCase()),
				},
				name: {
					in: group.map((guest) => guest.name),
				},
			},
		});

		if (guestsExist.length) {
			return new NextResponse(JSON.stringify({ message: `Guests already exists - ${guestsExist.map((g) => g.name)}` }), {
				status: 400,
			});
		}

		try {
			const newGroup = await prisma.group.create({ data: {} });
			await prisma.guest.createMany({
				data: group.map((guest) => ({
					...guest,
					groupId: newGroup.id,
				})),
			});

			console.log(
				"Created group with guests: ",
				group.map((guest) => guest.email + " ")
			);
		} catch (error) {
			console.log(error);
			return new NextResponse(JSON.stringify(error), { status: 400 });
		}
	}
	return new NextResponse(JSON.stringify({ message: "Guests created" }), { status: 200 });
}
