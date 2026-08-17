import { NextPage } from 'next'
import ContactMeBlock from '../../../components/elements/ContactMeBlock/ContactMeBlock'
import TextHeader from '../../../components/elements/TextHeader/TextHeader'
import PageLayout from '../../../components/layouts/PageLayout/PageLayout'
import { getTranslations } from 'next-intl/server'
import { PagePropsWithLocale } from '../../../types/PagePropsWithLocale'

export async function generateMetadata({ params }: PagePropsWithLocale) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Contact.metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

const Contact: NextPage = () => {
  const headerTitle = <ContactMeBlock noPadding={true} />

  return (
    <PageLayout>
      <TextHeader title={headerTitle} arrow={false} />
    </PageLayout>
  )
}

export default Contact
