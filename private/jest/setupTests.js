import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

process.env = {
	...process.env,
	__NEXT_IMAGE_OPTS: {
		deviceSizes: [320, 576, 768, 992, 1200],
		imageSizes: [],
		domains: ['images.example.com'],
		path: '/_next/image',
		loader: 'default',
	},
}

configure({ adapter: new Adapter() })
