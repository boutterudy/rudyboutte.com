'use client'
import { useEffect, useState } from 'react'
import Icon from '../Icon/Icon'
import styles from './Navbar.module.scss'
import { Link } from '../../../i18n/routing'
import { useTranslations } from 'next-intl'

const Navbar = () => {
  const t = useTranslations('Navbar')

  /* States */
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false)

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
      className={
        styles.navbar +
        (isNavExpanded === true ? ' ' + styles.expanded : '') +
        (isScrolled === true ? ' ' + styles.scrolled : '')
      }
    >
      {/*
        TODO: Add Language Switcher in the NavBar
        <LanguageSwitcher className={styles.languageSwitcher} />
      */}
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Link href="/">{t('infos.headline')}</Link>
          <span className={styles.info}>
            {t.rich('infos.details', {
              a: (chunks) => (
                <Link href="https://gensdeconfiance.com/" target="_blank">
                  {chunks}
                </Link>
              ),
            })}
          </span>
        </div>
        <Icon
          className={styles.burger}
          lib="remix-icon"
          icon={isNavExpanded ? 'close-line' : 'menu-line'}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        />
      </div>
      <ul className={styles.links}>
        <li>
          <Link href="/mes-projets" className="underline">
            <Icon
              lib="remix-icon"
              icon="code-s-slash-fill"
              className={styles.icon}
            />
            {t('links.my_projects')}
          </Link>
        </li>
        <li>
          <Link href="/mon-parcours" className="underline">
            <Icon lib="remix-icon" icon="route-fill" className={styles.icon} />
            {t('links.my_journey')}
          </Link>
        </li>
        <li>
          <Link href="/contact" className="underline">
            <Icon
              lib="remix-icon"
              icon="discuss-line"
              className={styles.icon}
            />
            {t('links.contact')}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
