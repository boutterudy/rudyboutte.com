import Link from 'next/link'
import { useEffect, useState } from 'react'
import Icon from '../Icon/Icon'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import styles from './Navbar.module.scss'

const Navbar = () => {
  /* States */
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  // Make the navbar's background appear
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false)
  }

  useEffect(() => {
    listenScrollEvent()
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])

  return (
    <nav
      className={styles.navbar}
      style={
        isScrolled === false
          ? {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              backdropFilter: 'none',
            }
          : {}
      }
    >
      <LanguageSwitcher className={styles.languageSwitcher} />
      <div className={styles.logo}>
        <Link href="/">
          <a>RUDY BOUTTE</a>
        </Link>
        <span className={styles.info}>
          <Link href="/alternance">
            <a>
              disponible dès{' '}
              <span className={styles.important}>
                Juillet 2022 en alternance
              </span>
            </a>
          </Link>
        </span>
      </div>
      <ul className={styles.links}>
        <li>
          <Link href="/mes-projets">
            <a>
              <Icon
                lib="remix-icon"
                icon="code-s-slash-fill"
                className={styles.icon}
              />
              Mes projets
            </a>
          </Link>
        </li>
        <li>
          <Link href="/mon-parcours">
            <a>
              <Icon
                lib="remix-icon"
                icon="route-fill"
                className={styles.icon}
              />
              Mon parcours
            </a>
          </Link>
        </li>
        <li>
          <Link href="/a-propos">
            <a>
              <Icon
                lib="remix-icon"
                icon="user-shared-2-line"
                className={styles.icon}
              />
              A propos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>
              <Icon
                lib="remix-icon"
                icon="discuss-line"
                className={styles.icon}
              />
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
