import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ContactMeBlock from '../common/components/ContactMeBlock/ContactMeBlock';
import Footer from '../common/components/Footer/Footer';
import Header from '../common/components/Header/Header';
import Icon from '../common/components/Icon/Icon';
import Navbar from '../common/components/Navbar/Navbar';
import PageContent from '../common/components/PageContent/PageContent';
import TextHeader from '../common/components/TextHeader/TextHeader';
import WorkExperiences from '../common/components/WorkExperiences/WorkExperiences';
import styles from '../styles/pages/MyJourney.module.scss';

const MyJourney: NextPage = () => {
  const headerTitle = (
    <h1>
      Découvrez en un peu plus sur mon parcours :{' '}
      <span className='bold'>mes formations</span>, et{' '}
      <span className='bold'>mes expériences professionnelles</span>.
    </h1>
  );

  return (
    <div>
      <Head>
        <title>Rudy Boutte</title>
        <meta
          name='description'
          content='Découvrez quelques-uns de mes récents projets avec ReactJS.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <PageContent>
        <TextHeader title={headerTitle} />
        <div className={styles.container}>
          <WorkExperiences />
          <div></div>
        </div>
        <ContactMeBlock />
      </PageContent>

      <Footer />
    </div>
  );
};

export default MyJourney;
