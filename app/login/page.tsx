// app/login/page.tsx
'use client'

import { useState } from 'react'
import { LoginPageComponent } from '@/components/pages/login-page/LoginPage'
import { useLogin } from '@/lib/hooks/useLogin' // ← the hook we wrote earlier

export default function LoginPage() {
  const { login, loading, error } = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(email, password)
  }

  const disabled = loading || !email || !password

  return (
    <LoginPageComponent
      email={email}
      password={password}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onSubmit={handleSubmit}
      loading={loading}
      disabled={disabled}
      error={error}
    />
  )
}
