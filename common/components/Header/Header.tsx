import Image from 'next/image';
import { ReactNode } from 'react';
import Icon from '../Icon/Icon';
import styles from './Header.module.scss';

type HeaderProps = {
  children: ReactNode | ReactNode[];
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>{children}</div>
      <div className={styles.bottomActions}>
        <p>
          <Icon lib='remix-icon' icon='sun-fill' /> Dark Mode
        </p>
        <p>©2022</p>
      </div>
    </header>
  );
};

export default Header;
