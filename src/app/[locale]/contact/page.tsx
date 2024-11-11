import { NextPage } from 'next'
import Head from 'next/head'
import ContactMeBlock from '../../../components/elements/ContactMeBlock/ContactMeBlock'
import TextHeader from '../../../components/elements/TextHeader/TextHeader'
import PageLayout from '../../../components/layouts/PageLayout/PageLayout'

const Contact: NextPage = () => {
  const headerTitle = <ContactMeBlock noPadding={true} />

  return (
    <PageLayout>
      <Head>
        <title>Rudy Boutte – Contact</title>
        <meta
          name="description"
          content="Contactez-moi, je serais très heureux de collaborer avec vous."
        />
      </Head>
      <TextHeader title={headerTitle} arrow={false} />
    </PageLayout>
  )
}

export default Contact
