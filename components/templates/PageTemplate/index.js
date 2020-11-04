import PropTypes from 'prop-types'
import { Wrapper, Header, Hero, Sponsor, Content, Footer } from './styles'

const PageTemplate = ({ header, hero, sponsor, children, footer, ...props }) => {
  	return (
		<Wrapper {...props}>
			<Header>{header}</Header>
			{hero && <Hero>{hero}</Hero>}
			{sponsor && <Sponsor>{sponsor}</Sponsor>}
			<Content>{children}</Content>
			<Footer>{footer}</Footer>
		</Wrapper>
  	)
}

PageTemplate.propTypes = {
	header: PropTypes.node.isRequired,
	hero: PropTypes.node,
	sponsor: PropTypes.node,
	footer: PropTypes.node.isRequired,
	children: PropTypes.any.isRequired,
}

export default PageTemplate
