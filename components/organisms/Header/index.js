import PropTypes from 'prop-types'
import { Img } from '~/components/atoms/Image'
import { Wrapper, LinkWrapper } from './styles'

const Header = ({ reverse }) => {
    return (
        <Wrapper reverse = {reverse}>
            <Img src = {'/static/img/logo.png'} width = {100} height = {36} />
            <LinkWrapper>s</LinkWrapper>
        </Wrapper>
    )
}

Header.propTypes = {
    reverse: PropTypes.bool,
}

export default Header
