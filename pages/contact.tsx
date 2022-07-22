import { NextPage } from 'next'
import Head from 'next/head'
import ContactMeBlock from '../common/components/elements/ContactMeBlock/ContactMeBlock'
import TextHeader from '../common/components/elements/TextHeader/TextHeader'
import PageLayout from '../common/components/layouts/PageLayout/PageLayout'

const Contact: NextPage = () => {
  const headerTitle = <ContactMeBlock />

  return (
    <PageLayout>
      <Head>
        <title>Rudy Boutte</title>
        <meta
          name="description"
          content="Découvrez en un peu plus à mon propos."
        />
      </Head>
      <TextHeader title={headerTitle} />
    </PageLayout>
  )
}

export default Contact
