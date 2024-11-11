import { Fragment } from 'react'
import { WorkExperiencesNumberPerYearType } from '../../../types/WorkExperiencesNumberPerYearType'
import { WorkExperienceType } from '../../../types/WorkExperienceType'
import WorkExperience from '../WorkExperience/WorkExperience'
import styles from './WorkExperiences.module.scss'

type WorkExperiencesProps = {
  workExperiences: WorkExperienceType[]
  workExperiencesNumberPerYear: WorkExperiencesNumberPerYearType[]
}

const WorkExperiences = ({
  workExperiences,
  workExperiencesNumberPerYear,
}: WorkExperiencesProps) => {
  return (
    <section>
      <h1 className={styles.title}>Mes expériences professionnelles</h1>
      {workExperiencesNumberPerYear.map((numberPerYear, yearGroupIndex) => (
        <div
          key={yearGroupIndex}
          className={styles.yearGroup}
          style={{
            flex: workExperiencesNumberPerYear.find(
              (countPerYear) => countPerYear.year === numberPerYear.year
            )?.count,
          }}
        >
          {workExperiences
            .filter(
              (workExperience) =>
                workExperience.end.getFullYear() === numberPerYear.year
            )
            .map((workExperience, index) => (
              <Fragment key={index}>
                <WorkExperience workExperience={workExperience} />
                {workExperience !==
                workExperiences[workExperiences.length - 1] ? (
                  <div className={styles.line}></div>
                ) : null}
              </Fragment>
            ))}
        </div>
      ))}
    </section>
  )
}

export default WorkExperiences
