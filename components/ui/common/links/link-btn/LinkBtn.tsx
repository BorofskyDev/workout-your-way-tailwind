import Link from 'next/link'
import { Icon } from '@/components/ui/icons'
import clsx from 'clsx'
import styles from './LinkBtn.module.scss'

interface LinkBtnProps {
  href: string
  children: React.ReactNode
  variant: 'primary' | 'secondary' | 'cta'
  className?: string
  icon?: string
  strokeColor?: string
}

export function LinkBtn({
  href,
  children,
  variant = 'primary',
  className = '',
  icon,
  strokeColor,
}: LinkBtnProps) {
  return (
    <Link
      href={href}
      className={clsx(styles.linkBtn, styles[`linkBtn--${variant}`], className)}
    >
      <span className={styles.text}>{children}</span>
      {icon && (
        <Icon
          className={`${styles.icon}`}
          path={icon}
          strokeColor={strokeColor}
        />
      )}
    </Link>
  )
}
