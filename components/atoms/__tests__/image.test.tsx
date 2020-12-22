import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Img } from '../Image'

afterEach(cleanup)

const defaultProps = {
	src: '/img/sample/cover-image.png',
	height: 150,
	width: 150,
	alt: 'Cover image',
}

test('<Img> should take a snapshot', () => {
	const { asFragment } = render(<Img {...defaultProps} />)
	expect(asFragment()).toMatchSnapshot()
})

test('<Img> renders children when passed in', () => {
	const { getByAltText } = render(<Img {...defaultProps} />)
	expect(getByAltText(/cover image/i)).toBeInTheDocument()
})
