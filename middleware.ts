import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname, locale } = request.nextUrl

  const shouldHandleLocale =
    !PUBLIC_FILE.test(pathname) &&
    !pathname.includes('/api/') &&
    locale === 'default'

  if (shouldHandleLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/fr-FR${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
