import { NextPage } from 'next'
import Head from 'next/head'
import ContactMeBlock from '../../../components/elements/ContactMeBlock/ContactMeBlock'
import ProjectsList from '../../../components/elements/ProjectsList/ProjectsList'
import TextHeader from '../../../components/elements/TextHeader/TextHeader'
import PageLayout from '../../../components/layouts/PageLayout/PageLayout'
import SwappingWord from '../../../components/elements/SwappingWord/SwappingWord'
import { allProjects } from '../../../constants/projects'

const MyProjects: NextPage = () => {
  const headerTitle = (
    <h1>
      Découvrez quelques-uns de mes{' '}
      <span className="bold">récents projets</span> avec{' '}
      <span className="bold">
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
      </span>
    </h1>
  )

  return (
    <PageLayout>
      <Head>
        <title>Rudy Boutte – Mes projets</title>
        <meta
          name="description"
          content="J'adore me lancer dans de nouveaux défis. Découvrez quelques-uns de mes récents projets."
        />
      </Head>
      <TextHeader title={headerTitle} />
      <ProjectsList projects={allProjects} />
      <ContactMeBlock />
    </PageLayout>
  )
}

export default MyProjects
