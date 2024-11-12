import { cloneElement, ReactElement } from 'react'
import { ProjectType } from '../../../types/ProjectType'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import styles from './ProjectsList.module.scss'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '../../../i18n/routing'
import { Colors } from '../../../constants/colors'
import Image from 'next/legacy/image'

type Project = 'portfolio' | 'countries' | 'twitter' | 'toolbox' | 'perfimaas'

type ProjectsListProps = {
  displayedProjects?: Array<Project>
}

const ProjectsList = async ({
  displayedProjects = [
    'portfolio',
    'countries',
    'twitter',
    'toolbox',
    'perfimaas',
  ],
}: ProjectsListProps) => {
  const locale = await getLocale()
  const t = await getTranslations('ProjectsList')

  const portfolio: ProjectType = {
    title: t('portfolio.title'),
    description: t('portfolio.description'),
    demo: 'https://rudyboutte.com/',
    github: 'https://github.com/boutterudy/rudyboutte.com',
    tags: [
      { title: 'TypeScript', color: Colors.TYPESCRIPT },
      { title: 'React', color: Colors.REACT },
      { title: 'Next.js', color: Colors.NEXTJS },
      { title: 'SCSS', color: Colors.SCSS },
      { title: 'Adobe XD', color: Colors.ADOBEXD },
    ],
    preview: (
      <Image
        src="/images/projects/Portfolio.png"
        alt="Screenshot of my portfolio"
      />
    ),
    date: new Date(2022, 6),
    icon: <Icon lib="remix-icon" icon="globe-line" />,
  }

  const countries: ProjectType = {
    title: t('countries.title'),
    description: t('countries.description'),
    demo: 'https://rest-countries-api-lac.vercel.app/',
    github: 'https://github.com/boutterudy/REST-Countries-API',
    tags: [
      { title: 'TypeScript', color: Colors.TYPESCRIPT },
      { title: 'React', color: Colors.REACT },
      { title: 'Next.js', color: Colors.NEXTJS },
      { title: 'SCSS', color: Colors.SCSS },
    ],
    preview: (
      <Image
        src="/images/projects/REST-Countries-API.png"
        alt="REST Countries API with color theme switcher screenshot"
        layout="fill"
      />
    ),
    date: new Date(2022, 1),
    icon: <Icon lib="remix-icon" icon="globe-line" />,
  }

  const twitter: ProjectType = {
    title: t('twitter.title'),
    description: t('twitter.description'),
    demo: 'https://30-days-of-react-two.vercel.app/solutions/day-28',
    github:
      'https://github.com/boutterudy/30-Days-Of-React/tree/exercice-solutions',
    tags: [
      { title: 'JavaScript', color: Colors.JAVASCRIPT },
      { title: 'React', color: Colors.REACT },
      { title: 'SCSS', color: Colors.SCSS },
    ],
    preview: (
      <Image
        src="/images/projects/30-Days-Of-React-Baby-Twitter.png"
        alt="Baby Twitter screenshot"
        layout="fill"
      />
    ),
    date: new Date(2022, 1),
    icon: <Icon lib="remix-icon" icon="twitter-fill" />,
  }

  const toolbox: ProjectType = {
    title: t('toolbox.title'),
    description: t('toolbox.description'),
    demo: 'https://www.rudy.cloud/',
    github: 'https://github.com/boutterudy/mytoolbox',
    tags: [
      { title: 'TypeScript', color: Colors.TYPESCRIPT },
      { title: 'React', color: Colors.REACT },
      { title: 'Next.js', color: Colors.NEXTJS },
      { title: 'CSS', color: Colors.CSS },
      { title: 'Adobe XD', color: Colors.ADOBEXD },
    ],
    preview: (
      <Image
        src="/images/projects/My-Toolbox.png"
        alt="My Toolbox screenshot"
        layout="fill"
        style={{
          maxWidth: '100%',
        }}
      />
    ),
    date: new Date(2021, 0),
    icon: <Icon lib="remix-icon" icon="tools-fill" />,
  }

  const perfimaas: ProjectType = {
    title: t('perfimaas.title'),
    description: t('perfimaas.description'),
    github: 'https://github.com/boutterudy/Perfimaas',
    tags: [
      { title: 'TypeScript', color: Colors.TYPESCRIPT },
      { title: 'NestJS', color: Colors.NESTJS },
    ],
    preview: (
      <Image
        src="/images/projects/Perfimaas.png"
        alt="Perfimaas registration page mock-up"
        layout="fill"
        style={{
          objectFit: 'contain',
        }}
      />
    ),
    date: new Date(2020, 7),
    icon: <Icon lib="remix-icon" icon="money-dollar-circle-fill" />,
  }

  const allProjects: Record<Project, ProjectType> = {
    portfolio,
    countries,
    twitter,
    toolbox,
    perfimaas,
  }

  const projectsToDisplay = displayedProjects.map(
    (projectKey) => allProjects[projectKey]
  )

  return (
    <section className={styles.projectsList}>
      {projectsToDisplay.map((project, index) => (
        <div key={index} className={styles.project}>
          <Link
            href={project.demo !== undefined ? project.demo : project.github}
            target="_blank"
          >
            <div className={styles.previewWrapper}>
              {cloneElement(project.preview as ReactElement, {
                className: styles.preview,
                layout: 'fill',
                objectFit: 'cover',
              })}
            </div>
          </Link>
          <div className={styles.details}>
            {cloneElement(project.icon as ReactElement, {
              className: styles.icon,
            })}
            <div className={styles.infos}>
              <p className={styles.date}>
                {project.date.toLocaleString(locale, { month: 'long' }) +
                  ' ' +
                  project.date.getFullYear()}
              </p>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.actions}>
                <div className={styles.links}>
                  {project.demo !== undefined && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="noAnimation"
                    >
                      <Button
                        className={styles.demoButton}
                        theme="small"
                        leftIcon={<Icon lib="remix-icon" icon="window-fill" />}
                      >
                        {t('cta.demo')}
                      </Button>
                    </Link>
                  )}
                  {project.github !== undefined && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="noAnimation"
                    >
                      <Button
                        className={styles.githubButton}
                        theme="small"
                        leftIcon={<Icon lib="remix-icon" icon="github-fill" />}
                      >
                        GitHub
                      </Button>
                    </Link>
                  )}
                </div>
                <div className={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <Badge key={index} color={tag.color}>
                      {tag.title}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProjectsList
