import { getSessionCookie } from "better-auth/cookies";
import { type NextRequest, NextResponse } from "next/server";

const DEFAULT_DASHBOARD_ROUTE = "/dashboard";
const DEFAULT_SIGNIN_ROUTE = "/auth/signin";

const ROUTES = {
  PUBLIC: /^\/($|pricing|features|blog)(?:\/|$)/,
  AUTH: /^\/auth(?:\/|$)/,
  DASHBOARD: /^\/dashboard(?:\/|$)/,
};

export default async function proxy(request: NextRequest) {
  const session = getSessionCookie(request);

  const authenticated = !!session;
  const pathname = request.nextUrl.pathname;
  const url = request.url;

  const isPublic = (pathname: string) => ROUTES.PUBLIC.test(pathname);
  const isAuth = (pathname: string) => ROUTES.AUTH.test(pathname);
  const isDashboard = (pathname: string) => ROUTES.DASHBOARD.test(pathname);

  // Unauthenticated user trying to access dashboard
  if (isDashboard(pathname) && !authenticated) {
    return NextResponse.redirect(new URL(DEFAULT_SIGNIN_ROUTE, url));
  }

  // Authenticated user trying to access auth pages
  if (isAuth(pathname) && authenticated) {
    return NextResponse.redirect(new URL(DEFAULT_DASHBOARD_ROUTE, url));
  }

  // Authenticated user trying to access public pages
  if (isPublic(pathname) && authenticated) {
    return NextResponse.redirect(new URL(DEFAULT_DASHBOARD_ROUTE, url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
