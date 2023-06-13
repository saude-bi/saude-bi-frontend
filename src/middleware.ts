import { NextRequest, NextResponse } from 'next/server';

const isUserRoute = (pathname: string) => {
  return pathname.startsWith('/occupation');
};

export async function middleware(req: NextRequest) {
  const role = req.headers.get('authorization');
  const { pathname } = req.nextUrl;
  console.log('teste middleware');
  console.log(req.headers);

  if (isUserRoute(pathname)) {
    return NextResponse.next();
    //return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/occupation/:path*', '/medical-worker/:path*'],
};
