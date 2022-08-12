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
import { Colors } from '../common/constants/colors'
import { ProjectType } from '../common/types/ProjectType'
import HomepagePicture from '../public/images/me.jpg'
import styles from '../styles/pages/Home.module.scss'
import ProjectPreviewCountriesAPI from '../public/images/projects/REST-Countries-API.png'
import ProjectPreview30DaysOfReact from '../public/images/projects/30-Days-Of-React-Baby-Twitter.png'
import ProjectPreviewPerfimaas from '../public/images/projects/Perfimaas.png'
import ProjectPreviewPortfolio from '../public/images/projects/Portfolio.png'

const Home: NextPage = () => {
  const projects: ProjectType[] = [
    {
      title: 'Portfolio',
      description:
        "Site mettant en avant mes compétences et permettant d'accéder aux informations utiles me concernant, notamment dans le cadre de ma recherche d'alternance.",
      demo: 'https://rudyboutte.com/',
      github: 'https://github.com/boutterudy/rudyboutte.com',
      tags: [
        { title: 'TypeScript', color: Colors.TYPESCRIPT },
        { title: 'React', color: Colors.REACT },
        { title: 'Next.js', color: Colors.NEXTJS },
        { title: 'SCSS', color: Colors.SCSS },
        { title: 'Adobe XD', color: Colors.ADOBEXD },
      ],
      preview: (
        <Image src={ProjectPreviewPortfolio} alt="Screenshot of my portfolio" />
      ),
      date: new Date(),
      icon: <Icon lib="remix-icon" icon="globe-line" />,
    },
    {
      title: 'Explorateur de pays avec sélecteur de thème',
      description:
        "Application Web permettant d'accéder à la liste de tous les pays et de découvrir plus de détails sur chacun d'eux (population, capitale, langues, etc...).",
      demo: 'https://rest-countries-api-lac.vercel.app/',
      github: 'https://github.com/boutterudy/REST-Countries-API',
      tags: [
        { title: 'TypeScript', color: Colors.TYPESCRIPT },
        { title: 'React', color: Colors.REACT },
        { title: 'Next.js', color: Colors.NEXTJS },
        { title: 'SCSS', color: Colors.SCSS },
      ],
      preview: (
        <Image
          src={ProjectPreviewCountriesAPI}
          alt="REST Countries API with color theme switcher screenshot"
        />
      ),
      date: new Date(2022, 1),
      icon: <Icon lib="remix-icon" icon="globe-line" />,
    },
    {
      title: 'Bébé Twitter',
      description:
        'Reproduction simplifiée du célèbre réseau social Twitter, avec du contenu généré à partir de plusieurs APIs publiques, développé dans le cadre du défi "30 jours de React".',
      demo: 'https://30-days-of-react-two.vercel.app/solutions/day-28',
      github:
        'https://github.com/boutterudy/30-Days-Of-React/tree/exercice-solutions',
      tags: [
        { title: 'JavaScript', color: Colors.JAVASCRIPT },
        { title: 'React', color: Colors.REACT },
        { title: 'SCSS', color: Colors.SCSS },
      ],
      preview: (
        <Image
          src={ProjectPreview30DaysOfReact}
          alt="Baby Twitter screenshot"
        />
      ),
      date: new Date(2022, 1),
      icon: <Icon lib="remix-icon" icon="twitter-fill" />,
    },
    {
      title: 'API de Perfimaas',
      description:
        "API de Perfimaas, l'assistant de gestion des finances personnelles ayant pour but d'accompagner les citoyens du monde à gérer plus sainement leurs finances.",
      github: 'https://github.com/boutterudy/Perfimaas',
      tags: [
        { title: 'TypeScript', color: Colors.TYPESCRIPT },
        { title: 'NestJS', color: Colors.NESTJS },
      ],
      preview: (
        <Image
          src={ProjectPreviewPerfimaas}
          alt="Perfimaas registration page mock-up"
          layout="fill"
          objectFit="contain"
        />
      ),
      date: new Date(2020, 7),
      icon: <Icon lib="remix-icon" icon="money-dollar-circle-fill" />,
    },
  ]

  return (
    <PageLayout>
      <Head>
        <title>Rudy Boutte</title>
        <meta
          name="description"
          content="Je m'appelle Rudy Boutte. Développeur Web polyvalent qui aime TypeScript, React, Next.js, SCSS et NestJS."
        />
      </Head>
      <Header>
        <Link href="/a-propos">
          <a className="noAnimation" title="À propos">
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
