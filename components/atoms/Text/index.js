import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

const color = ({ color, colorWeight }) => palette(color || 'grayscale', colorWeight || 5)

export const P = styled.p`
    font-family: ${font('primary')};
    font-size: ${({ fontSize }) => `${fontSize}px` || '12px'};
    line-height: ${({ lineHeight }) => lineHeight};
    color: ${color};
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