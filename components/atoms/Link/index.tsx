import styled from 'styled-components'
import { color, fontFamily, fontSize, fontWeight, lineHeight } from 'styled-system'

interface LinkProps {
	href: string
}

export const NavLink = styled.a<LinkProps>`
	${color};
	${fontFamily};
	${fontSize};
	${fontWeight};
	${lineHeight};
`

export const FooterLink = styled.a<LinkProps>`
	${fontFamily};
	${fontSize};
	line-height: 1.5;
`
