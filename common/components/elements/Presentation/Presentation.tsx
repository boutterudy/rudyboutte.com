import Link from 'next/link'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import SwappingWord from '../SwappingWord/SwappingWord'
import TextBlock from '../TextBlock/TextBlock'

const Presentation = () => {
  const actions = (
    <>
      <Link href="/a-propos">
        <a className="noAnimation">
          <Button
            leftIcon={<Icon lib="remix-icon" icon="user-shared-2-line" />}
          >
            À propos de moi
          </Button>
        </a>
      </Link>
      <Link href="/mes-projets">
        <a className="noAnimation">
          <Button leftIcon={<Icon lib="remix-icon" icon="code-s-slash-fill" />}>
            Découvrir mes projets
          </Button>
        </a>
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
