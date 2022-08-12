import { cloneElement, ReactElement } from 'react'
import styles from './Popover.module.scss'

type PopoverProps = {
  children: ReactElement
  display: boolean | undefined
  message: string
  position: 'top' | 'bottom' | 'left' | 'right'
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  className?: string
}

const Popover = ({
  children,
  display,
  message,
  position,
  leftIcon,
  rightIcon,
  className,
}: PopoverProps) => {
  const positionClassname = {
    top: styles.top,
    bottom: styles.bottom,
    left: styles.left,
    right: styles.right,
  }

  return (
    <div className={styles.popoverWrapper}>
      {children}
      <div
        className={
          styles.popover +
          ' ' +
          positionClassname[position] +
          ' ' +
          (display === true ? 'animate__fadeIn' : 'animate__fadeOut') +
          ' animate__animated animate__faster' +
          (className !== undefined ? ' ' + className : '')
        }
        style={display === undefined ? { display: 'none' } : {}}
      >
        {leftIcon !== undefined &&
          cloneElement(leftIcon, {
            className: styles.leftIcon + ' ' + leftIcon.props.className,
          })}
        {message}
        {rightIcon !== undefined &&
          cloneElement(rightIcon, {
            className: styles.rightIcon + ' ' + rightIcon.props.className,
          })}
      </div>
    </div>
  )
}

export default Popover
