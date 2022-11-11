import Image from 'next/image'
import { WorkExperienceType } from '../../../types/WorkExperienceType'
import {
  getDifferenceBetweenDates,
  getMonthName,
} from '../../../utils/DateUtil'
import { capitalizeFirstLetter } from '../../../utils/StringUtil'
import styles from './WorkExperience.module.scss'

type WorkExperienceProps = {
  workExperience: WorkExperienceType
}

const WorkExperience = ({ workExperience }: WorkExperienceProps) => {
  const begin = workExperience.begin
  const end = workExperience.end
  return (
    <div className={styles.workExperience}>
      <div
        className={
          styles.introduction +
          (!workExperience.tasks ? ' ' + styles.noTasks : '')
        }
      >
        <div className={styles.logoWrapper}>
          <Image
            className={styles.logo}
            src={workExperience.logo}
            alt={workExperience.company + ' logo'}
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </div>
        <div className={styles.informations}>
          <small className={styles.details}>
            {capitalizeFirstLetter(getMonthName(begin)) +
              ' ' +
              begin.getFullYear() +
              (begin.getMonth() !== end.getMonth() ||
              begin.getFullYear() !== end.getFullYear()
                ? ' à ' +
                  (new Date().toDateString() !== end.toDateString()
                    ? capitalizeFirstLetter(
                        getMonthName(end) + ' ' + end.getFullYear()
                      )
                    : "aujourd'hui")
                : '') +
              ' (' +
              getDifferenceBetweenDates(begin, end) +
              ') - ' +
              workExperience.occupation}
          </small>
          <div className={styles.title}>
            <h2 className={styles.company}>{workExperience.company}</h2>
            <p className={styles.dates}>
              {begin.getFullYear() === end.getFullYear()
                ? begin.getFullYear()
                : begin.getFullYear() + ' - ' + end.getFullYear()}
            </p>
          </div>
          <p className={styles.description}>{workExperience.description}</p>
        </div>
      </div>
      {workExperience.tasks && (
        <div className={styles.tasksContainer}>
          <p className={styles.title}>Missions réalisées :</p>
          <ul className={styles.tasks}>
            {workExperience.tasks.map((task, index) => {
              const skills =
                task.skills.length > 0
                  ? '(' + task.skills.join(' / ') + ')'
                  : ''
              return (
                <li key={index}>
                  {task.description}{' '}
                  <span className={styles.skills}>{skills}</span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default WorkExperience
