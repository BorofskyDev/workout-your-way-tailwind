// app/api/auth/set-session/route.ts
export const runtime = 'nodejs'

import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { adminAuth } from '@/lib/server/firebaseAdmin'

export async function POST(req: NextRequest) {
  try {
    const { idToken } = await req.json()

    const expiresIn = 7 * 24 * 60 * 60 * 1000 // 7 days
    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn,
    })

    const cookieStore = await cookies() 
    cookieStore.set({
      name: 'session', 
      value: sessionCookie,
      httpOnly: true,
      secure: false, // dev on http
      sameSite: 'strict', // dev value
      path: '/',
      maxAge: expiresIn / 1000,
    })

    console.log('✅  Session cookie set') // DEBUG

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('❌  set-session error', e) // DEBUG
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}
