import Link from 'next/link'
import Button from '../Button/Button'
import TextBlock from '../TextBlock/TextBlock'

const ContactMeBlock = () => {
  const title = (
    <h1>
      Contactez-moi
      <br />
      Je serais très <span className="bold">heureux de</span>
      <br />
      <span className="bold">collaborer avec vous</span>
    </h1>
  )

  const actions = (
    <>
      <Button>
        <Link href="https://www.linkedin.com/messaging/thread/new/">
          <a target="_blank">Par LinkedIn</a>
        </Link>
      </Button>
      <Button>
        <Link href="mailto:btte.rudy@gmail.com">
          <a>Par mail</a>
        </Link>
      </Button>
    </>
  )

  return <TextBlock subtitle="N'hésitez plus" title={title} actions={actions} />
}

export default ContactMeBlock
