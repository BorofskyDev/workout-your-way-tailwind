import styles from './OneToTwoColSection.module.scss'

interface OneToTwoColSectionProps {
  id: string
  children: React.ReactNode
  className?: string
}

export function OneToTwoColSection({
  id,
  children,
  className = '',
}: OneToTwoColSectionProps) {
  return (
    <section id={id} className={`${styles.oneToTwoColSection} ${className}`}>
      {children}
    </section>
  )
}
