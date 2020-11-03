import { Fragment } from 'react';
import Head from 'next/head'
import PageTemplate from '~/components/templates/PageTemplate'
import { connect } from 'react-redux'

const Home = () => {
	return (
        <Fragment>
			<Head />
			<PageTemplate>
				content
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
