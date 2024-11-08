import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './LanguageSwitcher.module.scss';

type LanguageSwitcherProps = {
  className?: string;
};

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const router = useRouter();

  return (
    (<div
      className={
        styles.languageSwitcher + (className !== undefined ? className : '')
      }
    >
      <Link
        href={router.asPath}
        locale={'fr-FR'}
        className={
          router.locale === 'fr-FR' ? styles.active : styles.inactive
        }>
        
          FR
        
      </Link>/
            <Link
        href={router.asPath}
        locale={'en-GB'}
        className={
          router.locale === 'en-GB' ? styles.active : styles.inactive
        }>
        
          EN
        
      </Link>
    </div>)
  );
};

export default LanguageSwitcher;
