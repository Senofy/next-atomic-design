/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from './Button.js'

storiesOf('Button', module).add('default', () => <Button onClick={action('clicked')}>Learn more</Button>)
