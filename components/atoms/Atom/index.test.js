import React from 'react'
import { shallow } from 'enzyme'
import Atom from '.'

const wrap = (props = {}) => shallow(<Atom {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
