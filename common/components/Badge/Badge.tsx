import { ReactNode } from 'react';
import styles from './Badge.module.scss';

type BadgeProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
};

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <div
      className={
        styles.badge + (className !== undefined ? ' ' + className : '')
      }
    >
      {children}
    </div>
  );
};

export default Badge;
