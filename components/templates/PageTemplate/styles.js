import styled from 'styled-components'
import { size } from 'styled-theme'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 60px;
	min-height: 100vh;
	box-sizing: border-box;
`

export const Navigation = styled.nav`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
`

export const Header = styled.header`
	align-self: center;

	display: flex;
	justify-content: space-between;

	width: 100%;
	margin-bottom: 20px;
	padding: 20px;

	@media screen and (min-width: 768px) {
		max-width: ${size('maxWidthTablet')};
	}

	@media screen and (min-width: 992px) {
		max-width: ${size('maxWidthDesktop')};
	}

	@media screen and (min-width: 1200px) {
		max-width: ${size('maxWidthDesktopWide')};
	}
`

export const Content = styled.section`
    width: 100%;

	padding: 0 20px;
	
	@media screen and (min-width: 768px) {
		padding: 0 20px;
		margin: 0 auto;
		max-width: ${size('maxWidthTablet')};
	}

	@media screen and (min-width: 992px) {
		max-width: ${size('maxWidthDesktop')};
	}

	@media screen and (min-width: 1200px) {
		max-width: ${size('maxWidthDesktopWide')};
	}
`

export const Footer = styled.footer`
    margin-top: auto;
`