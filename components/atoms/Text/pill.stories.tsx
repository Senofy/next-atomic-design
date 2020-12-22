import React from 'react'
import { Story, Meta } from '@storybook/react'

import { PillText, PillTextProps } from '.'

export default {
	title: 'atoms/Text/Pill',
	component: PillText,
	argTypes: {
		children: { control: 'text' },
	},
	args: {
		children: 'Hello world',
	},
} as Meta

const Template: Story<PillTextProps> = (args) => <PillText {...args} />

export const NormalPill = Template.bind({})
