import Link from 'next/link';
import Button from '../Button/Button';
import TextBlock from '../TextBlock/TextBlock';
import styles from './Presentation.module.scss';

const Presentation = () => {
  const actions = (
    <>
      <Link href='/a-propos'>
        <a>
          <Button>A propos de moi</Button>
        </a>
      </Link>
      <Link href='/mes-projets'>
        <a>
          <Button>Découvrir mes projets</Button>
        </a>
      </Link>
    </>
  );

  const title = (
    <h1>
      Je m&apos;appelle Rudy Boutte.
      <br />
      <span className='bold'>Développeur Web polyvalent,</span>
      <br />
      qui aime <span className='bold'>React</span>
    </h1>
  );

  return (
    <TextBlock
      subtitle='Enchanté'
      title={title}
      description='Déménage à Nantes pour mes études'
      actions={actions}
    />
  );
};

export default Presentation;
