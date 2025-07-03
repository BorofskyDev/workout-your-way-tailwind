import { InfoContainer, OneToTwoColSection } from '@/components/layout'
import { Heading, LinkBtn } from '@/components/ui'
import { icons } from '@/icons/icons'
import styles from './DailyView.module.scss'

export function DailyView() {
  return (
    <OneToTwoColSection id='daily-view' className={styles.dailyView}>
      <div className={styles.dailyView__column}>
        <Heading element='h2' variant='card'>
          Daily View
        </Heading>
        <InfoContainer label='Date:' value={new Date().toLocaleDateString()} />
        <InfoContainer label='Workout:' value='(Workout here)' />
      </div>
      <div className={styles.dailyView__column}>
        <LinkBtn href='/workouts/today' variant='small' icon={icons.weight}>
          Today&apos;s Workout
        </LinkBtn>
        <LinkBtn
          href='/profile/my-public-page'
          variant='small'
          icon={icons.rockstar}
        >
          My Public Page
        </LinkBtn>
        <LinkBtn href='/profile/check-in' variant='small' icon={icons.muscle}>
          Check In
        </LinkBtn>
      </div>
    </OneToTwoColSection>
  )
}
