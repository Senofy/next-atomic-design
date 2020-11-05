import PropTypes from 'prop-types'
import { Button } from '~/components/atoms/Button'
import { Img } from '~/components/atoms/Image'
import { NavLink } from '~/components/atoms/Link'
import { Heading } from '~/components/atoms/Text'
import { Wrapper, LinkWrapper, ExtraWrapper } from './styles'

const Header = ({ reverse }) => {
    return (
        <Wrapper reverse = {reverse}>
            <Heading level = {4} fontWeight = {500} colorWeight = {9}>Welcome to Dashboard</Heading>
            <Button fontWeight = {500}>GENERATE REPORT</Button>
        </Wrapper>
    )
}

Header.propTypes = {
    reverse: PropTypes.bool,
}

export default Header
