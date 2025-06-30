import styles from './FlexWrapContainer.module.scss'


interface FlexWrapContainerProps {
    children: React.ReactNode
    className?: string
}

export function FlexWrapContainer({ children, className = '' }: FlexWrapContainerProps) {
    return (
        <div className={`${styles.flexWrapContainer} ${className}`}>
            {children}
        </div>
    )
}