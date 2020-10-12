import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a, input, button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
	}
`

export const lightTheme = {
	colors: {
		green: {
			100: '#E6F0D5'
		}
	}
}

export const darkTheme = {
	colors: {
		green: {
			100: 'black'
		}
	}
}
