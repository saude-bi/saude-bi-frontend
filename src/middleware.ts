import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const isAdminRoute = (pathname: string) => {
  return pathname.startsWith('/admin');
};

const isPublicPage = (pathname: string) => {
  return pathname.startsWith('/auth');
};

interface DecodedJwt {
  username: string;
  isAdmin: boolean;
  iat: number;
  exp: number;
}

export async function middleware(req: NextRequest) {
  const cookie = req.cookies.get("token");
  const { pathname } = req.nextUrl;

  if (!isPublicPage(pathname)) {
    if (cookie === undefined) {
      req.nextUrl.pathname = "/login";
      return NextResponse.redirect(req.nextUrl);
    }

    const decodedJwt: DecodedJwt = jwt.decode(cookie.value) as DecodedJwt;

    if (isAdminRoute(pathname) && !decodedJwt.isAdmin) {
      //return NextResponse.next();
      //return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
      return NextResponse.json({ message: 'Acesso não Autorizado' }, { status: 401 })
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/:path*'],
};
