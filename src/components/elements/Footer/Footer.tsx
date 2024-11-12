'use client'
import { useState } from 'react'
import Icon from '../Icon/Icon'
import Popover from '../Popover/Popover'
import styles from './Footer.module.scss'
import { Link } from '../../../i18n/routing'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('Footer')

  /* States */
  const [displayEmailPopover, setDisplayEmailPopover] = useState<
    boolean | undefined
  >(undefined)

  const links = [
    {
      href: 'https://www.linkedin.com/in/rudyboutte/',
      title: 'LinkedIn',
      target: '_blank',
      icon: (
        <Icon
          lib="remix-icon"
          icon="linkedin-box-fill"
          className={styles.icon}
        />
      ),
    },
    {
      href: 'https://github.com/boutterudy',
      title: 'GitHub',
      target: '_blank',
      icon: (
        <Icon lib="remix-icon" icon="github-fill" className={styles.icon} />
      ),
    },
    {
      href: 'https://stackoverflow.com/users/8733181/r-boutte',
      title: 'StackOverflow',
      target: '_blank',
      icon: (
        <Icon
          lib="remix-icon"
          icon="stack-overflow-line"
          className={styles.icon}
        />
      ),
    },
    {
      href: 'https://www.codewars.com/users/rudyb',
      title: 'Codewars',
      target: '_blank',
      icon: (
        <Icon lib="remix-icon" icon="code-box-line" className={styles.icon} />
      ),
    },
  ]

  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {links.map((link, index) => (
          <li className={styles.link} key={index}>
            <Link
              href={link.href}
              target={link.target !== undefined ? link.target : ''}
              className="underline"
            >
              {link.icon}
              {link.title}
            </Link>
          </li>
        ))}
        <li
          className={styles.link}
          onClick={() => {
            navigator.clipboard.writeText('btte.rudy@gmail.com')
            setDisplayEmailPopover(true)
            const timeout = setTimeout(() => {
              setDisplayEmailPopover(false)
            }, 5000)

            return () => clearTimeout(timeout)
          }}
        >
          <Popover
            message="Adresse mail copiée dans le presse-papiers"
            display={displayEmailPopover}
            className={styles.popover}
            position="top"
            leftIcon={<Icon lib="remix-icon" icon="checkbox-circle-fill" />}
          >
            <a className="underline">
              <Icon lib="remix-icon" icon="mail-line" className={styles.icon} />
              Mail
            </a>
          </Popover>
        </li>
      </ul>
      <p className={styles.copyright}>
        {t.rich('copyright', {
          from: '2021',
          to: new Date().getFullYear(),
          link: (chunks) => (
            <Link
              href="https://github.com/boutterudy"
              target="_blank"
              className="underline"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
    </footer>
  )
}

export default Footer
