import { DegreeType } from '../types/DegreeType'

export const allDegrees: DegreeType[] = [
  {
    logo: {
      src: '/images/schools/ENI-logo.png',
      width: 100,
      height: 100,
    },
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
    logo: {
      src: '/images/schools/ESUPEC-logo.png',
      width: 100,
      height: 70.18,
    },
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
    logo: {
      src: '/images/schools/jean-monnet-logo.png',
      width: 100,
      height: 28.52,
    },
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
