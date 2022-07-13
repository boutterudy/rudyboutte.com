import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ContactMeBlock from '../common/components/elements/ContactMeBlock/ContactMeBlock';
import Footer from '../common/components/elements/Footer/Footer';
import Icon from '../common/components/elements/Icon/Icon';
import Navbar from '../common/components/elements/Navbar/Navbar';
import PageContent from '../common/components/elements/PageContent/PageContent';
import ProjectsList from '../common/components/elements/ProjectsList/ProjectsList';
import TextHeader from '../common/components/elements/TextHeader/TextHeader';
import PageLayout from '../common/components/layouts/PageLayout/PageLayout';
import { ProjectType } from '../common/types/ProjectType';
import ProjectPreviewCountriesAPI from '../public/images/projects/REST-Countries-API.png';

const MesProjets: NextPage = () => {
  const headerTitle = (
    <h1>
      Découvrez quelques-uns de mes{' '}
      <span className='bold'>récents projets</span> avec{' '}
      <span className='bold'>ReactJS</span>.
    </h1>
  );

  const projects: ProjectType[] = [
    {
      title: 'REST Countries API with color theme switcher',
      description:
        'Real, organic and arabica. A brand that communicates coffee value.',
      demo: 'https://rest-countries-api-lac.vercel.app/',
      github: 'https://github.com/boutterudy/REST-Countries-API',
      tags: ['React', 'Next.js'],
      preview: (
        <Image
          src={ProjectPreviewCountriesAPI}
          alt='REST Countries API with color theme switcher screenshot'
        />
      ),
      date: new Date(),
      icon: <Icon lib='remix-icon' icon='globe-line' />,
    },
    {
      title: 'REST Countries API with color theme switcher',
      description:
        'Real, organic and arabica. A brand that communicates coffee value.',
      demo: 'https://rest-countries-api-lac.vercel.app/',
      github: 'https://github.com/boutterudy/REST-Countries-API',
      tags: ['React', 'Next.js'],
      preview: (
        <Image
          src={ProjectPreviewCountriesAPI}
          alt='REST Countries API with color theme switcher screenshot'
        />
      ),
      date: new Date(),
      icon: <Icon lib='remix-icon' icon='globe-line' />,
    },
    {
      title: 'REST Countries API with color theme switcher',
      description:
        'Real, organic and arabica. A brand that communicates coffee value.',
      demo: 'https://rest-countries-api-lac.vercel.app/',
      github: 'https://github.com/boutterudy/REST-Countries-API',
      tags: ['React', 'Next.js'],
      preview: (
        <Image
          src={ProjectPreviewCountriesAPI}
          alt='REST Countries API with color theme switcher screenshot'
        />
      ),
      date: new Date(),
      icon: <Icon lib='remix-icon' icon='globe-line' />,
    },
    {
      title: 'REST Countries API with color theme switcher',
      description:
        'Real, organic and arabica. A brand that communicates coffee value.',
      demo: 'https://rest-countries-api-lac.vercel.app/',
      github: 'https://github.com/boutterudy/REST-Countries-API',
      tags: ['React', 'Next.js'],
      preview: (
        <Image
          src={ProjectPreviewCountriesAPI}
          alt='REST Countries API with color theme switcher screenshot'
        />
      ),
      date: new Date(),
      icon: <Icon lib='remix-icon' icon='globe-line' />,
    },
  ];

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
      <ProjectsList projects={projects} />
      <ContactMeBlock />
    </PageLayout>
  );
};

export default MesProjets;
