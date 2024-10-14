import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value;
  const currentOrg = request.cookies.get("currentOrg")?.value;

  const publicRoutes = ["/", "/sign-in", "/sign-up"];

  const pathname = request.nextUrl.pathname;

  if (!currentUser && !publicRoutes.includes(pathname)) {
    const url = new URL("/sign-in", request.url);
    return NextResponse.redirect(url);
  }

  if (currentUser && !currentOrg && pathname !== "/create-org") {
    const url = new URL("/create-org", request.url);
    return NextResponse.redirect(url);
  }

  if (currentUser && currentOrg && pathname !== `/organization/${currentOrg}`) {
    const url = new URL(`/organization/${currentOrg}`, request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
