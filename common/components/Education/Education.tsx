import { Fragment } from 'react';
import { DegreeType } from '../../types/DegreeType';
import EducationDegree from '../EducationDegree/EducationDegree';
import styles from './Education.module.scss';

const Education = () => {
  const degrees: DegreeType[] = [
    {
      logo: '/images/schools/ENI-logo.png',
      level: 6,
      title: "Bac +4 Concepteur Développeur d'Applications",
      school: {
        name: 'ENI Ecole Informatique',
        city: 'Nantes',
      },
      link: '',
      begin: new Date(2021, 9),
      end: new Date(2022, 6),
    },
    {
      logo: '/images/schools/ESUPEC-logo.png',
      level: 5,
      title: 'Bac +2 BTS SIO option SLAM',
      school: {
        name: 'ESUPEC',
        city: 'Cholet',
      },
      link: '',
      begin: new Date(2018, 9),
      end: new Date(2020, 7),
    },
    {
      logo: '/images/schools/jean-monnet-logo.png',
      level: 4,
      title: 'Bac. Pro. SEN - mention très bien',
      school: {
        name: 'Lycée Jean Monnet',
        city: 'Les Herbiers',
      },
      link: '',
      begin: new Date(2015, 9),
      end: new Date(2018, 6),
    },
  ];

  return (
    <section className={styles.education}>
      <h2 className={styles.title}>Mes formations</h2>
      <div className={styles.degrees}>
        {degrees.map((degree, index) => (
          <Fragment key={index}>
            <EducationDegree key={index} degree={degree} />
            {index !== degrees.length - 1 ? (
              <div className={styles.line}></div>
            ) : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Education;
