import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TodosList from './TodosList'

describe('TodoList Component', () => {

    beforeAll(() => {
        Enzyme.configure({ adapter: new Adapter() })
    })

    it('renders correctly', () => {
        const component = shallow(<TodosList />)
        expect(component).toMatchSnapshot()
    })
})