import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import axios from "axios";
export async function middleware(request: NextRequest, next: NextFetchEvent) {
  const cookieToken = request.cookies.get("refreshtoken");
  if (cookieToken) {
    try {
      await axios.get(`http://localhost:3001/user/refreshtoken`, {
        headers: {
          Authorization: `Bearer=${cookieToken.value}`,
        },
      });
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
