import { PageContainer } from '@/components/layout'
import styles from './SplashPageComponent.module.scss'
import { SplashCta, SplashHeader } from './splash-components'

export function SplashPageComponent() {
  return (
    <PageContainer className={styles.splashPageComponent}>
      <SplashHeader />
      <SplashCta />
    </PageContainer>
  )
}
