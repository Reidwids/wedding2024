import { NextResponse } from "next/server";
// test git
export async function GET(request: Request) {
	return new NextResponse(JSON.stringify({ message: "Wedding API Functional", status: 200 }), { status: 200 });
}
