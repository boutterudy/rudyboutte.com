import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
  const links = [
    {
      href: 'https://www.linkedin.com/in/rudyboutte/',
      title: 'LinkedIn',
      target: '_blank',
    },
    {
      href: 'https://github.com/boutterudy',
      title: 'GitHub',
      target: '_blank',
    },
    {
      href: 'https://stackoverflow.com/users/8733181/r-boutte',
      title: 'StackOverflow',
      target: '_blank',
    },
    {
      href: 'https://www.codewars.com/users/rudyb',
      title: 'Codewars',
      target: '_blank',
    },
    {
      href: 'mailto:btte.rudy@gmail.com',
      title: 'Email',
    },
  ]

  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {links.map((link, index) => (
          <li className={styles.link} key={index}>
            <Link href={link.href}>
              <a target={link.target !== undefined ? link.target : ''}>
                {link.title}
              </a>
            </Link>
          </li>
        ))}
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
