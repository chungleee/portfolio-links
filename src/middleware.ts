import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
	let authCookie = request.cookies.get("foliolinks_auth");

	if (!authCookie) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
};

export const config = {
	matcher: "/dashboard",
};
