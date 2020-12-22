import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TextInput, TextInputProps } from '.'

export default {
	title: 'atoms/Input/TextInput',
	component: TextInput,
	args: {
		placeholder: 'Text box',
	},
} as Meta

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />

export const Normal = Template.bind({})
