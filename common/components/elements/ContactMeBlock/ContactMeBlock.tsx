import Link from 'next/link'
import { useState } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import Popover from '../Popover/Popover'
import TextBlock from '../TextBlock/TextBlock'

type ContactMeBlockProps = {
  noPadding?: boolean
}

const ContactMeBlock = ({ noPadding }: ContactMeBlockProps) => {
  /* States */
  const [displayEmailPopover, setDisplayEmailPopover] = useState<
    boolean | undefined
  >(undefined)

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
      <Link href="https://www.linkedin.com/in/rudyboutte/">
        <a target="_blank" className="noAnimation">
          <Button leftIcon={<Icon lib="remix-icon" icon="linkedin-box-fill" />}>
            Par LinkedIn
          </Button>
        </a>
      </Link>
      <Popover
        message="Adresse mail copiée dans le presse-papiers"
        display={displayEmailPopover}
        position="bottom"
        leftIcon={<Icon lib="remix-icon" icon="checkbox-circle-fill" />}
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

  return (
    <TextBlock
      subtitle="N'hésitez plus"
      title={title}
      actions={actions}
      noPadding={noPadding}
    />
  )
}

export default ContactMeBlock
