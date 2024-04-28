import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
    {
        description: (
            <>
                <p>
                    Personne ne connaît les prémices de cette histoire ; ils sont flous, incertains, autrefois posés à l’encre sur papier pour être brûlé. Des
                    origines d’une histoire répandue dans le monde, dans des lieux que personne n’a plus visités depuis des temps qu’il est même compliqué
                    d’imaginer.
                </p>
                <p>Toujours est-il que les Singularités sont apparues, ou bien peut-être ont-elles toujours été là. Des êtres qui ont transcendé leur
                condition humaine, qui ont suivi la voie des Dieux en espérant un jour les atteindre.
                </p>
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
