// lib/server/getCurrentUser.ts


import { headers, cookies } from 'next/headers'
import { prisma } from '@/lib'
import { adminAuth } from '@/lib/server/firebaseAdmin'

export async function getCurrentUser() {
  const headerList = await headers()
  let uid = headerList.get('x-user-uid')

  if (!uid) {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('session')?.value
    if (!sessionCookie) return null

    try {
      const decoded = await adminAuth.verifySessionCookie(sessionCookie, true)
      uid = decoded.uid
    } catch {
      return null
    }
  }

  return prisma.user.findUnique({
    where: { id: uid! },
    include: { profile: true },
  })
}
