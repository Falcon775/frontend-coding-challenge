import React from "react"
import Enzyme, { shallow } from "enzyme"

import Adapter from "enzyme-adapter-react-16"
import TodoItem from "./TodoItem"

describe("TodoItem Component", () => {
	beforeAll(() => {
		Enzyme.configure({ adapter: new Adapter() })
	})

	it("renders correctly", () => {
        const todo = {
            id: 1, 
            description: "test", 
            dueDate: '20/01/2021', 
            isComplete: false
        }
		const component = shallow(<TodoItem todo={todo} />)
		expect(component).toMatchSnapshot()
	})
})