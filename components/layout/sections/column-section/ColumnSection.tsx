import styles from './ColumnSection.module.scss'

interface ColumnSectionProps {
    children: React.ReactNode
    id: string
    className?: string
}

export function ColumnSection({ children, id, className = '' }: ColumnSectionProps) {
    return (
        <section id={id} className={`${styles.columnSection} ${className}`}>
            {children}
        </section>
    )
}