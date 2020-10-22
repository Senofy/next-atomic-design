import React from 'react'
import styles from './index.module.css'
import Head from 'next/head'
import InputButton from '../components/molecules/InputButton/InputButton'
import { connect } from 'react-redux'

const Home = () => {
	return (
		<React.Fragment>
			<Head />
			<div className = {styles.container}>
				<InputButton />
			</div>
			<img src = {'/static/img/logout-icon.png'} />
		</React.Fragment>
		
	)
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
