import { NextPage } from 'next'
import Head from 'next/head'
import ContactMeBlock from '../../../components/elements/ContactMeBlock/ContactMeBlock'
import ProjectsList from '../../../components/elements/ProjectsList/ProjectsList'
import TextHeader from '../../../components/elements/TextHeader/TextHeader'
import PageLayout from '../../../components/layouts/PageLayout/PageLayout'
import SwappingWord from '../../../components/elements/SwappingWord/SwappingWord'
import { useTranslations } from 'next-intl'

const MyProjects: NextPage = () => {
  const t = useTranslations('MyProjects')

  const headerTitle = (
    <h1>
      {t.rich('headline', {
        important: (chunks) => <span className="bold">{chunks}</span>,
        SwappingWord: () => (
          <SwappingWord
            words={[
              'TypeScript.',
              'React.',
              'Next.js.',
              'SCSS.',
              'NestJS.',
              'JavaScript.',
              'CSS.',
            ]}
          />
        ),
      })}
    </h1>
  )

  return (
    <PageLayout>
      <Head>
        <title>Rudy Boutte – Mes projets</title>
        {/* TODO: Add Meta Description translation*/}
        <meta
          name="description"
          content="J'adore me lancer dans de nouveaux défis. Découvrez quelques-uns de mes récents projets."
        />
      </Head>
      <TextHeader title={headerTitle} />
      <ProjectsList />
      <ContactMeBlock />
    </PageLayout>
  )
}

export default MyProjects
