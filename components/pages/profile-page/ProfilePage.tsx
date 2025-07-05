import { User } from '@prisma/client'
import {  PageContainer } from '@/components/layout'
import { Heading } from '@/components/ui'
import { DailyView, ProgramManagementDisclosure } from './profile-page-components'
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
      <DailyView />
     <ProgramManagementDisclosure />
    </PageContainer>
  )
}
