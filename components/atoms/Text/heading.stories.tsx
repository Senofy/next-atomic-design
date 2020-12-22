import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '.'

const { H1, H2, H3, H4, H5, H6 } = Heading

export default {
	title: 'atoms/Text/Heading',
	component: Heading.H1,
	argTypes: {
		children: { control: 'text' },
	},
	args: {
		children: 'Hello World',
	},
} as Meta

const L1: Story<HeadingProps> = (args) => <H1 {...args} />
const L2: Story<HeadingProps> = (args) => <H2 {...args} />
const L3: Story<HeadingProps> = (args) => <H3 {...args} />
const L4: Story<HeadingProps> = (args) => <H4 {...args} />
const L5: Story<HeadingProps> = (args) => <H5 {...args} />
const L6: Story<HeadingProps> = (args) => <H6 {...args} />

export const H1_Normal = L1.bind({})
export const H2_Normal = L2.bind({})
export const H3_Normal = L3.bind({})
export const H4_Normal = L4.bind({})
export const H5_Normal = L5.bind({})
export const H6_Normal = L6.bind({})
