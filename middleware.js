import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  return NextResponse.redirect(new URL("/helia", req.url));
  // console.log("middleware happened");
}

export const config = {
  matcher: [
    "/artist/xycebtoncifvd1s/:path*",
    // "/artists/:path*",
    // "/band/:path*",
    // "/contact/:path*",
    // "/services/:path*",
    // "/projects/:path*",
    // "/",
  ],
};
