import { NextPage } from 'next'
import Head from 'next/head'
import ContactMeBlock from '../common/components/elements/ContactMeBlock/ContactMeBlock'
import PageLayout from '../common/components/layouts/PageLayout/PageLayout'
import TextHeader from '../common/components/elements/TextHeader/TextHeader'
import Article from '../common/components/elements/Article/Article'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../common/components/elements/Icon/Icon'
import { CSSProperties } from 'react'

const AboutMe: NextPage = () => {
  const headerTitle = (
    <h1>
      Découvrez en un peu plus <br />à{' '}
      <span className="bold">propos de moi</span>.
    </h1>
  )

  const articleIntroduction = (
    <div>
      <p>
        Arrivant à terme du{' '}
        <Link href="https://www.eni-ecole.fr/formations/developpement/niveau-6-bac4-concepteur-developpeur-dapplications/">
          <a target="_blank">Bac +4 Concepteur Développeur d’Applications</a>
        </Link>{' '}
        au sein de{' '}
        <span className="bold">
          <Link href="https://www.eni-ecole.fr/">
            <a target="_blank">l&apos;ENI</a>
          </Link>
        </span>
        , je suis désormais en recherche d’une alternance pour débuter un{' '}
        <Link href="https://www.eni-ecole.fr/formations/developpement/niveau-7-bac5-manager-de-solutions-digitales-et-data/">
          <a target="_blank">Bac +5 Manager de Solutions Digitales et Data</a>
        </Link>
        , dans cette même école, au rythme d&apos;
        <span className="bold">
          1 semaine de cours pour 3 semaines en entreprise
        </span>
        .
      </p>
      <p>
        Curieux, persévérant et autonome, j&apos;aime notamment découvrir et
        m&apos;approprier de nouvelles technologies en échangeant avec
        d&apos;autres développeurs ou au travers de recherches en totale
        autonomie.
      </p>
    </div>
  )

  const chaptersSummaryIconsStyle: CSSProperties = {
    fontSize: '64px',
    minHeight: '64px',
    maxHeight: '64px',
    maxWidth: '64px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const articleChapters = [
    {
      title: 'Pourquoi avoir commencé le développement ?',
      content: (
        <p>
          Étant originellement un passionné de jeux vidéo et de nature très
          curieux, j’ai toujours été intéressé par l’envers du décor, ainsi en{' '}
          <span className="bold">2017</span>, âgé de 16 ans, je décide de me
          lancer dans le développement d’un serveur Garry’s Mod avec un ami, lui
          aussi passionné par l’informatique. C’est là que je découvre pour la
          première fois le développement, ici en{' '}
          <span className="bold">Lua</span>, et que j’y prends pleinement goût.
          Depuis cette aventure, je n’ai jamais cessé de vouloir créer d’autres
          projets, sans me limiter au monde des jeux vidéo, et par la suite
          découvrir ce qui aujourd’hui m’épanouit le plus :{' '}
          <span className="bold">le développement web (full stack)</span>.
        </p>
      ),
      summary: [
        {
          title: "Garry's Mod",
          illustration: (
            <Image
              height={64}
              width={64}
              src="/images/articles/garry-s-mod-logo.png"
              alt="Garry's mod logo"
              quality={100}
              className="desatured"
            />
          ),
        },
        {
          title: 'Lua',
          illustration: (
            <Image
              height={64}
              width={64}
              src="/images/articles/lua-logo.png"
              alt="Lua logo"
              quality={100}
              className="desatured"
            />
          ),
        },
        {
          title: 'Développement web (full stack)',
          illustration: (
            <Icon
              lib="remix-icon"
              icon="stack-fill"
              style={{
                color: 'var(--accent-color-3)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
      ],
    },
    {
      title: 'Mes précédentes expériences',
      content: (
        <div>
          <p>
            Après{' '}
            <span className="bold">plusieurs expériences en entreprise</span> et
            le développement de projets fronts et backs utilisant presque tous
            des <span className="bold">langages différents</span> (PHP, Bash,
            Lua, JavaScript, Java, Shell…), j’ai finalement eu un coup de cœur
            pour le <span className="bold">JavaScript</span>.
          </p>
        </div>
      ),
      subcontent: [
        {
          title: 'Back-end',
          content: (
            <div>
              <p>
                <span className="bold">Août 2020</span>, je découvre{' '}
                <span className="bold">NestJS</span> : framework back-end
                utilisant <span className="bold">TypeScript</span> et possédant
                une structure stricte, similaire à celle d’Angular, permettant
                de développer des APIs performantes et faciles à documenter.
                Séduit par son approche modulaire, son système d’injection de
                dépendances, ses règles strictes, ses performances et sa
                documentation fournie, je décide me lancer dans son
                apprentissage avec le{' '}
                <span className="bold">développement de deux API</span> :
              </p>
              <ol>
                <li>
                  <span className="bold">
                    API de{' '}
                    <Link href="https://github.com/boutterudy/Perfimaas">
                      <a target="_blank">Perfimaas</a>
                    </Link>
                  </span>{' '}
                  : assistant de gestion des finances personnelles
                </li>
                <li>
                  <span className="bold">
                    <Link href="https://github.com/boutterudy/nestjs-todo-app">
                      <a target="_blank">Todo App</a>
                    </Link>
                  </span>{' '}
                  : API permettant de{' '}
                  <span className="bold">gérer une liste de tâches</span>
                </li>
              </ol>
            </div>
          ),
          summary: [
            {
              title: 'TypeScript',
              illustration: (
                <Image
                  height={64}
                  width={64}
                  src="/images/articles/typescript-logo.png"
                  alt="TypeScript logo"
                  quality={100}
                  className="desatured"
                />
              ),
            },
            {
              title: 'NestJS',
              illustration: (
                <Image
                  height={62}
                  width={64}
                  src="/images/articles/nestjs-logo.png"
                  alt="NestJS logo"
                  quality={100}
                  className="desatured"
                />
              ),
            },
          ],
        },
        {
          title: 'Front-end',
          content: (
            <div>
              <p>
                Entendant parler de la librairie{' '}
                <span className="bold">React</span> depuis plusieurs années,
                c’est en <span className="bold">janvier 2021</span> que je
                commence à m’y intéresser. Je découvre par la même occasion le
                framework <span className="bold">Next.js</span>, et après plus
                d’un mois à me renseigner, je décide de développer{' '}
                <span className="bold">mes deux premiers projets</span> avec ces
                derniers :
              </p>
              <ol>
                <li>
                  <span className="bold">
                    <Link href="https://github.com/boutterudy/strongPasswordGenerator">
                      <a target="_blank">Strong Password Generator</a>
                    </Link>
                  </span>{' '}
                  : générateur de mots de passe sécurisés
                </li>
                <li>
                  <span className="bold">
                    <Link href="https://github.com/boutterudy/mytoolbox">
                      <a target="_blank">My Toolbox</a>
                    </Link>
                  </span>{' '}
                  : regroupement d’outils simples avec des fonctionnalités
                  limitées, dont le générateur de mot de passe en version
                  améliorée, tout en mettant en avant mes autres projets
                  personnels
                </li>
              </ol>

              <p>
                En parallèle de mes études, j’ai continué de me former sur React
                et Next.js, pour en <span className="bold">février 2022</span>{' '}
                me lancer simultanément dans le défi “
                <span className="bold">
                  <Link href="https://github.com/boutterudy/30-Days-Of-React/tree/exercice-solutions">
                    <a target="_blank">30 jours de React</a>
                  </Link>
                </span>
                ”, permettant d’acquérir les{' '}
                <span className="bold">fondamentaux de React</span>, et le
                développement de{' '}
                <span className="bold">
                  <Link href="https://github.com/boutterudy/REST-Countries-API">
                    <a target="_blank">ma propre solution</a>
                  </Link>
                </span>{' '}
                au challenge “
                <Link href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca">
                  <a target="_blank">
                    API REST des pays avec sélecteur de thème
                  </a>
                </Link>
                ”, visant à créer une application Web listant tous les pays avec
                en plus une gestion des thèmes clair (light) et sombre (dark),
                me permettant ainsi de{' '}
                <span className="bold">développer mes compétences</span>.
              </p>
            </div>
          ),
          summary: [
            {
              title: 'TypeScript',
              illustration: (
                <Image
                  height={64}
                  width={64}
                  src="/images/articles/typescript-logo.png"
                  alt="TypeScript logo"
                  quality={100}
                  className="desatured"
                />
              ),
            },
            {
              title: 'React',
              illustration: (
                <Image
                  height={56}
                  width={64}
                  src="/images/articles/react-logo.png"
                  alt="React logo"
                  quality={100}
                  className="desatured"
                />
              ),
            },
            {
              title: 'Next.js',
              illustration: (
                <Image
                  height={64}
                  width={64}
                  src="/images/articles/next-js-logo.png"
                  alt="Next.js logo"
                  quality={100}
                  className="desatured"
                />
              ),
            },
          ],
        },
        {
          title: 'Stage de Bac +4',
          content: (
            <div>
              <p>
                Durant mon{' '}
                <span className="bold">
                  stage de{' '}
                  <Link href="https://www.eni-ecole.fr/formations/developpement/niveau-6-bac4-concepteur-developpeur-dapplications/">
                    <a target="_blank">Bac +4</a>
                  </Link>{' '}
                  (2 mois)
                </span>{' '}
                réalisé au sein de l’entreprise{' '}
                <span className="bold">Sowlver</span>, il n’y avait pas d’autre
                développeur, j’étais donc responsable de l’ensemble des aspects
                techniques, de l’analyse des besoins au développement, en
                passant par les choix techniques et la conception de la base de
                données. Ainsi, j’ai décidé d’utiliser{' '}
                <span className="bold">NestJS</span> pour le développement de
                l’API en <span className="bold">TypeScript</span> et{' '}
                <span className="bold">Next.js</span> avec{' '}
                <span className="bold">React</span> pour le développement de
                l’interface en <span className="bold">TypeScript</span>, avec{' '}
                <span className="bold">SCSS</span> pour la partie style.
                L’objectif de ce stage était de{' '}
                <span className="bold">développer un espace en ligne</span>{' '}
                sécurisé, dédié à des professionnels.
              </p>
              <p>
                J’ai développé une <span className="bold">API</span> complète,
                avec un <span className="bold">système d’authentification</span>{' '}
                sécurisé, tant côté back-end, avec la librairie{' '}
                <span className="bold">Passport</span>, que front-end, avec la
                librairie <span className="bold">NextAuth.js</span>. J’ai
                également développé l’interface de l’application, avec notamment
                des composants <span className="bold">React</span> et le style
                en <span className="bold">SCSS</span>.
              </p>
              <p>
                C’est jusque là le projet sur lequel j’ai le plus aimé
                travailler car j’ai pu développer en{' '}
                <span className="bold">TypeScript</span> avec{' '}
                <span className="bold">NestJS</span>,{' '}
                <span className="bold">React</span> et{' '}
                <span className="bold">Next.js</span>, que j’affectionne
                particulièrement, et découvrir davantage{' '}
                <span className="bold">SCSS</span> pour toutes les feuilles de
                style, tout en{' '}
                <span className="bold">
                  consolidant mes connaissances et compétences
                </span>{' '}
                précédemment acquises. C’était également la première fois que je
                développais un système d’authentification avec{' '}
                <span className="bold">NestJS (Passport)</span> et{' '}
                <span className="bold">Next.js (NextAuth.js)</span>.
              </p>
            </div>
          ),
          summary: [
            {
              title: 'TypeScript',
              illustration: (
                <Image
                  height={64}
                  width={64}
                  src="/images/articles/typescript-logo.png"
                  alt="TypeScript logo"
                  quality={100}
                  className="desatured"
                />
              ),
            },
            {
              title: 'NestJS',
              illustration: (
                <Image
                  height={62}
                  width={64}
                  src="/images/articles/nestjs-logo.png"
                  alt="NestJS logo"
                  quality={100}
                  className="desatured"
                />
              ),
            },
            {
              title: 'React',
              illustration: (
                <Image
                  height={56}
                  width={64}
                  src="/images/articles/react-logo.png"
                  alt="React logo"
                  quality={100}
                  className="desatured"
                />
              ),
            },
            {
              title: 'Next.js',
              illustration: (
                <Image
                  height={64}
                  width={64}
                  src="/images/articles/next-js-logo.png"
                  alt="Next.js logo"
                  quality={100}
                  className="desatured"
                />
              ),
            },
            {
              title: 'SCSS',
              illustration: (
                <Image
                  height={48}
                  width={64}
                  src="/images/articles/sass-logo.png"
                  alt="Sass logo"
                  quality={100}
                  className="desatured"
                />
              ),
            },
            {
              title: 'Passport',
              illustration: (
                <Image
                  height={64}
                  width={51}
                  src="/images/articles/passport-logo.png"
                  alt="Passport library logo"
                  quality={100}
                  className="desatured"
                />
              ),
            },
            {
              title: 'NextAuth.js',
              illustration: (
                <Image
                  height={64}
                  width={58}
                  src="/images/articles/nextauth-js-logo.png"
                  alt="NextAuth.js logo"
                  quality={100}
                  className="desatured"
                />
              ),
            },
          ],
        },
      ],
    },
    {
      title: 'Mon avenir',
      subcontent: [
        {
          title: 'Court terme',
          content: (
            <div>
              <p>
                J’ai actuellement pour projet d’intégrer le{' '}
                <span className="bold">
                  <Link href="https://www.eni-ecole.fr/formations/developpement/niveau-7-bac5-manager-de-solutions-digitales-et-data/">
                    <a target="_blank">
                      Bac +5 Manager de Solutions Digitales et Data
                    </a>
                  </Link>
                </span>{' '}
                en alternance au sein de{' '}
                <span className="bold">
                  <Link href="https://www.eni-ecole.fr/">
                    <a target="_blank">l&apos;ENI</a>
                  </Link>
                </span>
                . Ayant été accepté par l&apos;école, je suis désormais en
                recherche active d’une entreprise pour avant tout la durée de
                l&apos;alternance, puis, à terme, collaborer et y{' '}
                <span className="bold">évoluer sur le long terme</span>.
              </p>
              <p>
                Concernant mes projets personnels, je travaille actuellement sur
                l’amélioration de mon portfolio, le développement de mes
                compétences avec <span className="bold">React</span> en
                explorant chaque partie de la feuille de route “
                <Link href="https://roadmap.sh/react">
                  <a target="_blank">Développeur React</a>
                </Link>
                ”, ma contribution à des projets open-source (par exemple{' '}
                <Link href="https://github.com/carbon-app/carbon">
                  <a target="_blank">Carbon</a>
                </Link>{' '}
                et{' '}
                <Link href="https://github.com/nextauthjs/next-auth">
                  <a target="_blank">Next-Auth</a>
                </Link>
                ) et la reprise du développement de mes autres projets :{' '}
                <Link href="https://github.com/boutterudy/Perfimaas">
                  <a target="_blank">Perfimaas</a>
                </Link>{' '}
                (assistant de gestion des finances personnelles) et{' '}
                <Link href="https://github.com/boutterudy/bonAlim">
                  <a target="_blank">BonAlim&apos;</a>
                </Link>{' '}
                (conseiller alimentaire personnel).
              </p>
            </div>
          ),
          summary: [
            {
              title: 'Bac +5 Manager de Solutions Digitales et Data',
              illustration: (
                <Icon
                  lib="remix-icon"
                  icon="award-fill"
                  style={{
                    color: 'var(--accent-color-4)',
                    ...chaptersSummaryIconsStyle,
                  }}
                  className="desatured"
                />
              ),
              link: 'https://www.eni-ecole.fr/formations/developpement/niveau-7-bac5-manager-de-solutions-digitales-et-data/',
            },
            {
              title: 'Alternance',
              illustration: (
                <Icon
                  lib="remix-icon"
                  icon="briefcase-5-line"
                  style={{
                    color: 'var(--accent-color-3)',
                    ...chaptersSummaryIconsStyle,
                  }}
                  className="desatured"
                />
              ),
              link: './alternance',
            },
            {
              title: 'Développement avec React',
              illustration: (
                <Image
                  height={56}
                  width={64}
                  src="/images/articles/react-logo.png"
                  alt="React logo"
                  quality={100}
                  className="desatured"
                />
              ),
            },
            {
              title: 'Projets personnels',
              illustration: (
                <Icon
                  lib="remix-icon"
                  icon="code-s-slash-line"
                  style={{
                    color: 'var(--accent-color-1)',
                    ...chaptersSummaryIconsStyle,
                  }}
                  className="desatured"
                />
              ),
            },
            {
              title: 'Contribution à des projets',
              illustration: (
                <Icon
                  lib="remix-icon"
                  icon="github-fill"
                  style={{
                    color: 'var(--accent-color-4)',
                    ...chaptersSummaryIconsStyle,
                  }}
                  className="desatured"
                />
              ),
            },
          ],
        },
        {
          title: 'Long terme',
          content: (
            <p>
              Après avoir obtenu mon{' '}
              <Link href="https://www.eni-ecole.fr/formations/developpement/niveau-7-bac5-manager-de-solutions-digitales-et-data/">
                <a target="_blank">
                  Bac +5 Manager de Solutions Digitales et Data
                </a>
              </Link>
              , je souhaite{' '}
              <span className="bold">rester au sein de la même entreprise</span>{' '}
              pour consolider et développer mes compétences, pour ensuite à plus
              long terme évoluer en tant que{' '}
              <span className="bold">chef de projet</span> ou responsable
              développement.
            </p>
          ),
          summary: [
            {
              title: "Évoluer dans l'entreprise",
              illustration: (
                <Icon
                  lib="remix-icon"
                  icon="service-fill"
                  style={{
                    color: 'var(--accent-color-3)',
                    ...chaptersSummaryIconsStyle,
                  }}
                  className="desatured"
                />
              ),
            },
            {
              title: 'Consolider et développer mes compétences',
              illustration: (
                <Icon
                  lib="remix-icon"
                  icon="braces-line"
                  style={{
                    color: 'var(--accent-color-4)',
                    ...chaptersSummaryIconsStyle,
                  }}
                  className="desatured"
                />
              ),
            },
            {
              title: 'Devenir chef de projet',
              illustration: (
                <Icon
                  lib="remix-icon"
                  icon="team-fill"
                  style={{
                    color: 'var(--accent-color-2)',
                    ...chaptersSummaryIconsStyle,
                  }}
                  className="desatured"
                />
              ),
            },
          ],
        },
      ],
    },
    {
      title: 'Pourquoi le Bac +5 Manager de Solutions Digitales et Data ?',
      content: (
        <div>
          <p>
            Arrivant à terme du{' '}
            <span className="bold">
              <Link href="https://www.eni-ecole.fr/formations/developpement/niveau-6-bac4-concepteur-developpeur-dapplications/">
                <a target="_blank">
                  Bac +4 Concepteur Développeur d’Applications
                </a>
              </Link>
            </span>{' '}
            et ayant travaillé pendant plus d’1 an en entreprise, il est pour
            moi important d’acquérir des compétences en{' '}
            <span className="bold">gestion de projet</span>, que ce soit pour
            structurer et gérer un projet informatique dans son ensemble, ou
            pour <span className="bold">gérer une équipe</span> avec la conduite
            de réunion, le recrutement et le{' '}
            <span className="bold">management</span>, tout en m’intégrant au
            sein d’une entreprise, via{' '}
            <span className="bold">l’alternance</span>, pour y évoluer sur le
            long terme.
          </p>
          <p>
            Pour plus d&apos;informations sur l&apos;alternance, se référer à{' '}
            <Link href="/alternance">
              <a>cette page</a>
            </Link>
            .
          </p>
        </div>
      ),
      summary: [
        {
          title: 'Gestion de projet',
          illustration: (
            <Icon
              lib="remix-icon"
              icon="team-fill"
              style={{
                color: 'var(--accent-color-2)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
        {
          title: "Gestion d'équipe / management",
          illustration: (
            <Icon
              lib="remix-icon"
              icon="group-2-fill"
              style={{
                color: 'var(--accent-color-4)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
        {
          title: 'Projet(s) en entreprise',
          illustration: (
            <Icon
              lib="remix-icon"
              icon="code-box-fill"
              style={{
                color: 'var(--accent-color-1)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
      ],
    },
    {
      title: 'Mes préférences : langages et frameworks',
      content: (
        <div>
          <p>
            Souhaitant acquérir encore davantage de compétences côté front-end,
            mes langages de prédilections sont actuellement{' '}
            <span className="bold">TypeScript</span> et{' '}
            <span className="bold">SCSS</span>, avec la librairie{' '}
            <span className="bold">React</span> et le framework{' '}
            <span className="bold">Next.js</span>.
          </p>
          <p>
            Côté back-end, <span className="bold">TypeScript</span> est aussi
            mon langage favoris, notamment avec le framework{' '}
            <span className="bold">NestJS</span>.
          </p>
          <p>
            J’ai d’ailleurs travaillé avec{' '}
            <span className="bold">TypeScript</span>,{' '}
            <span className="bold">SCSS</span>,{' '}
            <span className="bold">React</span>,{' '}
            <span className="bold">Next.js</span> et{' '}
            <span className="bold">NestJS</span> lors du développement d’un
            espace en ligne pour l’entreprise{' '}
            <span className="bold">Sowlver</span>, dans le cadre du stage
            réalisé durant mon{' '}
            <Link href="https://www.eni-ecole.fr/formations/developpement/niveau-6-bac4-concepteur-developpeur-dapplications/">
              <a target="_blank">Bac +4</a>
            </Link>
            , et durant lequel j’ai pu tester et développer mes compétences avec
            ces langages et frameworks, tout en m’initiant à la gestion de
            projet.
          </p>
        </div>
      ),
      summary: [
        {
          title: 'TypeScript',
          illustration: (
            <Image
              height={64}
              width={64}
              src="/images/articles/typescript-logo.png"
              alt="TypeScript logo"
              quality={100}
              className="desatured"
            />
          ),
        },
        {
          title: 'SCSS',
          illustration: (
            <Image
              height={48}
              width={64}
              src="/images/articles/sass-logo.png"
              alt="Sass logo"
              quality={100}
              className="desatured"
            />
          ),
        },
        {
          title: 'React',
          illustration: (
            <Image
              height={56}
              width={64}
              src="/images/articles/react-logo.png"
              alt="React logo"
              quality={100}
              className="desatured"
            />
          ),
        },
        {
          title: 'Next.js',
          illustration: (
            <Image
              height={64}
              width={64}
              src="/images/articles/next-js-logo.png"
              alt="Next.js logo"
              quality={100}
              className="desatured"
            />
          ),
        },
        {
          title: 'NestJS',
          illustration: (
            <Image
              height={62}
              width={64}
              src="/images/articles/nestjs-logo.png"
              alt="NestJS logo"
              quality={100}
              className="desatured"
            />
          ),
        },
      ],
    },
    {
      title: 'Mes centres d’intérêt',
      content: (
        <p>
          Durant mon temps libre j’aime faire du{' '}
          <span className="bold">sport</span> (course à pied, Pilates et Yoga),
          jouer aux <span className="bold">échecs</span>, faire des{' '}
          <span className="bold">photographies</span>,{' '}
          <span className="bold">lire</span> des livres en français et en
          anglais, faire du <span className="bold">théâtre</span>, développer
          mes connaissances autour du <span className="bold">cinéma</span>,
          regarder des <span className="bold">documentaires</span>, faire du{' '}
          <span className="bold">bénévolat</span> (FASM), développer des projets
          personnels et <span className="bold">voyager</span> lorsque j’en ai
          l’opportunité.
        </p>
      ),
      summary: [
        {
          title: 'Sport',
          illustration: (
            <Icon
              lib="remix-icon"
              icon="flashlight-fill"
              style={{
                color: 'var(--accent-color-1)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
        {
          title: 'Échecs',
          illustration: (
            <Image
              height={64}
              width={64}
              src="/images/articles/chess-com-logo.png"
              alt="Next.js logo"
              quality={100}
              className="desatured"
            />
          ),
        },
        {
          title: 'Photographie',
          illustration: (
            <Icon
              lib="remix-icon"
              icon="image-2-fill"
              style={{
                color: 'var(--accent-color-4)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
        {
          title: 'Lecture (français/anglais)',
          illustration: (
            <Icon
              lib="remix-icon"
              icon="book-fill"
              style={{
                color: 'var(--accent-color-3)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
        {
          title: 'Théâtre & Cinéma',
          illustration: (
            <Icon
              lib="remix-icon"
              icon="film-line"
              style={{
                color: 'var(--accent-color-2)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
        {
          title: 'Bénévolat',
          illustration: (
            <Icon
              lib="remix-icon"
              icon="hand-heart-line"
              style={{
                color: 'var(--accent-color-3)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
        {
          title: 'Projets personnels',
          illustration: (
            <Icon
              lib="remix-icon"
              icon="code-s-slash-line"
              style={{
                color: 'var(--accent-color-4)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
        {
          title: 'Voyager',
          illustration: (
            <Icon
              lib="remix-icon"
              icon="earth-line"
              style={{
                color: 'var(--accent-color-1)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
      ],
    },
    {
      title: 'Situation personnelle',
      content: (
        <p>
          Habitant actuellement en <span className="bold">Vendée</span>, je
          souhaite déménager à <span className="bold">Nantes</span> pour être au
          plus proche de l’entreprise qui m&apos;accueillera en alternance. J’ai
          21 ans, je possède le{' '}
          <span className="bold">permis B et une voiture</span>, je suis donc
          pleinement libre de mes déplacements.
        </p>
      ),
      summary: [
        {
          title: 'Habite en Vendée, bientôt à Nantes',
          illustration: (
            <Icon
              lib="remix-icon"
              icon="map-pin-line"
              style={{
                color: 'var(--accent-color-1)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
        {
          title: 'Permis B',
          illustration: (
            <Icon
              lib="remix-icon"
              icon="steering-fill"
              style={{
                color: 'var(--accent-color-4)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
        {
          title: 'Voiture',
          illustration: (
            <Icon
              lib="remix-icon"
              icon="roadster-line"
              style={{
                color: 'var(--accent-color-2)',
                ...chaptersSummaryIconsStyle,
              }}
              className="desatured"
            />
          ),
        },
      ],
    },
    {
      title: "Informations sur l'alternance",
      content: (
        <p>
          Pour plus d&apos;informations sur l&apos;alternance, se référer à{' '}
          <Link href="/alternance">
            <a>cette page</a>
          </Link>
          .
        </p>
      ),
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
      <Article introduction={articleIntroduction} content={articleChapters} />
      <ContactMeBlock />
    </PageLayout>
  )
}

export default AboutMe
