import { cloneElement, ReactElement, ReactNode } from 'react'
import styles from './TextBlock.module.scss'

type TextBlockProps = {
  subtitle?: string
  title?: ReactElement
  description?: string
  actions?: ReactNode | ReactNode[]
  className?: string
  noPadding?: boolean
}

const TextBlock = ({
  subtitle,
  title,
  description,
  actions,
  className,
  noPadding,
}: TextBlockProps) => {
  return (
    <section
      className={
        styles.textBlock + (className !== undefined ? ' ' + className : '')
      }
      style={noPadding === true ? { padding: 0 } : {}}
    >
      {subtitle !== undefined && <p className={styles.subtitle}>{subtitle}</p>}
      {title !== undefined &&
        cloneElement(title, {
          className: styles.title,
        })}
      {description !== undefined && (
        <p className={styles.description}>{description}</p>
      )}
      {actions !== undefined && <div className={styles.actions}>{actions}</div>}
    </section>
  )
}

export default TextBlock
