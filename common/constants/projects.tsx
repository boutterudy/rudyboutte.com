import { ProjectType } from '../types/ProjectType'
import { Colors } from './colors'
import Image from 'next/legacy/image'
import Icon from '../components/elements/Icon/Icon'

export const portfolioProject: ProjectType = {
  title: 'Portfolio',
  description:
    "Site mettant en avant mes compétences et permettant d'accéder aux informations utiles me concernant, notamment dans le cadre de ma recherche d'alternance.",
  demo: 'https://rudyboutte.com/',
  github: 'https://github.com/boutterudy/rudyboutte.com',
  tags: [
    { title: 'TypeScript', color: Colors.TYPESCRIPT },
    { title: 'React', color: Colors.REACT },
    { title: 'Next.js', color: Colors.NEXTJS },
    { title: 'SCSS', color: Colors.SCSS },
    { title: 'Adobe XD', color: Colors.ADOBEXD },
  ],
  preview: (
    <Image
      src="/images/projects/Portfolio.png"
      alt="Screenshot of my portfolio"
    />
  ),
  date: new Date(2022, 6),
  icon: <Icon lib="remix-icon" icon="globe-line" />,
}
export const countriesProject: ProjectType = {
  title: 'Explorateur de pays avec sélecteur de thème',
  description:
    "Application Web permettant d'accéder à la liste de tous les pays et de découvrir plus de détails sur chacun d'eux (population, capitale, langues, etc...).",
  demo: 'https://rest-countries-api-lac.vercel.app/',
  github: 'https://github.com/boutterudy/REST-Countries-API',
  tags: [
    { title: 'TypeScript', color: Colors.TYPESCRIPT },
    { title: 'React', color: Colors.REACT },
    { title: 'Next.js', color: Colors.NEXTJS },
    { title: 'SCSS', color: Colors.SCSS },
  ],
  preview: (
    <Image
      src="/images/projects/REST-Countries-API.png"
      alt="REST Countries API with color theme switcher screenshot"
      layout="fill"
    />
  ),
  date: new Date(2022, 1),
  icon: <Icon lib="remix-icon" icon="globe-line" />,
}
export const twitterProject: ProjectType = {
  title: 'Bébé Twitter',
  description:
    'Reproduction simplifiée du célèbre réseau social Twitter, avec du contenu généré à partir de plusieurs APIs publiques, développé dans le cadre du défi "30 jours de React".',
  demo: 'https://30-days-of-react-two.vercel.app/solutions/day-28',
  github:
    'https://github.com/boutterudy/30-Days-Of-React/tree/exercice-solutions',
  tags: [
    { title: 'JavaScript', color: Colors.JAVASCRIPT },
    { title: 'React', color: Colors.REACT },
    { title: 'SCSS', color: Colors.SCSS },
  ],
  preview: (
    <Image
      src="/images/projects/30-Days-Of-React-Baby-Twitter.png"
      alt="Baby Twitter screenshot"
      layout="fill"
    />
  ),
  date: new Date(2022, 1),
  icon: <Icon lib="remix-icon" icon="twitter-fill" />,
}
export const toolboxProject: ProjectType = {
  title: 'My Toolbox',
  description:
    "Boîte à outils en ligne, permettant pour l'instant d'utiliser un générateur de mot de passe et de mettre en avant mes autres projets personnels",
  demo: 'https://www.rudy.cloud/',
  github: 'https://github.com/boutterudy/mytoolbox',
  tags: [
    { title: 'TypeScript', color: Colors.TYPESCRIPT },
    { title: 'React', color: Colors.REACT },
    { title: 'Next.js', color: Colors.NEXTJS },
    { title: 'CSS', color: Colors.CSS },
    { title: 'Adobe XD', color: Colors.ADOBEXD },
  ],
  preview: (
    <Image
      src="/images/projects/My-Toolbox.png"
      alt="My Toolbox screenshot"
      layout="fill"
      style={{
        maxWidth: '100%',
      }}
    />
  ),
  date: new Date(2021, 0),
  icon: <Icon lib="remix-icon" icon="tools-fill" />,
}
export const perfimaasProject: ProjectType = {
  title: 'API de Perfimaas',
  description:
    "API de Perfimaas, l'assistant de gestion des finances personnelles ayant pour but d'accompagner les citoyens du monde à gérer plus sainement leurs finances.",
  github: 'https://github.com/boutterudy/Perfimaas',
  tags: [
    { title: 'TypeScript', color: Colors.TYPESCRIPT },
    { title: 'NestJS', color: Colors.NESTJS },
  ],
  preview: (
    <Image
      src="/images/projects/Perfimaas.png"
      alt="Perfimaas registration page mock-up"
      layout="fill"
      style={{
        objectFit: 'contain',
      }}
    />
  ),
  date: new Date(2020, 7),
  icon: <Icon lib="remix-icon" icon="money-dollar-circle-fill" />,
}

export const allProjects: ProjectType[] = [
  portfolioProject,
  countriesProject,
  twitterProject,
  toolboxProject,
  perfimaasProject,
]
