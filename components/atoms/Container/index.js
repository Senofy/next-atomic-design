import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(72, 94, 144, 0.16);
    border-radius: 0.25rem;
    padding: ${({ padding }) => `${padding}px`}
`

Container.propTypes = {
    reverse: PropTypes.bool,
}

Container.defaultProps = {
    palette: 'grayscale',
}