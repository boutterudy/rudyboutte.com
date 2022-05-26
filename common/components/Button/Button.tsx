import { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
  theme?: 'small' | 'medium';
};

const Button = ({ children, className, theme }: ButtonProps) => {
  return (
    <button
      className={
        styles.button +
        (theme === 'small' ? ' ' + styles.small : '') +
        (className !== undefined ? ' ' + className : '')
      }
    >
      {children}
    </button>
  );
};

export default Button;
