import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

// TODO: Fix in Next 14
export function middleware(request: NextRequest) {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/') &&
    request.nextUrl.locale === 'default';

  console.log({shouldHandleLocale})

  if (shouldHandleLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/fr-FR${request.nextUrl.pathname}`;
    return NextResponse.redirect(url);
  }

  return undefined;
}
