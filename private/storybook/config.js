// https://github.com/diegohaz/arc/wiki/Storybook

import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../style'

const req = require.context('../../components', true, /.stories.js$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
    <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
))

configure(loadStories, module)
