import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Atom } from '../Atom'

afterEach(cleanup)

test('<Atom> should take a snapshot', () => {
	const { asFragment } = render(<Atom />)
	expect(asFragment()).toMatchSnapshot()
})

test('<Atom> renders children when passed in', () => {
	const { getByText } = render(<Atom>Hello</Atom>)
	expect(getByText(/hello/i)).toBeInTheDocument()
})
