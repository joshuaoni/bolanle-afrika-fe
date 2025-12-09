import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const allowedPaths = new Set<string>([
  "/",
  "/about",
  "/products",
  "/blog",
  "/contact",
]);

export function proxy(request: NextRequest) {
  const rawPath = request.nextUrl.pathname;
  const pathname = rawPath === "/" ? "/" : rawPath.replace(/\/+$/, "");

  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (/\.[^/]+$/.test(pathname)) {
    return NextResponse.next();
  }

  if (pathname === "/signup" || pathname === "/dashboard") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (!allowedPaths.has(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
