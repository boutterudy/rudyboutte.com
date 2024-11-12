import { ReactNode } from 'react'
import styles from './Badge.module.scss'
import Color from 'color'

type BadgeProps = {
  children?: ReactNode | ReactNode[]
  className?: string
  color?: string
}

const Badge = ({ children, className, color }: BadgeProps) => {
  const desaturatedColor = Color(color).desaturate(0.3)
  return (
    <div
      className={
        styles.badge + (className !== undefined ? ' ' + className : '')
      }
      style={
        color !== undefined
          ? {
              backgroundColor: desaturatedColor.string(),
              borderColor: desaturatedColor.string(),
              color:
                desaturatedColor.contrast(Color('black')) > 11
                  ? 'var(--color-text)'
                  : 'var(--color-text-light)',
            }
          : {}
      }
    >
      {children}
    </div>
  )
}

export default Badge
