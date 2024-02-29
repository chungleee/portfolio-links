import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPages = ["/dashboard", "/dashboard/profile"];

export const middleware = (request: NextRequest) => {
	let authCookie = request.cookies.get("foliolinks_auth");
	const { pathname } = request.nextUrl;

	if (!authCookie) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	if (protectedPages.includes(pathname)) {
		return NextResponse.next();
	}
};

export const config = {
	matcher: ["/", "/dashboard", "/dashboard/profile"],
};
