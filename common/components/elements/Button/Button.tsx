import { cloneElement, ReactElement, ReactNode } from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
  children?: ReactNode | ReactNode[]
  className?: string
  theme?: 'small' | 'medium'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  leftIcon?: ReactElement
  rightIcon?: ReactElement
}

const Button = ({
  children,
  className,
  theme,
  onClick,
  leftIcon,
  rightIcon,
}: ButtonProps) => {
  return (
    <button
      className={
        styles.button +
        (theme === 'small' ? ' ' + styles.small : '') +
        (className !== undefined ? ' ' + className : '')
      }
      onClick={onClick}
    >
      {leftIcon !== undefined &&
        cloneElement(leftIcon, {
          className: styles.leftIcon,
        })}
      {children}
      {rightIcon !== undefined &&
        cloneElement(rightIcon, {
          className: styles.rightIcon,
        })}
    </button>
  )
}

export default Button
