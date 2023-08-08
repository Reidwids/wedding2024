import prisma from "@/app/lib/prisma";
import { isValidBody } from "@/app/utils/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	const guests = await prisma.guest.findMany();
	return new NextResponse(JSON.stringify(guests), { status: 200 });
}

type CreateGuestReq = {
	name: string;
	email: string;
	groupId?: number;
};

export async function POST(req: NextRequest) {
	if (!isValidBody(req.body, ["name", "email"])) {
		return new NextResponse(JSON.stringify({ name: "Invalid body" }), { status: 400 });
	}

	const { name, email }: CreateGuestReq = await req.json();

	const data = {
		name,
		email,
	};

	if (req.body.groupId) {
		data["group"] = {
			connect: {
				email: req.body.groupId,
			},
		};
	}

	try {
		// CREATE
		await prisma.guest.create({
			data: data,
		});
		return new NextResponse(JSON.stringify({ message: "Guest created" }), { status: 200 });
	} catch (error) {
		console.log(error);
		return new NextResponse(JSON.stringify(error), { status: 400 });
	}
}
