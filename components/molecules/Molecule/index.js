import PropTypes from 'prop-types'
import { Wrapper } from './styles'

const Molecule = (props) => {
    return (
        <Wrapper {...props}>content</Wrapper>
    )
}

Molecule.propTypes = {
    reverse: PropTypes.bool,
}

export default Molecule
