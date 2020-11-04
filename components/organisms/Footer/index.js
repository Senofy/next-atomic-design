import PropTypes from 'prop-types'
import { Img } from '~/components/atoms/Image'
import { FooterLink } from '~/components/atoms/Link'
import { P } from '~/components/atoms/Text'
import { Wrapper, LinkWrapper } from './styles'

const Footer = ({ reverse }) => {
    return (
        <Wrapper reverse = {reverse}>
            <P fontSize = {11} lineHeight = {1.5}>© 2019 DASHFORGE V1.0.0. CREATED BY THEMEPIXELS</P>
            <LinkWrapper>
                <FooterLink>LICENSES</FooterLink>
                <FooterLink>CHANGE LOG</FooterLink>
                <FooterLink>GET HELP</FooterLink>
            </LinkWrapper>
        </Wrapper>
    )
}

Footer.propTypes = {
    reverse: PropTypes.bool,
}

export default Footer
