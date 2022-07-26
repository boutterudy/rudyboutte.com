import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ContactMeBlock from '../common/components/elements/ContactMeBlock/ContactMeBlock'
import Header from '../common/components/elements/Header/Header'
import Icon from '../common/components/elements/Icon/Icon'
import Presentation from '../common/components/elements/Presentation/Presentation'
import ProjectsList from '../common/components/elements/ProjectsList/ProjectsList'
import PageLayout from '../common/components/layouts/PageLayout/PageLayout'
import { ProjectType } from '../common/types/ProjectType'
import HomepagePicture from '../public/images/me.jpg'
import ProjectPreviewCountriesAPI from '../public/images/projects/REST-Countries-API.png'
import styles from '../styles/pages/Home.module.scss'

const Home: NextPage = () => {
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
          alt="REST Countries API with color theme switcher screenshot"
        />
      ),
      date: new Date(),
      icon: <Icon lib="remix-icon" icon="globe-line" />,
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
          alt="REST Countries API with color theme switcher screenshot"
        />
      ),
      date: new Date(),
      icon: <Icon lib="remix-icon" icon="globe-line" />,
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
          alt="REST Countries API with color theme switcher screenshot"
        />
      ),
      date: new Date(),
      icon: <Icon lib="remix-icon" icon="globe-line" />,
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
          alt="REST Countries API with color theme switcher screenshot"
        />
      ),
      date: new Date(),
      icon: <Icon lib="remix-icon" icon="globe-line" />,
    },
  ]

  return (
    <PageLayout>
      <Head>
        <title>Rudy Boutte</title>
        <meta
          name="description"
          content="Découvrez en un peu plus à mon propos."
        />
      </Head>
      <Header>
        <Link href="/a-propos">
          <a>
            <Image
              className={styles.pictureOfMe}
              src={HomepagePicture}
              width={412}
              height={550}
              alt="Rudy Boutte in front of yellow flowers"
            />
          </a>
        </Link>
      </Header>
      <Presentation />
      <ProjectsList projects={projects} />
      <ContactMeBlock />
    </PageLayout>
  )
}

export default Home
