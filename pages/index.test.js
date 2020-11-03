import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Home from './'

const mockStore = configureMockStore()
const store = mockStore({})

const wrap = (props = {}) => shallow(
    <Provider store = {store}>
        <Home {...props} />
    </Provider>
)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
