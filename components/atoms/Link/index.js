import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

export const NavLink = styled.a`
    font-family: ${font('primary')};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        color: ${palette('primary', 0)};
    }
`

export const FooterLink = styled.a`
    font-family: ${font('primary')};
    font-size: 12px;
    line-height: 1.5;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        color: ${palette('primary', 0)};
    }
`