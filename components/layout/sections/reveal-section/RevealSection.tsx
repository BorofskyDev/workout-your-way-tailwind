'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heading, Icon } from '@/components/ui'
import { icons } from '@/icons/icons'
import styles from './RevealSection.module.scss'

interface RevealSectionProps {
  id: string
  className?: string
  ariaLabel: string
  heading: string
  children: React.ReactNode
}

export function RevealSection({
  id,
  className,
  ariaLabel,
  heading,
  children,
}: RevealSectionProps) {
  return (
    <Disclosure
      id={id}
      as='section'
      className={`${styles.revealSection} ${className}`}
    >
      {({ open }) => (
        <>
          <DisclosureButton className={styles.toggle} aria-label={ariaLabel}>
            <Heading element='h2' variant='card' className={styles.heading}>
              {heading}
            </Heading>

            <Icon
              path={icons.arrowRight}
              className={`${styles.icon} ${open ? styles.iconOpen : ''}`}
            />
          </DisclosureButton>

          <AnimatePresence initial={false}>
            {open && (
              <DisclosurePanel static>
                <motion.div
                  key='panel'
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`${styles.reveal}`}
                >
                  {children}
                </motion.div>
              </DisclosurePanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  )
}
