import Link from 'next/link'
import { useState } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import Popover from '../Popover/Popover'
import TextBlock from '../TextBlock/TextBlock'

const ContactMeBlock = () => {
  /* States */
  const [displayEmailPopover, setDisplayEmailPopover] = useState<boolean>(false)

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
        <Link href="https://www.linkedin.com/in/rudyboutte/">
          <a target="_blank">Par LinkedIn</a>
        </Link>
      </Button>
      <Popover
        message="Adresse mail copiée dans le presse-papiers"
        display={displayEmailPopover}
        position="bottom"
      >
        <Button
          onClick={() => {
            navigator.clipboard.writeText('btte.rudy@gmail.com')
            setDisplayEmailPopover(true)
            const timeout = setTimeout(() => {
              setDisplayEmailPopover(false)
            }, 5000)

            return () => clearTimeout(timeout)
          }}
          rightIcon={<Icon lib="remix-icon" icon="file-copy-line" />}
        >
          Par mail
        </Button>
      </Popover>
    </>
  )

  return <TextBlock subtitle="N'hésitez plus" title={title} actions={actions} />
}

export default ContactMeBlock
