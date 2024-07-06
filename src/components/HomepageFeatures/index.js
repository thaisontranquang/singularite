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
        Singularité est un forum dystopique et fantastique, dans un univers de notre conception à l’ambiance « art déco moderne » (néons, formes géométriques, métal et glamour).
        <br/>
Les grandes lignes de l’intrigue sont déjà tracées, mais malléables : le cadre est semi-évolutif.
<br/>
Quelques points clés de notre vision du jeu :
        </p>
        <ul>
          <li>
          Des personnages non jouables pour incarner les figures clés au lancement du forum : influencez-les, ou faites-vous influencer, au travers de vos interactions.
          </li>
          <li>
          Un univers sans prétention de réalisme, ni de masterclass.
          </li>
          <li>De nombreux rebondissements prévus pour bousculer l’évolution et la construction des personnages.</li>
          <li>
          Une volonté d’écrire de l’horreur, du suspense, de vous confronter aux conséquences de vos choix pour du drama bien croustillant — mais sans jamais basculer dans les excès, le grotesque ou l’explicite.
          </li>
        </ul>
        <p>
        Singularité s’adresse idéalement à des rôlistes qui ont envie de s’impliquer dans l’intrigue principale et qui n’ont pas peur des surprises narratives. Mais libre à vous de nous rejoindre pour le plaisir d’écrire les scènes plus tranquilles que cet univers permet !
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
