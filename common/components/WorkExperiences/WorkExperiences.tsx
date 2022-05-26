import { Fragment } from 'react';
import { WorkExperienceType } from '../../types/WorkExperienceType';
import WorkExperience from '../WorkExperience/WorkExperience';
import styles from './WorkExperiences.module.scss';

const WorkExperiences = () => {
  const workExperiences: WorkExperienceType[] = [
    {
      logo: '/images/companies/ateris-informatique-logo.png',
      company: 'Ateris Informatique',
      begin: new Date(2020, 7),
      end: new Date(2021, 4, 31),
      occupation: 'Développeur',
      description:
        'Développement variés (Front / Back / Fullstack) sous différents environnements (Windows / Linux).',
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
      logo: '/images/companies/apinet-logo.png',
      company: 'Apinet',
      begin: new Date(2020, 6, 1),
      end: new Date(2020, 6, 31),
      occupation: 'Développeur',
      description:
        'Développement variés (Front / Back / Full Stack) sous différents environnements (Windows / Linux).',
      tasks: [
        {
          description: "Développement d'un launcher pour AndroidTV",
          skills: ['Java', 'Android Studio'],
        },
      ],
    },
    {
      logo: '/images/companies/apinet-logo.png',
      company: 'Apinet',
      begin: new Date(2020, 0),
      end: new Date(2020, 1),
      occupation: "Développeur d'applications mobiles",
      description:
        'Développement variés (Front / Back / Full Stack) sous différents environnements (Windows / Linux).',
      tasks: [
        {
          description: "Développement d'une application mobile de gestion",
          skills: [
            'Cordova',
            'Javascript',
            'jQuery',
            'Bootstrap',
            'HTML',
            'CSS',
          ],
        },
      ],
    },
    {
      logo: '/images/companies/apinet-logo.png',
      company: 'Apinet',
      begin: new Date(2019, 6),
      end: new Date(2019, 7, 30),
      occupation: 'Développeur web',
      description:
        'Développement variés (Front / Back / Full Stack) sous différents environnements (Windows / Linux).',
      tasks: [
        {
          description: "Développement d'une interface web de gestion",
          skills: ['PHP', 'AngularJS', 'MAMP', 'SQL'],
        },
      ],
    },
    {
      logo: '/images/companies/ateris-informatique-logo.png',
      company: 'Ateris Informatique',
      begin: new Date(2019, 4),
      end: new Date(2019, 5, 30),
      occupation: "Développeur d'applications mobiles",
      description:
        'Développement variés (Front / Back / Full Stack) sous différents environnements (Windows / Linux).',
      tasks: [
        {
          description:
            "Mise en place d'un serveur d'autoconfiguration dédié à des box",
          skills: ['Bash', 'NodeJS', 'TR-069'],
        },
        {
          description:
            "Mise en place d'un système de diffusion des chaînes TNT via plusieurs flux RTMP",
          skills: ['Bash', 'FFMPEG'],
        },
      ],
    },
  ];

  return (
    <section>
      <h1 className={styles.title}>Mes expériences professionnelles</h1>
      {workExperiences.map((workExperience, index) => (
        <Fragment key={index}>
          <WorkExperience workExperience={workExperience} />
          {index !== workExperiences.length - 1 ? (
            <div className={styles.line}></div>
          ) : null}
        </Fragment>
      ))}
    </section>
  );
};

export default WorkExperiences;
