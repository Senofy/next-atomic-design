import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Atom } from '.'

export default {
	title: 'atoms/Atom',
	component: Atom,
	argTypes: {
		children: { control: 'text' },
	},
	args: {
		children: 'I am a div',
	},
} as Meta

const Template: Story = (args) => <Atom {...args} />

export const Normal = Template.bind({})
