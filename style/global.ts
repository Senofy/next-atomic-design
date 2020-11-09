import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap');

	* {
		box-sizing: border-box;
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
