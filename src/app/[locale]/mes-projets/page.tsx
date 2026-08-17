import { NextPage } from 'next'
import ContactMeBlock from '../../../components/elements/ContactMeBlock/ContactMeBlock'
import ProjectsList from '../../../components/elements/ProjectsList/ProjectsList'
import TextHeader from '../../../components/elements/TextHeader/TextHeader'
import PageLayout from '../../../components/layouts/PageLayout/PageLayout'
import SwappingWord from '../../../components/elements/SwappingWord/SwappingWord'
import { useTranslations } from 'next-intl'
import { PagePropsWithLocale } from '../../../types/PagePropsWithLocale'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: PagePropsWithLocale) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'MyProjects.metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

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
      <TextHeader title={headerTitle} />
      <ProjectsList />
      <ContactMeBlock />
    </PageLayout>
  )
}

export default MyProjects
