import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
    font-family: ${font('primary')};
    color: ${palette('grayscale', 0)};
`

const Molecule = (props) => {
    return (
        <Wrapper {...props}>content</Wrapper>
    )
}

Molecule.propTypes = {
    reverse: PropTypes.bool,
}

export default Molecule
