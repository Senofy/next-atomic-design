import { FC } from 'react'

import { Wrapper } from './styles'
import { Button, Heading } from '../../atoms'

const Header: FC = () => {
	return (
		<Wrapper>
			<Heading.H4 fontWeight={600}>Welcome to Dashboard</Heading.H4>
			<Button
				fontFamily={'body'}
				fontWeight={500}
				fontSize={12}
				color={'white'}
				backgroundColor={'red-400'}
				padding={2}
			>
				GENERATE REPORT
			</Button>
		</Wrapper>
	)
}

export default Header
