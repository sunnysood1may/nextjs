import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware abc");
  if (request.nextUrl.pathname != "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/about/:path*", "/studentlist/:path*"],
};
