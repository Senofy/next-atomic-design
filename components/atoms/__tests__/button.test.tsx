import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Button } from '../Button'

afterEach(cleanup)

test('<Button> should render without error', () => {
	const { asFragment } = render(<Button>CLick Me</Button>)
	expect(asFragment()).toMatchSnapshot()
})

test('<Button> renders children when passed in', () => {
	const { getByText } = render(<Button>Hello</Button>)
	expect(getByText(/hello/i)).toBeInTheDocument()
})

test('<Button> calls correct function on click', () => {
	const onClick = jest.fn()
	const { getByText } = render(<Button onClick={onClick}>Submit</Button>)
	const button = getByText(/submit/i)
	fireEvent.click(button)
	expect(onClick).toHaveBeenCalled()
})
