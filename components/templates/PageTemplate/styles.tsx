import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 64px;
	min-height: 100vh;
`

export const Navigation = styled.nav`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
`

export const Content = styled.section`
	width: 100%;

	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`

export const Footer = styled.div`
	margin-top: auto;
`
