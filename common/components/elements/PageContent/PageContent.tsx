import { ReactNode } from 'react';
import styles from './PageContent.module.scss';

type PageContentProps = {
  children: ReactNode | ReactNode[];
};

const PageContent = ({ children }: PageContentProps) => {
  return <main className={styles.pageContent}>{children}</main>;
};

export default PageContent;
