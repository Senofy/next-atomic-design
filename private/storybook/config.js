// https://github.com/diegohaz/arc/wiki/Storybook

import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '~/themes/default'

const req = require.context('../../components', true, /.stories.js$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
))

configure(loadStories, module)
