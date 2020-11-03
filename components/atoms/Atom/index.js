import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

export const Atom = styled.div`
    font-family: ${font('primary')};
    color: ${palette('grayscale', 0)};
`

Atom.propTypes = {
    reverse: PropTypes.bool,
}

Atom.defaultProps = {
    palette: 'grayscale',
}