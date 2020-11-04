import styled from 'styled-components'
import { size } from 'styled-theme'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 60px;
	min-height: 100vh;
	box-sizing: border-box;
`

export const Header = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
`

export const Hero = styled.section``

export const Sponsor = styled.section``

export const Content = styled.section`
    width: 100%;
    box-sizing: border-box;
    margin: 20px auto;
    max-width: ${size('maxWidth')};
`

export const Footer = styled.footer`
    margin-top: auto;
`