import { LinkBtn } from '@/components/ui'
import { icons } from '@/icons/icons'
import { FlexWrapContainer } from '@/components/layout'

export function SplashCta() { 
    return (
      <FlexWrapContainer>
        <LinkBtn variant='primary' href='/login' icon={icons.login}>
          Login
        </LinkBtn>
        <LinkBtn variant='cta' href='/register' icon={icons.cling}>
          Register
        </LinkBtn>
        <LinkBtn variant='secondary' href='#learn-more' icon={icons.learn}>
          Learn more about the app
        </LinkBtn>
      </FlexWrapContainer>
    )
}