import Link from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'
import { ProjectType } from '../../../types/ProjectType'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import styles from './ProjectsList.module.scss'

type ProjectsListProps = {
  projects: ProjectType[]
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  const router = useRouter()

  return (
    <section className={styles.projectsList}>
      {projects.map((project, index) => (
        <div key={index} className={styles.project}>
          <Link
            href={project.demo !== undefined ? project.demo : project.github!}
          >
            <a target="_blank">
              <div className={styles.previewWrapper}>
                {cloneElement(project.preview as ReactElement, {
                  className: styles.preview,
                  layout: 'fill',
                  objectFit: 'cover',
                })}
              </div>
            </a>
          </Link>
          <div className={styles.details}>
            {cloneElement(project.icon as ReactElement, {
              className: styles.icon,
            })}
            <div className={styles.infos}>
              <p className={styles.date}>
                {project.date.toLocaleString(router.locale, { month: 'long' }) +
                  ' ' +
                  project.date.getFullYear()}
              </p>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.actions}>
                <div className={styles.links}>
                  {project.demo !== undefined && (
                    <Link href={project.demo}>
                      <a target="_blank" className="noAnimation">
                        <Button
                          className={styles.demoButton}
                          theme="small"
                          leftIcon={
                            <Icon lib="remix-icon" icon="window-fill" />
                          }
                        >
                          Démo
                        </Button>
                      </a>
                    </Link>
                  )}
                  {project.github !== undefined && (
                    <Link href={project.github}>
                      <a target="_blank" className="noAnimation">
                        <Button
                          className={styles.githubButton}
                          theme="small"
                          leftIcon={
                            <Icon lib="remix-icon" icon="github-fill" />
                          }
                        >
                          GitHub
                        </Button>
                      </a>
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
