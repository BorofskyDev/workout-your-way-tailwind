import styles from './Input.module.scss'

interface InputProps {
  type: string
  id: string
  name: string
  label: string
  required?: boolean
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  type,
  id,
  name,
  label,
  required,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div className={styles.input}>
      <label className={styles.input__label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input__field}
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={required ? `${placeholder} (required)` : placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
