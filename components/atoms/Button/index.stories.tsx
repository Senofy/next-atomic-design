import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
	title: 'atoms/Button',
	component: Button,
	argTypes: {
		children: { control: 'text' },
	},
	args: {
		children: 'Button',
	},
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Normal = Template.bind({})
