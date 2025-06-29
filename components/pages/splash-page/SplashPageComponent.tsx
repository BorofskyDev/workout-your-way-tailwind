import { Heading, PText } from '@/components/ui'
import styles from './SplashPageComponent.module.scss'
import Link from 'next/link'
import { PageContainer } from '@/components/layout'

export function SplashPageComponent() {
    return ( 
        <PageContainer className={styles.splashPage}>
            <section id='header' className={styles.splashPage__header}>
                <Heading element='h1' variant='page'>workout your way</Heading>
                <PText variant='body'>This is the workout splash page</PText>
            </section>
            <div className={styles.splashPage__btnGroup}>
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
                <Link href='#learn-more'>Learn more</Link>
            </div>
        </PageContainer>
    )
}