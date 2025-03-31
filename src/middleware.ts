/* eslint-disable @typescript-eslint/no-unused-vars */
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith('/signin') || req.nextUrl.pathname.startsWith('/signup');

    // If user is authenticated and tries to access auth pages, redirect to dashboard
    if (isAuth && isAuthPage) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // If user is not authenticated and tries to access protected pages, redirect to signin
    if (!isAuth && !isAuthPage) {
      return NextResponse.redirect(new URL('/signin', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => true, // Allow all requests to be processed by the middleware
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*', '/signin', '/signup']
}; 