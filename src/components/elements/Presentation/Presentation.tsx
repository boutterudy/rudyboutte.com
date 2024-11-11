import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import SwappingWord from '../SwappingWord/SwappingWord'
import TextBlock from '../TextBlock/TextBlock'
import { Link } from '../../../i18n/routing'

const Presentation = () => {
  const actions = (
    <>
      <Link href="/a-propos" className="noAnimation">
        <Button leftIcon={<Icon lib="remix-icon" icon="user-shared-2-line" />}>
          À propos de moi
        </Button>
      </Link>
      <Link href="/mes-projets" className="noAnimation">
        <Button leftIcon={<Icon lib="remix-icon" icon="code-s-slash-fill" />}>
          Découvrir mes projets
        </Button>
      </Link>
    </>
  )

  const title = (
    <h1>
      Je m&apos;appelle Rudy Boutte.
      <br />
      <span className="bold">Développeur Web polyvalent,</span>
      <br />
      qui aime{' '}
      <span className="bold">
        <SwappingWord
          words={['TypeScript', 'React', 'Next.js', 'SCSS', 'NestJS']}
        />
      </span>
    </h1>
  )

  return (
    <TextBlock
      subtitle="Enchanté"
      title={title}
      description="A rejoint Gens de Confiance en novembre 2022."
      actions={actions}
    />
  )
}

export default Presentation
