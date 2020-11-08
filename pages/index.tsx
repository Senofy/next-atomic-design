import { Fragment } from 'react'
import { Composition } from 'atomic-layout'

import { Heading, Container } from '../components/atoms'
import { Header, Navbar, Footer } from '../components/organisms'
import { PageTemplate } from '../components/templates'
import Head from '../components/Head'

const areasMobile = `
	stat
	stat
	stat
	stat
`

const areasTablet = `
	stat stat
	stat stat
`

const areasDesktop = `
	stat stat stat stat
`

const areasDesktopWide = `
	stat stat stat stat
`

const Home = () => {
	return (
		<Fragment>
			<Head title='Home' />
			<PageTemplate navigation={<Navbar />} header={<Header />} footer={<Footer />}>
				<Composition
					areas={areasMobile}
					areasMd={areasTablet}
					areasLg={areasDesktop}
					areasXl={areasDesktopWide}
					gap={10}
				>
					{({}) => (
						<>
							<Container padding={20}>
								<Heading.H6 fontSize={11}>CONVERSION RATE</Heading.H6>
							</Container>
							<Container padding={20}>
								<Heading.H6 fontSize={11}>CONVERSION RATE</Heading.H6>
							</Container>
							<Container padding={20}>
								<Heading.H6 fontSize={11}>CONVERSION RATE</Heading.H6>
							</Container>
							<Container padding={20}>
								<Heading.H6 fontSize={11}>CONVERSION RATE</Heading.H6>
							</Container>
						</>
					)}
				</Composition>
			</PageTemplate>
		</Fragment>
	)
}

export default Home
