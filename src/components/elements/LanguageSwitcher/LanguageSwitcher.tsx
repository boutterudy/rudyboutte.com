import styles from './LanguageSwitcher.module.scss'
import { usePathname, Link } from '../../../i18n/routing'
import { useLocale } from 'next-intl'

type LanguageSwitcherProps = {
  className?: string
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const pathname = usePathname()
  const locale = useLocale()

  return (
    <div
      className={
        styles.languageSwitcher + (className !== undefined ? className : '')
      }
    >
      <Link
        href={pathname}
        locale={'fr'}
        className={locale === 'fr' ? styles.active : styles.inactive}
      >
        FR
      </Link>
      /
      <Link
        href={pathname}
        locale={'en'}
        className={locale === 'en' ? styles.active : styles.inactive}
      >
        EN
      </Link>
    </div>
  )
}

export default LanguageSwitcher
