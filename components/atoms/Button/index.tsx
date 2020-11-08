import styled from 'styled-components'
import { color, fontFamily, fontSize, fontWeight, lineHeight, padding } from 'styled-system'

export interface ButtonProps {
	backgroundColor?: String
	fontFamily?: String
	fontSize?: number
	fontWeight?: number
	padding?: number
}

export const Button = styled.button<ButtonProps>`
	${color};
	${fontFamily};
	${fontSize};
	${fontWeight};
	${lineHeight};
	${padding};
	border-radius: 0.25rem;
`
