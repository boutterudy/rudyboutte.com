import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/legacy/image'
import Link from 'next/link'
import ContactMeBlock from '../common/components/elements/ContactMeBlock/ContactMeBlock'
import Header from '../common/components/elements/Header/Header'
import Presentation from '../common/components/elements/Presentation/Presentation'
import ProjectsList from '../common/components/elements/ProjectsList/ProjectsList'
import PageLayout from '../common/components/layouts/PageLayout/PageLayout'
import { ProjectType } from '../common/types/ProjectType'
import HomepagePicture from '../public/images/me.jpg'
import styles from '../styles/pages/Home.module.scss'
import {
  portfolioProject,
  countriesProject,
  twitterProject,
  perfimaasProject,
} from '../common/constants/projects'

const Home: NextPage = () => {
  const projects: ProjectType[] = [
    portfolioProject,
    countriesProject,
    twitterProject,
    perfimaasProject,
  ]

  return (
    <PageLayout>
      <Head>
        <title>Rudy Boutte – Portfolio</title>
        <meta
          name="description"
          content="Je m'appelle Rudy Boutte. Développeur Web polyvalent qui aime TypeScript, React, Next.js, SCSS et NestJS."
        />
      </Head>
      <Header>
        <Link href="/a-propos" className="noAnimation" title="À propos">
          <Image
            className={styles.pictureOfMe}
            src={HomepagePicture}
            width={412}
            height={550}
            alt="Rudy Boutte in front of yellow flowers"
          />
        </Link>
      </Header>
      <Presentation />
      <ProjectsList projects={projects} />
      <ContactMeBlock />
    </PageLayout>
  )
}

export default Home
