import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './LanguageSwitcher.module.scss';

type LanguageSwitcherProps = {
  className?: string;
};

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const router = useRouter();
  console.log(router.locale);
  return (
    <div
      className={
        styles.languageSwitcher + (className !== undefined ? className : '')
      }
    >
      <Link href={router.asPath} locale={'fr-FR'}>
        <a
          className={
            router.locale === 'fr-FR' ? styles.active : styles.inactive
          }
        >
          FR
        </a>
      </Link>
      /
      <Link href={router.asPath} locale={'en-GB'}>
        <a
          className={
            router.locale === 'en-GB' ? styles.active : styles.inactive
          }
        >
          EN
        </a>
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
