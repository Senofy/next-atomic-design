import { Fragment } from 'react';
import styles from './index.module.css'
import Head from 'next/head'
import HomeTemplate from '~/components/templates/HomeTemplate/HomeTemplate'
import { connect } from 'react-redux'

const Home = () => {
	return (
        <Fragment>
			<Head />
			<HomeTemplate />
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
