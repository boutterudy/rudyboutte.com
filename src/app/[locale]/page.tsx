import type { NextPage } from 'next'
import Image from 'next/image'
import ContactMeBlock from '../../components/elements/ContactMeBlock/ContactMeBlock'
import Header from '../../components/elements/Header/Header'
import Presentation from '../../components/elements/Presentation/Presentation'
import ProjectsList from '../../components/elements/ProjectsList/ProjectsList'
import PageLayout from '../../components/layouts/PageLayout/PageLayout'
import HomepagePicture from '../../../public/images/me.webp'
import styles from '../../styles/pages/Home.module.scss'
import { Link } from '../../i18n/routing'
import { PagePropsWithLocale } from '../../types/PagePropsWithLocale'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: PagePropsWithLocale) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Home.metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Header>
        <Link href="/mon-parcours" className="noAnimation" title="Mon parcours">
          <Image
            className={styles.pictureOfMe}
            src={HomepagePicture}
            width={412}
            height={550}
            alt="Rudy Boutte in front of yellow flowers"
            quality={100}
            priority
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
