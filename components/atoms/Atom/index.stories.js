import { storiesOf } from '@storybook/react'
import { Atom } from './'

storiesOf('Atom', module)
    .add('default', () => (
        <Atom>Test</Atom>
    ))
