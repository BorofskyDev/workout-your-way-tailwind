// lib/server/firebaseAdmin.ts
import { getApps, initializeApp, applicationDefault } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

if (!getApps().length) {
  initializeApp({
    // Google picks up the JSON via GOOGLE_APPLICATION_CREDENTIALS
    credential: applicationDefault(),
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  })
}

export const adminAuth = getAuth()
