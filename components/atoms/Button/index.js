import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

// Functions to turn props into usable css
const backgroundColor = ({ backgroundColor, backgroundColorWeight }) => palette(backgroundColor || 'primary', backgroundColorWeight || 0)
const color = ({ color, colorWeight }) => palette(color || 'white', colorWeight || 0)

// Paragraph
export const Button = styled.button`
    font-family: ${font('primary')};
    font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : '12px'};
    font-weight: ${({ fontWeight }) => fontWeight};
    line-height: ${({ lineHeight }) => lineHeight};
    background-color: ${backgroundColor};
    color: ${color};

    padding: 0.46875rem 0.9375rem;

    border-radius: 0.25rem;
`

Button.propTypes = {
    reverse: PropTypes.bool,
    fontSize: PropTypes.number,
    lineHeight: PropTypes.number
}

Button.defaultProps = {
    palette: 'grayscale',
    fontSize: 12
}