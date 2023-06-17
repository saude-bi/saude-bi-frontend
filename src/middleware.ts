import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const isAdminRoute = (pathname: string) => {
  return pathname.startsWith('/admin');
};

export const isPublicPage = (pathname: string) => {
  return pathname.startsWith('/auth');
};

interface DecodedJwt {
  username: string;
  isAdmin: boolean;
  iat: number;
  exp: number;
}

export async function middleware(req: NextRequest) {
  const cookie = req.cookies.get('token');
  const { pathname } = req.nextUrl;

  if (!isPublicPage(pathname)) {
    if (cookie === undefined) {
      req.nextUrl.pathname = '/auth/login';
      return NextResponse.redirect(req.nextUrl);
    }

    const decodedJwt: DecodedJwt = jwt.decode(cookie.value) as DecodedJwt;

    if (isAdminRoute(pathname) && !decodedJwt.isAdmin) {
      return NextResponse.redirect(new URL('/auth/unauthorized', req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
