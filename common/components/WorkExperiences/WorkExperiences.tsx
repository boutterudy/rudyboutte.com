import { Fragment } from 'react';
import { WorkExperienceType } from '../../types/WorkExperienceType';
import WorkExperience from '../WorkExperience/WorkExperience';
import styles from './WorkExperiences.module.scss';

const WorkExperiences = () => {
  const workExperiences: WorkExperienceType[] = [
    {
      logo: '/images/companies/ateris-informatique-logo.png',
      company: 'Ateris Informatique',
      begin: new Date(2020, 8),
      end: new Date(2021, 6),
      occupation: 'Développeur',
      description:
        'Développement variés (Front / Back / Full Stack) sous différents environnements (Windows / Linux).',
      tasks: [
        {
          description:
            "Développement d'un portail captif avec plusieurs systèmes d'authentification",
          skills: [
            'OpenWRT',
            'OpenNDS',
            'Gammu',
            'Shell',
            'PHP',
            'Javascript',
            'SQL',
            'HTML',
            'CSS',
          ],
        },
        {
          description: 'Développement et maintenance de plusieurs sites web',
          skills: [
            'Wordpress',
            'ImpressPages',
            'PHP',
            'Javascript',
            'SQL',
            'HTML',
            'CSS',
          ],
        },
        {
          description: "Développement d'un outil de déchiffrement PGP",
          skills: ['Shell', 'GnuPG'],
        },
        {
          description:
            "Développement d'un script de migration mail d'ISPConfig vers Zimbra",
          skills: ['Shell', 'Zimbra CLI'],
        },
        {
          description:
            "Développement d'un installateur et configurateur d'AndroidTV automatisé",
          skills: ['Shell', 'Android Debug Bridge'],
        },
      ],
    },
    {
      logo: '/images/companies/ateris-informatique-logo.png',
      company: 'Ateris Informatique',
      begin: new Date(2020, 8),
      end: new Date(2021, 6),
      occupation: 'Développeur',
      description:
        'Développement variés (Front / Back / Full Stack) sous différents environnements (Windows / Linux).',
      tasks: [
        {
          description:
            "Développement d'un portail captif avec plusieurs systèmes d'authentification",
          skills: [
            'OpenWRT',
            'OpenNDS',
            'Gammu',
            'Shell',
            'PHP',
            'Javascript',
            'SQL',
            'HTML',
            'CSS',
          ],
        },
        {
          description: 'Développement et maintenance de plusieurs sites web',
          skills: [
            'Wordpress',
            'ImpressPages',
            'PHP',
            'Javascript',
            'SQL',
            'HTML',
            'CSS',
          ],
        },
        {
          description: "Développement d'un outil de déchiffrement PGP",
          skills: ['Shell', 'GnuPG'],
        },
        {
          description:
            "Développement d'un script de migration mail d'ISPConfig vers Zimbra",
          skills: ['Shell', 'Zimbra CLI'],
        },
        {
          description:
            "Développement d'un installateur et configurateur d'AndroidTV automatisé",
          skills: ['Shell', 'Android Debug Bridge'],
        },
      ],
    },
    {
      logo: '/images/companies/ateris-informatique-logo.png',
      company: 'Ateris Informatique',
      begin: new Date(2020, 8),
      end: new Date(2021, 6),
      occupation: 'Développeur',
      description:
        'Développement variés (Front / Back / Full Stack) sous différents environnements (Windows / Linux).',
      tasks: [
        {
          description:
            "Développement d'un portail captif avec plusieurs systèmes d'authentification",
          skills: [
            'OpenWRT',
            'OpenNDS',
            'Gammu',
            'Shell',
            'PHP',
            'Javascript',
            'SQL',
            'HTML',
            'CSS',
          ],
        },
        {
          description: 'Développement et maintenance de plusieurs sites web',
          skills: [
            'Wordpress',
            'ImpressPages',
            'PHP',
            'Javascript',
            'SQL',
            'HTML',
            'CSS',
          ],
        },
        {
          description: "Développement d'un outil de déchiffrement PGP",
          skills: ['Shell', 'GnuPG'],
        },
        {
          description:
            "Développement d'un script de migration mail d'ISPConfig vers Zimbra",
          skills: ['Shell', 'Zimbra CLI'],
        },
        {
          description:
            "Développement d'un installateur et configurateur d'AndroidTV automatisé",
          skills: ['Shell', 'Android Debug Bridge'],
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className={styles.title}>Mes expériences professionnelles</h1>
      {workExperiences.map((workExperience, index) => (
        <Fragment key={index}>
          <WorkExperience workExperience={workExperience} />
          {index !== workExperiences.length - 1 ? (
            <div className={styles.line}></div>
          ) : null}
        </Fragment>
      ))}
    </div>
  );
};

export default WorkExperiences;
