import { PText } from '@/components/ui'
import styles from './InfoContainer.module.scss'

interface InfoContainerProps {
  label: string
  value: string | React.ReactNode
  className?: string
}

export function InfoContainer({
  label,
  value,
  className = '',
}: InfoContainerProps) {
  return (
    <div className={`${styles.infoContainer} ${className}`}>
      <PText variant='label'>{label}</PText> <PText>{value}</PText>
    </div>
  )
}
