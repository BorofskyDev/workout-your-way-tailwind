import { AnchorHTMLAttributes, ReactNode } from 'react'
import { Icon } from '@/components/ui/icons'
import styles from './TextLink.module.scss'
import { icons } from '@/icons/icons'
import Link from 'next/link'

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

interface TextLinkProps extends AnchorProps {
  href: string
  external?: boolean
  children: ReactNode
  className?: string
}

const isClearlyExternal = (url: string) => /^(https?:\/\/|mailto:)/i.test(url)

export function TextLink({
  href,
  external,
  children,
  className = '',
  ...rest
}: TextLinkProps) {
  const isExternal = external ?? isClearlyExternal(href)

  if (isExternal) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={`${styles.textLink} ${className}`}
        aria-label={
          rest['aria-label'] ??
          (typeof children === 'string'
            ? `${children} (opens in new tab)`
            : undefined)
        }
        {...rest}
      >
        {children}
        <Icon path={icons.external} className={styles.textLink__icon} />
      </a>
    )
  }
  return (
    <Link href={href} className={`${styles.textLink} ${className}`} {...rest}>
      {children}
    </Link>
  )
}
