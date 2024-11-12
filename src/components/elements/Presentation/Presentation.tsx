import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import SwappingWord from '../SwappingWord/SwappingWord'
import TextBlock from '../TextBlock/TextBlock'
import { Link } from '../../../i18n/routing'
import { useTranslations } from 'next-intl'

const Presentation = () => {
  const t = useTranslations('Presentation')
  const actions = (
    <>
      <Link href="/a-propos" className="noAnimation">
        <Button leftIcon={<Icon lib="remix-icon" icon="user-shared-2-line" />}>
          {t('cta.about_me')}
        </Button>
      </Link>
      <Link href="/mes-projets" className="noAnimation">
        <Button leftIcon={<Icon lib="remix-icon" icon="code-s-slash-fill" />}>
          {t('cta.discover_my_projects')}
        </Button>
      </Link>
    </>
  )

  const title = (
    <h1>
      {t.rich('headline', {
        important: (chunks) => <span className="bold">{chunks}</span>,
        SwappingWord: () => (
          <SwappingWord
            words={['TypeScript', 'React', 'Next.js', 'SCSS', 'NestJS']}
          />
        ),
      })}
    </h1>
  )

  return (
    <TextBlock
      subtitle={t('caption')}
      title={title}
      description={t('details')}
      actions={actions}
    />
  )
}

export default Presentation
