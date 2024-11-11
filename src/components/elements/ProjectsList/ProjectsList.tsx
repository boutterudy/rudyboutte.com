import { cloneElement, ReactElement } from 'react'
import { ProjectType } from '../../../types/ProjectType'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import styles from './ProjectsList.module.scss'
import { getLocale } from 'next-intl/server'
import { Link } from '../../../i18n/routing'

type ProjectsListProps = {
  projects: ProjectType[]
}

const ProjectsList = async ({ projects }: ProjectsListProps) => {
  const locale = await getLocale()

  return (
    <section className={styles.projectsList}>
      {projects.map((project, index) => (
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
                        Démo
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
