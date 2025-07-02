// components/pages/login-page/LoginPage.tsx
'use client'
import { PageContainer } from '@/components/layout'
import { Button, Heading, Input, PText, TextLink } from '@/components/ui'
import { icons } from '@/icons/icons'
import styles from './LoginPage.module.scss'

interface LoginPageProps {
  email: string
  password: string
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  loading: boolean
  disabled: boolean
  error?: string | null
}

export function LoginPageComponent({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  loading,
  disabled,
  error,
}: LoginPageProps) {
  return (
    <PageContainer className={styles.loginPage}>
      <Heading element='h1' variant='page'>
        Login
      </Heading>

      {/* 🔸 put the handler on the form, not on the button */}
      <form className={styles.loginPage__form} onSubmit={onSubmit}>
        <Input
          type='email'
          id='email'
          name='email'
          label='Email'
          placeholder='Email'
          required
          value={email}
          onChange={onEmailChange}
        />
        <Input
          type='password'
          id='password'
          name='password'
          label='Password'
          placeholder='Password'
          required
          value={password}
          onChange={onPasswordChange}
        />

        <Button
          variant='primary'
          icon={icons.login}
          type='submit'
          disabled={disabled}
        >
          {loading ? 'Logging in…' : 'Login'}
        </Button>
      </form>

      <PText>
        Don&apos;t have an account?{' '}
        <TextLink href='/register'>Register</TextLink>
      </PText>
      <PText>
        Forgot your password?{' '}
        <TextLink href='/reset-password'>Reset it here.</TextLink>
      </PText>

      {error && <PText variant='error'>{error}</PText>}
    </PageContainer>
  )
}
