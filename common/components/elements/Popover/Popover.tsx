import { ReactElement } from 'react'
import styles from './Popover.module.scss'

type PopoverProps = {
  children: ReactElement
  display: boolean
  message: string
  position: 'top' | 'bottom' | 'left' | 'right'
}

const Popover = ({ children, display, message, position }: PopoverProps) => {
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
          ' animate__animated animate__faster'
        }
      >
        {message}
      </div>
    </div>
  )
}

export default Popover
