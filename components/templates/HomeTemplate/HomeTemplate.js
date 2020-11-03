import styles from './HomeTemplate.module.css'
import Organism from '~/components/organisms/Organism'

const HomeTemplate = () => {
	return (
		<div className={styles.container}>
			<Organism reverse />
		</div>
	)
}

export default HomeTemplate
