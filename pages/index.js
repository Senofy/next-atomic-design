import { Fragment } from 'react';
import Head from 'next/head'
import PageTemplate from '~/components/templates/PageTemplate'
import NavBar from '~/components/organisms/NavBar'
import Header from '~/components/organisms/Header'
import { Composition } from 'atomic-layout'
import { Container } from '~/components/atoms/Container'
import { Heading } from '~/components/atoms/Text'
import Footer from '~/components/organisms/Footer'
import { connect } from 'react-redux'

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
			<Head />
			<PageTemplate 
				navigation = {<NavBar />}
				header = {<Header />}
				footer = {<Footer />}
			>
				<Composition areas = {areasMobile} areasMd = {areasTablet} areasLg = {areasDesktop} areasXl = {areasDesktopWide} gap = {10}>
					{({ }) => (
						<Fragment>
							<Container padding = {20}>
								<Heading level = {6} fontSize = {11} colorWeight = {9}>
									CONVERSION RATE
								</Heading>
							</Container>
							<Container padding = {20}>
								<Heading level = {6} fontSize = {11} colorWeight = {9}>
									CONVERSION RATE
								</Heading>
							</Container>
							<Container padding = {20}>
								<Heading level = {6} fontSize = {11} colorWeight = {9}>
									CONVERSION RATE
								</Heading>
							</Container>
							<Container padding = {20}>
								<Heading level = {6} fontSize = {11} colorWeight = {9}>
									CONVERSION RATE
								</Heading>
							</Container>
						</Fragment>
					)}
				</Composition>
				
			</PageTemplate>
		</Fragment>
    );
}

const mapStateToProps = state => {
	return {
		
	}
}

const mapDispatchToProps = dispatch => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
