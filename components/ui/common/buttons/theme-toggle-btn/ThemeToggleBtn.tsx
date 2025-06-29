// components/ui/common/buttons/ThemeToggle.tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { icons } from '@/icons/icons'
import { Icon } from '@/components/ui'
import styles from './ThemeToggleBtn.module.scss'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null 


  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label='Toggle theme'
      className={styles.themeToggleBtn}
    >
      {theme === 'dark' ? <Icon path={icons.sun} className='h-5 w-5' /> : <Icon path={icons.moon} className='h-5 w-5' />}
    </button>
  )
}
