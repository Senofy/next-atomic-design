import styles from './HomeTemplate.module.css'
import { Button } from '~/components/atoms/Button/Button'
import InputGroup from '~/components/molecules/Input/InputGroup/InputGroup'

const HomeTemplate = () => {
	return (
		<div className={styles.container}>
			<Button>HI</Button>
			<InputGroup />
		</div>
	)
}

export default HomeTemplate
