import React from 'react'
import { Story, Meta } from '@storybook/react'

import { P, ParagraphProps } from './'

export default {
	title: 'atoms/Text/Paragraph',
	component: P,
	argTypes: {
		children: { control: 'text' },
	},
	args: {
		children:
			'Excepteur laborum sit aliquip irure voluptate non laboris eiusmod nulla non veniam aliquip proident irure.',
	},
} as Meta

const Template: Story<ParagraphProps> = (args) => <P {...args} />

export const Paragraph = Template.bind({})
