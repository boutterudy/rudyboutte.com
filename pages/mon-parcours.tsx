import { NextPage } from 'next'
import Head from 'next/head'
import ContactMeBlock from '../common/components/elements/ContactMeBlock/ContactMeBlock'
import Education from '../common/components/elements/Education/Education'
import TextHeader from '../common/components/elements/TextHeader/TextHeader'
import WorkExperiences from '../common/components/elements/WorkExperiences/WorkExperiences'
import PageLayout from '../common/components/layouts/PageLayout/PageLayout'
import { DegreeType } from '../common/types/DegreeType'
import { WorkExperiencesNumberPerYearType } from '../common/types/WorkExperiencesNumberPerYearType'
import { WorkExperienceType } from '../common/types/WorkExperienceType'
import styles from '../styles/pages/MyJourney.module.scss'

const MyJourney: NextPage = () => {
  const headerTitle = (
    <h1>
      Découvrez en un peu plus sur mon parcours :{' '}
      <span className="bold">mes formations</span>, et{' '}
      <span className="bold">mes expériences professionnelles</span>.
    </h1>
  )

  // Define all of my work experiences
  const workExperiences: WorkExperienceType[] = [
    {
      logo: '/images/companies/sowlver-logo.png',
      company: 'Sowlver',
      begin: new Date(2022, 4),
      end: new Date(2022, 5, 30),
      occupation: 'Développeur Fullstack',
      description:
        'Développement variés (Front / Back / Full Stack) sous différents environnements (Windows / Linux).',
      tasks: [
        {
          description: "Développement d'un espace en ligne",
          skills: ['TypeScript', 'React', 'Next.js', 'NextAuth.js', 'SCSS'],
        },
        {
          description:
            "Développement d'une API complète avec système d'authentification",
          skills: ['TypeScript', 'NestJS', 'Passport'],
        },
      ],
    },
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
      occupation: 'Développeur back-end',
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
    {
      logo: '/images/companies/ateris-informatique-logo.png',
      company: 'Ateris Informatique',
      begin: new Date(2017, 9),
      end: new Date(2017, 10, 30),
      occupation: 'Technicien informatique',
      description:
        'Développement variés (Front / Back / Full Stack) sous différents environnements (Windows / Linux).',
      tasks: [
        {
          description:
            "Mise en place d'un système domotique avec contrôle à distance du matériel",
          skills: ['Bash', 'Lua', 'Python'],
        },
        {
          description:
            'Installation et configuration de différents équipements afin de mettre en place un réseau informatique pour un grand événement',
          skills: ['VLANs', 'pfSense'],
        },
      ],
    },
    {
      logo: '/images/companies/ateris-informatique-logo.png',
      company: 'Ateris Informatique',
      begin: new Date(2017, 1),
      end: new Date(2017, 1, 28),
      occupation: 'Technicien informatique',
      description:
        'Développement variés (Front / Back / Full Stack) sous différents environnements (Windows / Linux).',
      tasks: [
        {
          description:
            "Mise en place d'un système de diffusion automatique d'une chaîne télévisée vers différentes plates-formes web en direct",
          skills: ['Bash', 'FFMPEG'],
        },
      ],
    },
    {
      logo: '/images/companies/altea-informatique-logo.png',
      company: 'Altéa Informatique',
      begin: new Date(2016, 5),
      end: new Date(2016, 5, 30),
      occupation: 'Technicien informatique',
      description:
        'Développement variés (Front / Back / Full Stack) sous différents environnements (Windows / Linux).',
      tasks: [
        {
          description: 'Installations de matériels et logiciels informatiques',
          skills: [],
        },
        {
          description: 'Maintenance informatique',
          skills: [],
        },
      ],
    },
    {
      logo: '/images/companies/pc-pro-tech-logo.png',
      company: 'PC PRO&TECH',
      begin: new Date(2016, 0),
      end: new Date(2016, 0, 30),
      occupation: 'Technicien informatique',
      description:
        'Développement variés (Front / Back / Full Stack) sous différents environnements (Windows / Linux).',
      tasks: [
        {
          description:
            "Cartographie d'un réseau informatique et réorganisation d'une baie de brassage",
          skills: [],
        },
        {
          description:
            "Installation et paramétrage d'un système de vidéo-surveillance",
          skills: [],
        },
      ],
    },
  ].sort((a, b) => b.end.getTime() - a.end.getTime())

  // Get number of work experiences per year
  const workExperiencesNumberPerYear: WorkExperiencesNumberPerYearType[] = []

  /**
   * Function which is returning the workExperiencesNumber of one year (from workExperiencesNumberPerYear array)
   *
   * @param year number
   * @returns WorkExperiencesNumberPerYear
   */
  const findYearInArray = (year: number) =>
    workExperiencesNumberPerYear.find(
      (workExperiencesNumber) => workExperiencesNumber.year === year
    )

  /**
   * Function which is adding a year into workExperiencesNumberPerYear array
   *
   * @param year number
   */
  const addYearInArray = (year: number) =>
    workExperiencesNumberPerYear.push({
      year: year,
      count: 1,
    })

  // Counting for each year
  workExperiences.forEach((workExperience) => {
    const endYear = workExperience.end.getFullYear()

    // If end year is already in the array, increment the count, else add it into it
    const yearInArray = findYearInArray(endYear)
    yearInArray !== undefined
      ? (yearInArray.count += 1)
      : addYearInArray(endYear)
  })

  // Define all of my degrees
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
      curriculum: [
        {
          description: 'Algorithmique',
          skills: [],
        },
        {
          description: 'Développement Web côté front-end',
          skills: ['HTML', 'CSS', 'JavaScript', 'Angular'],
        },
        {
          description: 'Développement Web côté back-end',
          skills: ['PHP', 'Symfony'],
        },
        {
          description: 'Gestion de projet',
          skills: ['Méthode Agile', 'Gestion des ressources', 'Gantt'],
        },
        {
          description: 'Langage de requête SQL',
          skills: ['SQL', 'SQL Server'],
        },
        {
          description: 'Programmation Orientée Objet',
          skills: ['Java'],
        },
        {
          description: 'Développement en couches',
          skills: ['Java SE'],
        },
        {
          description: "Administration d'un serveur",
          skills: ['Apache', 'Linux'],
        },
        {
          description: 'Technologies Cross-Platform',
          skills: ['Xamarin', 'Ionic'],
        },
      ],
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
      curriculum: [
        {
          description: 'Développement Web full stack',
          skills: ['HTML', 'CSS', 'PHP', 'Symfony', 'MVC', 'JavaScript'],
        },
        {
          description: 'Langage de requête SQL',
          skills: ['SQL', 'MySQL', 'SQL Server'],
        },
        {
          description: 'Gestion de projet et conception',
          skills: ['Merise', 'UML', 'Agile'],
        },
        {
          description: 'Configuration de systèmes',
          skills: ['Commutateurs', 'Matériel Wifi', 'Routeurs'],
        },
        {
          description: 'Installation et administration de serveurs',
          skills: ['Debian', 'Windows 10', 'Windows Server 2016 & 2019'],
        },
        {
          description: 'Virtualisation de serveurs',
          skills: ['VMWare'],
        },
      ],
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
      curriculum: [
        {
          description: 'Préparation des matériels',
          skills: [],
        },
        {
          description:
            'Installation, configuration et mise en route des systèmes',
          skills: [],
        },
        {
          description: 'Maintenance des systèmes',
          skills: [],
        },
        {
          description: 'Test et vérification de la conformité',
          skills: [],
        },
        {
          description: 'Organisation de son activité',
          skills: [],
        },
      ],
    },
  ]

  return (
    <PageLayout>
      <Head>
        <title>Rudy Boutte</title>
        <meta
          name="description"
          content="Découvrez en un peu plus à mon propos."
        />
      </Head>
      <TextHeader title={headerTitle} />
      <div className={styles.container}>
        <WorkExperiences
          workExperiences={workExperiences}
          workExperiencesNumberPerYear={workExperiencesNumberPerYear}
        />
        <Education
          degrees={degrees}
          workExperiencesNumberPerYear={workExperiencesNumberPerYear}
        />
      </div>
      <ContactMeBlock />
    </PageLayout>
  )
}

export default MyJourney
