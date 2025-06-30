import { Heading, PText } from '@/components/ui'
import styles from './SplashHeader.module.scss'
import { ColumnSection } from '@/components/layout'

export function SplashHeader() {
  return (
    <ColumnSection id='header' className={styles.splashHeader}>
      <Heading element='h1' variant='page'>
        workout your way
      </Heading>
      <PText variant='body'>This is the workout splash page</PText>
    </ColumnSection>
  )
}
