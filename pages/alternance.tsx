import { NextPage } from 'next'
import Head from 'next/head'
import ContactMeBlock from '../common/components/elements/ContactMeBlock/ContactMeBlock'
import PageLayout from '../common/components/layouts/PageLayout/PageLayout'
import TextHeader from '../common/components/elements/TextHeader/TextHeader'
import Article from '../common/components/elements/Article/Article'
import Link from 'next/link'

const Internship: NextPage = () => {
  const headerTitle = (
    <h1>
      Retrouvez toutes les informations
      <br /> relatives à <span className="bold">mon alternance</span>.
    </h1>
  )

  const articleChapters = [
    {
      title: 'Formation',
      content: (
        <div>
          <p>
            J&apos;ai actuellement pour projet d&apos;intégrer le{' '}
            <span className="bold">
              <Link href="https://www.eni-ecole.fr/formations/developpement/niveau-7-bac5-manager-de-solutions-digitales-et-data/">
                <a target="_blank">
                  Bac +5 Manager de Solutions Digitales et Data
                </a>
              </Link>
            </span>{' '}
            en alternance au sein de{' '}
            <span className="bold">l&apos;ENI, à Nantes</span>.
          </p>
        </div>
      ),
      subcontent: [
        {
          title: 'Contenu et objectifs',
          content: (
            <div>
              <p>
                Cette formation permet de{' '}
                <span className="bold">
                  fortifier les compétences techniques
                </span>{' '}
                et d&apos;
                <span className="bold">
                  acquérir les savoir-faire transverses
                </span>{' '}
                d&apos;un Manager de Solutions Digitales et Data, spécialiste du
                développement qui possède une vision globale de l&apos;ensemble
                à concevoir et la maîtrise des composants intervant dans la
                réalisation de l&apos;application. Son rôle étant d&apos;
                <span className="bold">
                  anticiper, détecter et résoudre les problèmes
                </span>{' '}
                d&apos;interaction des différents composants applicatifs.
              </p>
              <p>
                Les principaux objectifs de la formation sont les suivants :
              </p>
              <ul>
                <li>
                  <span className="bold">
                    Organiser un système d’information
                  </span>
                </li>
                <li>
                  Acquérir les notions fondamentales technologiques et
                  méthodologiques permettant la{' '}
                  <span className="bold">
                    gestion d’un système d’information
                  </span>
                </li>
                <li>
                  <span className="bold">Gérer une équipe</span> (management,
                  conduite de réunion, recrutement)
                </li>
                <li>
                  <span className="bold">Gérer un projet informatique</span>
                </li>
              </ul>
              <p>
                Pour plus d&apos;informations, se référer au{' '}
                <Link href="https://www.eni-ecole.fr/formations/developpement/niveau-7-bac5-manager-de-solutions-digitales-et-data/">
                  <a target="_blank">site de l&apos;école</a>
                </Link>{' '}
                et au{' '}
                <Link href="https://www.francecompetences.fr/recherche/rncp/34408/">
                  <a target="_blank">
                    répertoire national des certifications professionnelles
                    (RNCP)
                  </a>
                </Link>
                .
              </p>
            </div>
          ),
        },
        {
          title: 'Rythme',
          content: (
            <p>
              Le rythme de l&apos;alternance est d&apos;
              <span className="bold">
                1 semaine de cours pour 3 semaines en entreprise
              </span>
              .
            </p>
          ),
        },
        {
          title: 'Durée',
          content: (
            <p>
              La formation dure <span className="bold">1 an</span>, avec{' '}
              <span className="bold">490 heures</span> au centre de formation.
            </p>
          ),
        },
        {
          title: 'Niveau de diplôme',
          content: (
            <p>
              Le titre obtenu à l&apos;issue de cette formation est un{' '}
              <span className="bold">Bac +5</span>, soit un diplôme de{' '}
              <span className="bold">niveau 7</span> (anciennement I).
            </p>
          ),
        },
        {
          title: "Coût et aides de l'État",
          content: (
            <div>
              <p>
                Le coût de la formation{' '}
                <span className="bold">
                  peut varier en fonction des modalités
                </span>
                , à titre indicatif le tarif est généralement de{' '}
                <span className="bold">20€/h</span>, soit un coût total de{' '}
                <span className="bold">9 800€</span> pour la formation.
              </p>
              <p>
                Pour tout contrat d&apos;alternance signé avant janvier 2023, le
                gouvernement propose une{' '}
                <span className="bold">
                  <Link href="https://entreprendre.service-public.fr/vosdroits/F23556">
                    <a target="_blank">
                      aide exceptionnelle allant jusqu&apos;à 8 000€
                    </a>
                  </Link>
                </span>
                , tant{' '}
                <Link href="https://entreprendre.service-public.fr/vosdroits/F35391">
                  <a target="_blank">avec un contrat de professionnalisation</a>
                </Link>{' '}
                qu&apos;
                <Link href="https://entreprendre.service-public.fr/vosdroits/F23556">
                  <a target="_blank">avec un contrat d&apos;apprentissage</a>
                </Link>
                .
              </p>
              <p>
                Pour plus d&apos;informations, se référer au{' '}
                <Link href="https://travail-emploi.gouv.fr/IMG/pdf/guide_employeur.pdf">
                  <a target="_blank">
                    guide proposé par le ministère du travail pour
                    l&apos;embauche de personnes en contrats aidés
                  </a>
                </Link>
                .
              </p>
            </div>
          ),
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
      <Article content={articleChapters} />
      <ContactMeBlock />
    </PageLayout>
  )
}

export default Internship
