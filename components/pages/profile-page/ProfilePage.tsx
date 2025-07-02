import { User } from '@prisma/client'
import { PageContainer } from '@/components/layout'
import { Heading, PText } from '@/components/ui'
import styles from './ProfilePage.module.scss'

type ProfilePageProps = {
  user: User
}

export async function ProfilePageComponent({ user }: ProfilePageProps) {
  return (
    <PageContainer className={styles.profilePage}>
      <Heading element='h1' variant='page'>
        Welcome, {user.name}
      </Heading>
      <PText>Your profile information will be displayed here. </PText>
    </PageContainer>
  )
}
