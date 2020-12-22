import { render, cleanup } from '@testing-library/react'
import { Link } from '../Link'

afterEach(cleanup)

test('<Link> renders children when passed in', () => {
	const { getByText } = render(<Link href='#'>Another link</Link>)
	expect(getByText(/another link/i)).toBeInTheDocument()
})
