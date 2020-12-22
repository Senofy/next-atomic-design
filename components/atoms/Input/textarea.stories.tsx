import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TextArea, TextAreaProps } from '.'

export default {
	title: 'atoms/Input/Textarea',
	component: TextArea,
	args: {
		placeholder: 'Text box',
	},
} as Meta

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />

export const Normal = Template.bind({})
