import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Link, LinkProps } from '.'

export default {
	title: 'atoms/Link',
	component: Link,
	argTypes: {
		children: { control: 'text' },
	},
	args: {
		children: 'Link',
		href: '#',
	},
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const Normal = Template.bind({})
