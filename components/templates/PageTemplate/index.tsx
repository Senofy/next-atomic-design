import { FC, ReactNode } from 'react';
import {
  Wrapper, Navigation, Header, Content, Footer
} from './styles';


interface PageTemplateProps {
  navigation: ReactNode;
  header: ReactNode;
  footer: ReactNode;
}

const PageTemplate: FC<PageTemplateProps> = ({
  navigation, header, footer, children
}) => {
  return (
		<Wrapper>
			<Navigation>{navigation}</Navigation>
			<Header maxWidth={['100%', '100%', 720, 960, 1140]}>
        {header}
      </Header>
			<Content maxWidth = {['100%', '100%', 720, 960, 1140]}>
        {children}
      </Content>
			<Footer>{footer}</Footer>
		</Wrapper>
  )
}

export default PageTemplate
