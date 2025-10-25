import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const authCookie = req.cookies.get("auth")?.value

  const isLoginPage = req.nextUrl.pathname === "/"

  if (!authCookie && !isLoginPage) {
    // If not logged in, redirect to login
    return NextResponse.redirect(new URL("/", req.url))
  }

  if (authCookie && isLoginPage) {
    // If already logged in, redirect to dashboard
    return NextResponse.redirect(new URL("/dashboard/overview", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/"],
}
