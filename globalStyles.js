import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	html {
		font-size: 10px;
	}

	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		color: #001737;
	}

	a, input, button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		outline: inherit;
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
	}

	a, button {
		cursor: pointer;
	}
	
	input {
		cursor: text;
	}
`