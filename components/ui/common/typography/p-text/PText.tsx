import { ReactNode } from 'react'
import styles from './PText.module.scss'

export type TextVariant =
  | 'body'
  | 'body-sm'
  | 'body-lg'
  | 'lead'
  | 'caption'
  | 'label'
  | 'note'
  | 'accent'

interface PTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant
  children: ReactNode
  className?: string
}

export const PText: React.FC<PTextProps> = ({
  variant = 'body',
  children,
  className = '',
  ...rest
}) => {
  return (
    <p
      className={`${styles.text} ${styles[`text--${variant}`]} ${className}`}
      {...rest}
    >
      {children}
    </p>
  )
}
