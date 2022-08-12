import { ReactNode } from 'react'
import Icon from '../Icon/Icon'
import styles from './Header.module.scss'

type HeaderProps = {
  children: ReactNode | ReactNode[]
  arrow?: boolean
}

const Header = ({ children, arrow }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>{children}</div>
      <div className={styles.bottomActions}>
        {/*<p>
          <Icon lib='remix-icon' icon='sun-fill' /> Dark Mode
        </p>*/}
        {arrow !== false ? (
          <Icon
            lib="remix-icon"
            icon="arrow-down-line"
            className={styles.arrow}
          />
        ) : (
          <div></div>
        )}
        <p className={styles.copyright}>©2022</p>
      </div>
    </header>
  )
}

export default Header
