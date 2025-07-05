import { InfoContainer, RevealSection } from '@/components/layout'
import { LinkBtn } from '@/components/ui'
import { icons } from '@/icons/icons'
import styles from './ProgramManagement.module.scss'

export function ProgramManagementDisclosure() {
  return (
    <RevealSection
      id='program-management'
      ariaLabel='Toggle program management details'
      heading='Program Management'
    >
      <div className={styles.info}>
        <InfoContainer label='Program Name:' value='No Current Program' />
        <InfoContainer label='Program Status:' value='Not Started' />
        <InfoContainer label='Start Date:' value='N/A' />
        <InfoContainer label='End Date:' value='N/A' />
      </div>

      <div className={styles.actions}>
        <LinkBtn href='/create-program' variant='primary' icon={icons.program}>
          Manage Program
        </LinkBtn>
        <LinkBtn
          href='/create-exercise'
          variant='secondary'
          icon={icons.weightLifting}
        >
          Manage Exercises
        </LinkBtn>
      </div>
    </RevealSection>
  )
}
