import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Container } from '../Container'

afterEach(cleanup)

test('<Container> should take a snapshot', () => {
	const { asFragment } = render(<Container />)
	expect(asFragment()).toMatchSnapshot()
})

test('<Container> renders children when passed in', () => {
	const { getByText } = render(<Container>Hello</Container>)
	expect(getByText(/hello/i)).toBeInTheDocument()
})
