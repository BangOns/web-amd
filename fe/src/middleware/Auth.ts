import { instance } from "@/utils/axios/instance";
import { NextFetchEvent, NextMiddleware, NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function WithAuth(middleware: NextMiddleware) {
  return async (request: NextRequest, next: NextFetchEvent) => {
    const url = new URL("/login", request.url);
    return NextResponse.redirect(url);
    middleware(request, next);
  };
}
