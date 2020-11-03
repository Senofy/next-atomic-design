import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Image from 'next/image'

export const Img = styled(Image)`
    
`

Img.propTypes = {
    reverse: PropTypes.bool,
}

Img.defaultProps = {
    palette: 'grayscale',
}