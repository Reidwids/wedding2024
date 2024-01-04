import { NextRequest } from "next/server";

type PasswordReq = {
	password: string;
};

export async function POST(req: NextRequest) {
	const { password }: PasswordReq = await req.json();
	if (password !== process.env.ADMIN_PASSWORD) {
		return new Response(JSON.stringify({ validated: 0 }), { status: 400 });
	}

	return new Response(JSON.stringify({ validated: 1 }), { status: 200 });
}
