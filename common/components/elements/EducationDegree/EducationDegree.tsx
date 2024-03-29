import Image from 'next/image'
import { DegreeType } from '../../../types/DegreeType'
import { getMonthName } from '../../../utils/DateUtil'
import { capitalizeFirstLetter } from '../../../utils/StringUtil'
import styles from './EducationDegree.module.scss'

type EducationDegreeProps = {
  degree: DegreeType
}

const EducationDegree = ({ degree }: EducationDegreeProps) => {
  const begin = degree.begin
  const end = degree.end
  return (
    <div className={styles.educationDegree}>
      <div className={styles.introduction}>
        <div className={styles.logoWrapper}>
          <Image
            className={styles.logo}
            src={degree.logo}
            alt={degree.school + ' logo'}
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
              ' à ' +
              capitalizeFirstLetter(getMonthName(end)) +
              ' ' +
              end.getFullYear() +
              ' - Diplôme de niveau ' +
              degree.level}
          </small>
          <div className={styles.title}>
            <h2 className={styles.degree}>{degree.title}</h2>
            <p className={styles.dates}>
              {begin.getFullYear() === end.getFullYear()
                ? begin.getFullYear()
                : begin.getFullYear() + ' - ' + end.getFullYear()}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.tasksContainer}>
        <p className={styles.title}>Sujets étudiés :</p>
        <ul className={styles.tasks}>
          {degree.curriculum.map((subject, index) => {
            const skills =
              subject.skills.length > 0
                ? '(' + subject.skills.join(' / ') + ')'
                : ''
            return (
              <li key={index}>
                {subject.description}{' '}
                <span className={styles.skills}>{skills}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default EducationDegree
