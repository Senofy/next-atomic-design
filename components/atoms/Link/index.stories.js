import { storiesOf } from '@storybook/react'
import { NavLink } from './'

storiesOf('Link', module)
    .add('default', () => (
        <NavLink>Test</NavLink>
    ))
