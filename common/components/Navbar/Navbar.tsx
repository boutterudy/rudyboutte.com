import Link from 'next/link';
import { useRouter } from 'next/router';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <LanguageSwitcher className={styles.languageSwitcher} />
      <div className={styles.logo}>
        <Link href='/'>
          <a>RUDY BOUTTE</a>
        </Link>
        <span className={styles.info}>
          disponible dès{' '}
          <span className={styles.important}>Juillet 2022 en alternance</span>
        </span>
      </div>
      <ul className={styles.links}>
        <li>
          <Link href='/mes-projets'>
            <a>Mes projets</a>
          </Link>
        </li>
        <li>
          <Link href='/mon-parcours'>
            <a>Mon parcours</a>
          </Link>
        </li>
        <li>
          <Link href='/a-propos'>
            <a>A propos</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
