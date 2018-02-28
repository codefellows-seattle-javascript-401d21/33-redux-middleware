
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CategoryForm from '../components/category/category-form/';
require('jest')

configure({ adapter: new Adapter() })

describe('CategoryForm Component', function () {
  describe('Shallow Mounting for unit tests', function() {
    beforeAll(() => {
      this.wrapper = shallow(<CategoryForm />)
    })
    afterAll(() => this.wrapper.unmount())

    it('should render a CategoryForm component', () => {
      expect(this.wrapper.length).toBe(1)
      expect(this.wrapper.find('.category-form').length).toBe(1)
    })

    it('should have a default state of "name": ""', () => {
      expect(this.wrapper.state().name).toEqual('')
    })

    it('should update state when a name is provided in the form', () => {
      this.wrapper.find('.category-form input[name="name"]').simulate('change', { target: { name: 'name', value: 'hello world' } })
      expect(this.wrapper.state().name).toEqual('hello world')
    })
  })
  describe('Mounting Component for functional tests', function() {
    beforeAll(() => {
      let wrapper = mount(<CategoryForm />)
      wrapper.setProps({onComplete: jest.fn()})
      wrapper.setProps({buttonText: 'create'})

      this.wrapper = wrapper
    })
    afterAll(() => this.wrapper.unmount())

    it('should reset the state\'s name property to an empty string on form submit', () => {
      this.wrapper.setState({name: 'hello world'})
      this.wrapper.find('.category-form').simulate('submit', {preventDefault: () => {}})
      expect(this.wrapper.state().name).toEqual('')
    })

    it('should call props.onComplete once on form submit', () => {
      this.wrapper.find('.category-form').simulate('submit', {preventDefault: () => {}})
      expect(this.wrapper.props().onComplete).toHaveBeenCalled()
    })
  })
})