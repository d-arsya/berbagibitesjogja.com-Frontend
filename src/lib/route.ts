// lib/routes.ts
export const protectedRoutes = ["/b", "/auth/logout"];
export const guestRoutes = ["/auth/login"];

export function isProtectedRoute(pathname: string): boolean {
  return protectedRoutes.some((route) => pathname.startsWith(route));
}
export function isGuestRoute(pathname: string): boolean {
  return guestRoutes.some((route) => pathname.startsWith(route));
}
