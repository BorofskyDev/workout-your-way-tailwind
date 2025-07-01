import { PageContainer } from '@/components/layout'
import { Heading, PText } from '@/components/ui'
import styles from './ProfilePage.module.scss'


export function ProfilePageComponent() {
    return ( 
        <PageContainer className={styles.profilePage}>
            <Heading element='h1' variant='page'>Your Profile</Heading>
            <PText>Your profile information will be displayed here. </PText>
        </PageContainer>
    )
}