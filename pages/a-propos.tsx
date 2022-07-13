import { NextPage } from 'next';
import Head from 'next/head';
import ContactMeBlock from '../common/components/elements/ContactMeBlock/ContactMeBlock';
import Footer from '../common/components/elements/Footer/Footer';
import PageLayout from '../common/components/layouts/PageLayout/PageLayout';
import Navbar from '../common/components/elements/Navbar/Navbar';
import NoiseCanvas from '../common/components/elements/NoiseCanvas/NoiseCanvas';
import PageContent from '../common/components/elements/PageContent/PageContent';
import TextHeader from '../common/components/elements/TextHeader/TextHeader';

const AboutMe: NextPage = () => {
  const headerTitle = (
    <h1>
      Découvrez en un peu plus <br />à{' '}
      <span className='bold'>propos de moi</span>.
    </h1>
  );

  return (
    <PageLayout>
      <Head>
        <title>Rudy Boutte</title>
        <meta
          name='description'
          content='Découvrez en un peu plus à mon propos.'
        />
      </Head>
      <TextHeader title={headerTitle} />
      <ContactMeBlock />
    </PageLayout>
  );
};

export default AboutMe;
