import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPages = ["/dashboard", "/dashboard/profile"];

export const middleware = (request: NextRequest) => {
	let authCookie = request.cookies.get("foliolinks_auth");
	const { pathname } = request.nextUrl;

	console.log("netlify pathname: ", pathname);

	if (!authCookie) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	if (pathname === "/") {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	if (protectedPages.includes(pathname)) {
		return NextResponse.next();
	}
};

export const config = {
	matcher: ["/", "/dashboard", "/dashboard/profile"],
};
