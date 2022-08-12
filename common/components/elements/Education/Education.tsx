import { DegreeType } from '../../../types/DegreeType'
import { WorkExperiencesNumberPerYearType } from '../../../types/WorkExperiencesNumberPerYearType'
import EducationDegree from '../EducationDegree/EducationDegree'
import styles from './Education.module.scss'

type EducationProps = {
  degrees: DegreeType[]
  workExperiencesNumberPerYear: WorkExperiencesNumberPerYearType[]
}

const Education = ({
  degrees,
  workExperiencesNumberPerYear,
}: EducationProps) => {
  // Get number of work experiences from the beginning to end of that degree
  /*const workExperiencesNumber = workExperiences.filter(
    (workExperience: WorkExperienceType) => {
      return (
        workExperience.end.getTime() >= degree.begin.getTime() &&
        workExperience.end.getTime() <= degree.end.getTime()
      );
    }
  ).length;*/

  const getTotalYearsCount = (begin: Date, end: Date) => {
    const beginYear = begin.getFullYear()
    const endYear = end.getFullYear()
    let count = 0
    for (let i = beginYear; i <= endYear; i++) {
      const numberPearYear = workExperiencesNumberPerYear.find(
        (numberPerYear) => numberPerYear.year === i
      )
      numberPearYear !== undefined ? (count += numberPearYear.count) : null
    }
    return count
  }

  return (
    <section className={styles.education}>
      <h2 className={styles.title}>Mes formations</h2>
      <div className={styles.degrees}>
        {degrees.map((degree, index) => (
          <div
            key={index}
            className={styles.yearGroup}
            style={{ flex: getTotalYearsCount(degree.begin, degree.end) }}
          >
            <EducationDegree key={index} degree={degree} />
            {index !== degrees.length - 1 ? (
              <div className={styles.line}></div>
            ) : (
              <div className={styles.line + ' ' + styles.dotted}></div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
