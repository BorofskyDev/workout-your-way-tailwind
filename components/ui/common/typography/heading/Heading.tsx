import clsx from 'clsx'

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingVariant = 'page' | 'section' | 'subsection' | 'container-large'

interface HeadingProps {
  element: HeadingElement
  variant: HeadingVariant
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<HeadingVariant, string> = {
  page: '',
  section: '',
  subsection: '',
  'container-large': '',
}

export const Heading: React.FC<HeadingProps> = ({
  element: Element,
  variant,
  className,
  children,
}) => {
  return (
    <Element className={clsx(variantClasses[variant], className)}>
      {children}
    </Element>
  )
}
