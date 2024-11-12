import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../../elements/Footer/Footer';
import Navbar from '../../elements/Navbar/Navbar';
import NoiseCanvas from '../../elements/NoiseCanvas/NoiseCanvas';
import PageContent from '../../elements/PageContent/PageContent';

type PageLayoutProps = {
  children: ReactNode | ReactNode[];
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <PageContent>{children}</PageContent>

      <Footer />
      <NoiseCanvas />
    </div>
  );
};

export default PageLayout;
