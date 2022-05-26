import { ReactElement, ReactNode } from 'react';
import Header from '../Header/Header';
import TextBlock from '../TextBlock/TextBlock';
import styles from './TextHeader.module.scss';

type TextHeaderProps = {
  subtitle?: string;
  title?: ReactElement;
  description?: string;
  actions?: ReactNode | ReactNode[];
};

const TextHeader = ({
  subtitle,
  title,
  description,
  actions,
}: TextHeaderProps) => {
  return (
    <Header>
      <TextBlock
        className={styles.textHeader}
        subtitle={subtitle}
        title={title}
        description={description}
        actions={actions}
      />
    </Header>
  );
};

export default TextHeader;
