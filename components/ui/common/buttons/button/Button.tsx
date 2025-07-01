import { Icon } from '@/components/ui/icons'
import styles from './Button.module.scss'

type Variant =
  | 'cta'
  | 'primary'
  | 'secondary'
  | 'submit'
  | 'delete'
  | 'disabled'

interface ButtonProps {
  children: React.ReactNode
  variant: Variant
  className?: string
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
  icon?: string
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  icon,
}: ButtonProps) {
  const buttonClass = `${styles.button} ${
    styles[`button--${variant}`]
  } ${className}`.trim()

  return (
    <button
      className={buttonClass}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
      {icon && <Icon path={icon} className={styles.icon} />}
    </button>
  )
}
