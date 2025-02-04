import { NextRequest, NextResponse } from "next/server";
import Cookies from "universal-cookie";

const protectedRoutes = ["/dashboard", "/users"];
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cookies = new Cookies(req.headers.get("cookie"));
  if (protectedRoutes.includes(pathname)) {
    const token = cookies.get("auth_token");
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  return NextResponse.next();
}
