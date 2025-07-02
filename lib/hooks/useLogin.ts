// lib/hooks/useLogin.ts
'use client'
import { useState, useCallback } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/server/firebase'
import { useRouter } from 'next/navigation'

export function useLogin() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = useCallback(
    async (email: string, password: string) => {
      setLoading(true)
      setError(null)

      try {
        const cred = await signInWithEmailAndPassword(auth, email, password)
        const idToken = await cred.user.getIdToken()

        const res = await fetch('/api/auth/set-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idToken }),
          credentials: 'include',
        })
        if (!res.ok) throw new Error('Could not start session')

        window.location.assign('/profile')
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Login failed')
      } finally {
        setLoading(false)
      }
    },
    [router]
  )

  return { login, loading, error }
}
