import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
  {
    description: (
      <>
      <div className='hero-container'>
        <Heading as="h1" className="hero__title">
          Singularité
        </Heading>
        <p>
          Singularité est un forum dystopique et fantastique, plongé dans un univers de fiction inspiré de l’esthétisme et de la vision technologique du genre
          steampunk. Vos choix façonnent l’histoire dans un cadre semi-évolutif : les grandes lignes de l’intrigue sont déjà tracées mais malléables, et c’est à
          vous de déterminer la direction qui vous plaît, à travers vos actions et votre engagement. Quelques points-clés de notre vision du jeu :
        </p>
        <ul>
          <li>
            Des personnages non-jouables faillibles pour les figures clés au lancement du forum, pour vous et nous assurer de l’élan de l’intrigue, avec la
            possibilité d’interagir avec eux, de les influencer ou d’être influencé·es.
          </li>
          <li>
            Une cosmologie et un world-building imprégnés de poésie plutôt qu’ancrés dans la réalité : l’univers est une toile pour nos imaginations, sans
            prétention de réalisme absolu.
          </li>
          <li>De nombreux rebondissements prévus, qui peuvent bousculer l’évolution et la construction de votre personnage.</li>
          <li>
            Une volonté d’écrire de l’horreur et du suspense et de vous confronter régulièrement aux conséquences de vos choix, toutefois sans jamais basculer
            dans les excès, le grotesque ou l’explicite.
          </li>
        </ul>
        <p>
          Singularité s’adresse donc idéalement à des rôlistes expérimenté·es, prêt·es à se laisser convaincre par nos propositions. Cependant, celleux qui
          préfèrent décrire des scènes plus tranquilles de la vie de tous les jours possibles dans cet univers trouveront aussi leur place : le profil vous
          permet de nous indiquer quel type de joueureuse vous êtes et quel est votre rythme d’écriture, et nous prendrons cette information en compte pour
          l’administration de la communauté ! Si ce préambule a titillé votre curiosité, nous vous invitons à poursuivre sur le guide à destination des
          nouvelleaux membres.
        </p>
      </div>
      </>
    )
  }
]

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--12')}>
      <div className="padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
