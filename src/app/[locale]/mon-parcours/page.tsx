import { NextPage } from 'next'
import Head from 'next/head'
import ContactMeBlock from '../../../components/elements/ContactMeBlock/ContactMeBlock'
import Education from '../../../components/elements/Education/Education'
import TextHeader from '../../../components/elements/TextHeader/TextHeader'
import WorkExperiences from '../../../components/elements/WorkExperiences/WorkExperiences'
import PageLayout from '../../../components/layouts/PageLayout/PageLayout'
import { WorkExperiencesNumberPerYearType } from '../../../types/WorkExperiencesNumberPerYearType'
import { WorkExperienceType } from '../../../types/WorkExperienceType'
import styles from '../../../styles/pages/MyJourney.module.scss'
import { allDegrees } from '../../../constants/degress'
import { useTranslations } from 'next-intl'

const aterisLogo = {
  src: '/images/companies/ateris-informatique-logo.png',
  width: 100,
  height: 63.55,
}

const apinetLogo = {
  src: '/images/companies/apinet-logo.png',
  width: 100,
  height: 98.05,
}

const MyJourney: NextPage = () => {
  const t = useTranslations('MyJourney')

  const headerTitle = (
    <h1>
      {t.rich('headline', {
        important: (chunks) => <span className="bold">{chunks}</span>,
      })}
    </h1>
  )

  // Define all of my work experiences
  const workExperiences: WorkExperienceType[] = [
    {
      logo: {
        src: '/images/companies/gens-de-confiance-logo.png',
        width: 100,
        height: 48.83,
      },
      company: 'Gens de Confiance',
      begin: new Date(2022, 10, 2),
      end: new Date(),
      occupation: t('workExperiences.gens_de_confiance.occupation'),
      description: t('workExperiences.gens_de_confiance.description'),
    },
    {
      logo: {
        src: '/images/companies/sowlver-logo.png',
        width: 100,
        height: 77.73,
      },
      company: 'Sowlver',
      begin: new Date(2022, 4),
      end: new Date(2022, 5, 30),
      occupation: t('workExperiences.sowlver.occupation'),
      description: t('workExperiences.sowlver.description'),
      tasks: [
        {
          description: t('workExperiences.sowlver.tasks.0.description'),
          skills: ['TypeScript', 'React', 'Next.js', 'NextAuth.js', 'SCSS'],
        },
        {
          description: t('workExperiences.sowlver.tasks.1.description'),
          skills: ['TypeScript', 'NestJS', 'Passport'],
        },
        {
          description: t('workExperiences.sowlver.tasks.2.description'),
          skills: ['Adobe XD'],
        },
      ],
    },
    {
      logo: aterisLogo,
      company: 'Ateris Informatique',
      begin: new Date(2020, 7),
      end: new Date(2021, 4, 31),
      occupation: t('workExperiences.ateris_2020_2021.occupation'),
      description: t('workExperiences.ateris_2020_2021.description'),
      tasks: [
        {
          description: t(
            'workExperiences.ateris_2020_2021.tasks.0.description'
          ),
          skills: [
            'OpenWRT',
            'OpenNDS',
            'Gammu',
            'Shell',
            'PHP',
            'JavaScript',
            'SQL',
            'HTML',
            'CSS',
          ],
        },
        {
          description: t(
            'workExperiences.ateris_2020_2021.tasks.1.description'
          ),
          skills: [
            'WordPress',
            'ImpressPages',
            'PHP',
            'JavaScript',
            'SQL',
            'HTML',
            'CSS',
          ],
        },
        {
          description: t(
            'workExperiences.ateris_2020_2021.tasks.2.description'
          ),
          skills: ['Shell', 'GnuPG'],
        },
        {
          description: t(
            'workExperiences.ateris_2020_2021.tasks.3.description'
          ),
          skills: ['Shell', 'Zimbra CLI'],
        },
        {
          description: t(
            'workExperiences.ateris_2020_2021.tasks.4.description'
          ),
          skills: ['Shell', 'Android Debug Bridge'],
        },
      ],
    },
    {
      logo: apinetLogo,
      company: 'Apinet',
      begin: new Date(2020, 6, 1),
      end: new Date(2020, 6, 31),
      occupation: t('workExperiences.apinet_2020_07.occupation'),
      description: t('workExperiences.apinet_2020_07.description'),
      tasks: [
        {
          description: t('workExperiences.apinet_2020_07.tasks.0.description'),
          skills: ['Java', 'Android Studio'],
        },
      ],
    },
    {
      logo: apinetLogo,
      company: 'Apinet',
      begin: new Date(2020, 0),
      end: new Date(2020, 1),
      occupation: t('workExperiences.apinet_2020_01_2020_02.occupation'),
      description: t('workExperiences.apinet_2020_01_2020_02.description'),
      tasks: [
        {
          description: t(
            'workExperiences.apinet_2020_01_2020_02.tasks.0.description'
          ),
          skills: [
            'Cordova',
            'JavaScript',
            'jQuery',
            'Bootstrap',
            'HTML',
            'CSS',
          ],
        },
      ],
    },
    {
      logo: apinetLogo,
      company: 'Apinet',
      begin: new Date(2019, 6),
      end: new Date(2019, 7, 30),
      occupation: t('workExperiences.apinet_2019.occupation'),
      description: t('workExperiences.apinet_2019.description'),
      tasks: [
        {
          description: t('workExperiences.apinet_2019.tasks.0.description'),
          skills: ['PHP', 'AngularJS', 'MAMP', 'SQL'],
        },
      ],
    },
    {
      logo: aterisLogo,
      company: 'Ateris Informatique',
      begin: new Date(2019, 4),
      end: new Date(2019, 5, 30),
      occupation: t('workExperiences.ateris_2019.occupation'),
      description: t('workExperiences.ateris_2019.description'),
      tasks: [
        {
          description: t('workExperiences.ateris_2019.tasks.0.description'),
          skills: ['Bash', 'NodeJS', 'TR-069'],
        },
        {
          description: t('workExperiences.ateris_2019.tasks.1.description'),
          skills: ['Bash', 'FFMPEG'],
        },
      ],
    },
    {
      logo: aterisLogo,
      company: 'Ateris Informatique',
      begin: new Date(2017, 9),
      end: new Date(2017, 10, 30),
      occupation: t('workExperiences.ateris_2017_10_2017_11.occupation'),
      description: t('workExperiences.ateris_2017_10_2017_11.description'),
      tasks: [
        {
          description: t(
            'workExperiences.ateris_2017_10_2017_11.tasks.0.description'
          ),
          skills: ['Bash', 'Lua', 'Python'],
        },
        {
          description: t(
            'workExperiences.ateris_2017_10_2017_11.tasks.1.description'
          ),
          skills: ['VLANs', 'pfSense'],
        },
      ],
    },
    {
      logo: aterisLogo,
      company: 'Ateris Informatique',
      begin: new Date(2017, 1),
      end: new Date(2017, 1, 28),
      occupation: t('workExperiences.ateris_2017_02.occupation'),
      description: t('workExperiences.ateris_2017_02.description'),
      tasks: [
        {
          description: t('workExperiences.ateris_2017_02.tasks.0.description'),
          skills: ['Bash', 'FFMPEG'],
        },
      ],
    },
    {
      logo: {
        src: '/images/companies/altea-informatique-logo.png',
        width: 100,
        height: 96.48,
      },
      company: 'Altéa Informatique',
      begin: new Date(2016, 5),
      end: new Date(2016, 5, 30),
      occupation: t('workExperiences.altea.occupation'),
      description: t('workExperiences.altea.description'),
      tasks: [
        {
          description: t('workExperiences.altea.tasks.0.description'),
          skills: [],
        },
        {
          description: t('workExperiences.altea.tasks.1.description'),
          skills: [],
        },
      ],
    },
    {
      logo: {
        src: '/images/companies/pc-pro-tech-logo.png',
        width: 100,
        height: 45.31,
      },
      company: 'PC PRO&TECH',
      begin: new Date(2016, 0),
      end: new Date(2016, 0, 30),
      occupation: t('workExperiences.pc_pro_tech.occupation'),
      description: t('workExperiences.pc_pro_tech.description'),
      tasks: [
        {
          description: t('workExperiences.pc_pro_tech.tasks.0.description'),
          skills: [],
        },
        {
          description: t('workExperiences.pc_pro_tech.tasks.1.description'),
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

  return (
    <PageLayout>
      <Head>
        <title>Rudy Boutte – Mon parcours</title>
        <meta
          name="description"
          content="Découvrez en un peu plus sur mon parcours : mes formations et mes expériences professionnelles."
        />
      </Head>
      <TextHeader title={headerTitle} />
      <div className={styles.container}>
        <WorkExperiences
          workExperiences={workExperiences}
          workExperiencesNumberPerYear={workExperiencesNumberPerYear}
        />
        <Education
          degrees={allDegrees}
          workExperiencesNumberPerYear={workExperiencesNumberPerYear}
        />
      </div>
      <ContactMeBlock />
    </PageLayout>
  )
}

export default MyJourney
