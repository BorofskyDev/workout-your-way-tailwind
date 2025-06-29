import styles from './PageContainer.module.scss'

interface PageConatinerProps { 
    children: React.ReactNode
    className?: string
}

export function PageContainer({ children, className = '' }: PageConatinerProps) {
    return ( 
        <main className={`${styles.pageContainer} ${className}`}>
            {children}
        </main>
    )
}