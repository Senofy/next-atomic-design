import { shallow } from 'enzyme'
import Molecule from './'

const wrap = (props = {}) => shallow(<Molecule {...props} />)

it('renders props when passed in', () => {
	const wrapper = wrap({ id: 'foo' })
	// expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
