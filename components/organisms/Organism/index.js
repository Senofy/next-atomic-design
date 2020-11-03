import PropTypes from 'prop-types'
import { Wrapper } from './styles'

const Organism = (props) => {
    return (
        <Wrapper {...props}>content</Wrapper>
    )
}

Organism.propTypes = {
    reverse: PropTypes.bool,
}

export default Organism
