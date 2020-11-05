import PropTypes from 'prop-types'
import { Heading } from '~/components/atoms/Text'
import { Wrapper, Navigation, Header, Content, Footer } from './styles'

const PageTemplate = ({ navigation, header, children, footer, ...props }) => {
  	return (
		<Wrapper {...props}>
			<Navigation>{navigation}</Navigation>
			<Header>{header}</Header>
			<Content>{children}</Content>
			<Footer>{footer}</Footer>
		</Wrapper>
  	)
}

PageTemplate.propTypes = {
	navigation: PropTypes.node.isRequired,
	header: PropTypes.node,
	footer: PropTypes.node.isRequired,
	children: PropTypes.any.isRequired,
}

export default PageTemplate
