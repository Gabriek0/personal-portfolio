import { NextRequest } from 'next/server';

const defaultLocale = 'en';
const locales = ['en', 'es', 'pt-BR'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return Response.redirect(request.nextUrl);
}
