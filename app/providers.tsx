'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute='data-theme'
      defaultTheme='system'
      enableSystem={true}
      value={{ light: 'light', dark: 'dark' }}
    >
      {children}
    </NextThemesProvider>
  )
}
