import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

export const P = styled.p`
    font-family: ${font('primary')};
    font-size: ${({ fontSize }) => `${fontSize}px` || '12px'};
    line-height: ${({ lineHeight }) => lineHeight};
    color: ${palette('grayscale', 9)};
`

P.propTypes = {
    reverse: PropTypes.bool,
    fontSize: PropTypes.number,
    lineHeight: PropTypes.number
}

P.defaultProps = {
    palette: 'grayscale',
    fontSize: 12
}