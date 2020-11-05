import PropTypes from 'prop-types'
import { Img } from '~/components/atoms/Image'
import { NavLink } from '~/components/atoms/Link'
import { Wrapper, LinkWrapper, ExtraWrapper } from './styles'

const NavBar = ({ reverse }) => {
    return (
        <Wrapper reverse = {reverse}>
            <Img src = {'/static/img/logo.png'} width = {100} height = {36} layout = {'fixed'} />
            <LinkWrapper>
                <NavLink>Dashboard</NavLink>
                <NavLink>Apps</NavLink>
            </LinkWrapper>
            <ExtraWrapper></ExtraWrapper>
        </Wrapper>
    )
}

NavBar.propTypes = {
    reverse: PropTypes.bool,
}

export default NavBar
