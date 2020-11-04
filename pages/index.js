import { Fragment } from 'react';
import Head from 'next/head'
import PageTemplate from '~/components/templates/PageTemplate'
import Header from '~/components/organisms/Header'
import Footer from '~/components/organisms/Footer'
import { connect } from 'react-redux'

const Home = () => {
	return (
        <Fragment>
			<Head />
			<PageTemplate 
				header = {<Header />}
				footer = {<Footer />}
			>
				
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
