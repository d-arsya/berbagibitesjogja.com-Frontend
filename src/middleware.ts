import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/auth/logout', '/admin', '/dashboard'];
const guestRoutes = ['/auth/login'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const pathname = request.nextUrl.pathname;

  // 🚫 Guest-only routes: if authenticated, redirect to dashboard
  if (guestRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // 🔐 Protected routes: if not authenticated, redirect to login (or backend login URL)
  if (protectedRoutes.includes(pathname) && !token) {
    const redirectUrl = encodeURIComponent(pathname);
    return NextResponse.redirect(
      `${process.env.BACKEND_URL}/auth/google?redirect=${redirectUrl}`
    );
  }

  return NextResponse.next();
}
