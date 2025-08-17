import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isGuestRoute, isProtectedRoute } from "./lib/route";

export function middleware(request: NextRequest) {
  return NextResponse.next();
  const token = request.cookies.get("token");
  const pathname = request.nextUrl.pathname;

  // 🚫 Guest-only routes: if authenticated, redirect to dashboard
  if (isGuestRoute(pathname) && token) {
    return NextResponse.redirect(new URL("/b/dashboard", request.url));
  }

  // 🔐 Protected routes: if not authenticated, redirect to login (or backend login URL)
  if (isProtectedRoute(pathname) && !token) {
    const redirectUrl = encodeURIComponent(pathname);
    return NextResponse.redirect(
      `${process.env.BACKEND_URL}/auth/google?redirect=${redirectUrl}`
    );
  }
}
