import { createElement } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

// Functions to turn props into usable css
const color = ({ color, colorWeight }) => palette(color || 'grayscale', colorWeight || 5)
const fontSize = ({ level, fontSize }) => fontSize ? `${fontSize}px` : `${0.875 + (Math.abs(level - 6) * 0.21875)}rem`

// Heading
const headingStyles = css`
    font-family: ${font('primary')};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-size: ${fontSize};
    line-height: 1.25;
    margin: 0;
    color: ${color};
`

export const Heading = styled(({
    level, children, reverse, palette, theme, ...props
}) => createElement(`h${level}`, props, children))`${headingStyles}`

Heading.propTypes = {
    level: PropTypes.number,
    children: PropTypes.node,
    palette: PropTypes.string,
    reverse: PropTypes.bool,
}

Heading.defaultProps = {
    level: 1,
    palette: 'grayscale',
}

// Paragraph
export const P = styled.p`
    font-family: ${font('primary')};
    font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : '12px'};
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