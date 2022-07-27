import Link from 'next/link'
import { Fragment, useState } from 'react'
import Icon from '../Icon/Icon'
import Popover from '../Popover/Popover'
import styles from './Footer.module.scss'

const Footer = () => {
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
            <Link href={link.href}>
              <a target={link.target !== undefined ? link.target : ''}>
                {link.icon}
                {link.title}
              </a>
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
            position="top"
            leftIcon={<Icon lib="remix-icon" icon="checkbox-circle-fill" />}
          >
            <Fragment>
              <Icon lib="remix-icon" icon="mail-line" className={styles.icon} />
              Mail
            </Fragment>
          </Popover>
        </li>
      </ul>
      <p className={styles.copyright}>
        © 2021-{new Date().getFullYear()} Tous droits réservés, made with &#60;3{' '}
        <Link href="https://github.com/boutterudy">
          <a target="_blank">by Rudy</a>
        </Link>
      </p>
    </footer>
  )
}

export default Footer
