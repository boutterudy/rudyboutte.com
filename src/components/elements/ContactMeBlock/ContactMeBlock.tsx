'use client'
import { useState } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import Popover from '../Popover/Popover'
import TextBlock from '../TextBlock/TextBlock'
import { Link } from '../../../i18n/routing'
import { useTranslations } from 'next-intl'

type ContactMeBlockProps = {
  noPadding?: boolean
}

const ContactMeBlock = ({ noPadding }: ContactMeBlockProps) => {
  const t = useTranslations('ContactMeBlock')

  /* States */
  const [displayEmailPopover, setDisplayEmailPopover] = useState<
    boolean | undefined
  >(undefined)

  const title = (
    <h1>
      {t.rich('headline', {
        important: (chunks) => <span className="bold">{chunks}</span>,
      })}
    </h1>
  )

  const actions = (
    <>
      <Link
        href="https://www.linkedin.com/in/rudyboutte/"
        target="_blank"
        className="noAnimation"
      >
        <Button leftIcon={<Icon lib="remix-icon" icon="linkedin-box-fill" />}>
          {t('cta.linkedin')}
        </Button>
      </Link>
      <Popover
        message={t('mail_copy.success')}
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
          {t('cta.mail')}
        </Button>
      </Popover>
    </>
  )

  return (
    <TextBlock
      subtitle={t('caption')}
      title={title}
      actions={actions}
      noPadding={noPadding}
    />
  )
}

export default ContactMeBlock
