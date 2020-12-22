import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { P, Heading } from '../Text'

afterEach(cleanup)

test('<P> renders children when passed in', () => {
	const { getByText } = render(<P>Hello world</P>)
	expect(getByText(/hello world/i)).toBeInTheDocument()
})

test('<Heading> renders children when passed', () => {
	const { H1 } = Heading
	const { getByText } = render(<H1>Heading</H1>)
	expect(getByText(/heading/i)).toBeInTheDocument()
})
