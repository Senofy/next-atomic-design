import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '../../style'

// Global decorator to apply the styles to all stories
export const decorators = [
	(Story) => (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		</>
	),
]

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
}
