// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_ROUTES = [
  '/',
  '/login',
  '/register',
  '/reset-password',
  '/favicon.ico',
  '/api/auth/set-session', // ← add this line
]

export function middleware(req: NextRequest) {
  if (PUBLIC_ROUTES.includes(req.nextUrl.pathname)) {
    return NextResponse.next()
  }

  if (!req.cookies.has('session')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = { matcher: ['/((?!_next|assets).*)'] }
