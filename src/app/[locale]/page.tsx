import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/legacy/image'
import ContactMeBlock from '../../components/elements/ContactMeBlock/ContactMeBlock'
import Header from '../../components/elements/Header/Header'
import Presentation from '../../components/elements/Presentation/Presentation'
import ProjectsList from '../../components/elements/ProjectsList/ProjectsList'
import PageLayout from '../../components/layouts/PageLayout/PageLayout'
import HomepagePicture from '../../../public/images/me.jpg'
import styles from '../../styles/pages/Home.module.scss'
import { Link } from '../../i18n/routing'

const Home: NextPage = () => {
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
      <ProjectsList
        displayedProjects={['portfolio', 'countries', 'twitter', 'perfimaas']}
      />
      <ContactMeBlock />
    </PageLayout>
  )
}

export default Home
