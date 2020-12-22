import React, { FC, ReactNode } from 'react'

import { Wrapper, Navigation, Content, Footer } from './styles'

interface PageTemplateProps {
	navigation: ReactNode
	footer: ReactNode
}

const PageTemplate: FC<PageTemplateProps> = ({ navigation, footer, children }) => {
	return (
		<Wrapper>
			<Navigation>{navigation}</Navigation>
			<Content>{children}</Content>
			{footer && <Footer>{footer}</Footer>}
		</Wrapper>
	)
}

export default PageTemplate
