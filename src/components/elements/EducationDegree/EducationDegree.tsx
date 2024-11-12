import Image from 'next/legacy/image'
import { DegreeType } from '../../../types/DegreeType'
import { getMonthName } from '../../../utils/DateUtil'
import { capitalizeFirstLetter } from '../../../utils/StringUtil'
import styles from './EducationDegree.module.scss'
import { useTranslations } from 'next-intl'

type EducationDegreeProps = {
  degree: DegreeType
}

const EducationDegree = ({ degree }: EducationDegreeProps) => {
  const t = useTranslations('EducationDegree')
  const tCommon = useTranslations('common')

  const begin = degree.begin
  const end = degree.end
  return (
    <div className={styles.educationDegree}>
      <div className={styles.introduction}>
        <div className={styles.logoWrapper}>
          <Image
            className={styles.logo}
            src={degree.logo.src}
            alt={`${degree.school} logo`}
            width={degree.logo.width}
            height={degree.logo.height}
          />
        </div>
        <div className={styles.informations}>
          <small className={styles.details}>
            {tCommon('from_to', {
              from: `${capitalizeFirstLetter(
                getMonthName(begin)
              )} ${begin.getFullYear()}`,
              to: `${capitalizeFirstLetter(
                getMonthName(end)
              )} ${end.getFullYear()}`,
            }) +
              ` - ${t('diploma_level')} ` +
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
        <p className={styles.title}>{t('studied_topics')}</p>
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
