import { Fragment } from 'react'
import Head from '../components/Head'
import { Footer } from '../components/molecules'
import { NavigationBar } from '../components/organisms'
import { PageTemplate } from '../components/templates'

const Home = () => {
	return (
		<Fragment>
			<Head title={'Home'} />
			<PageTemplate navigation={<NavigationBar />} footer={<Footer />}></PageTemplate>
		</Fragment>
	)
}

export default Home
