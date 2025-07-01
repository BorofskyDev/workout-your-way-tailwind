import { PageContainer } from '@/components/layout'
import { Button, Heading, Input, PText, TextLink } from '@/components/ui'
import { icons } from '@/icons/icons'
import styles from './LoginPage.module.scss'

export function LoginPageComponent() {
  return (
    <PageContainer className={styles.loginPage}>
      <Heading element='h1' variant='page'>
        Login
      </Heading>
      <form className={styles.loginPage__form}>
        <Input
          type='email'
          id='email'
          name='email'
          label='Email'
          placeholder='Enter your email'
          required
        />
        <Input
          type='password'
          id='password'
          name='password'
          label='Password'
          placeholder='Enter your password'
          required
        />
        <Button variant='primary' icon={icons.login} type='submit'>
          Login
        </Button>
      </form>
      <PText>
        Don&apos;t have an account?{' '}
        <TextLink href='/register'>Register for an account here.</TextLink>{' '}
      </PText>
      <PText>
        Forgot your password?{' '}
        <TextLink href='/reset-password'>Reset it here.</TextLink>
      </PText>
    </PageContainer>
  )
}
