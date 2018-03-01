import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../lib/store';
import Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';
import Dashboard from '../components/dashboard/index';
import App from '../components/app/index';

require('jest');

configure({adapter: new Adapter()});


describe('<Dashboard />', function(){

  beforeAll(() => {
    this.wrapper = mount(<Provider store={createStore()}><Dashboard /></Provider>);
  });
  afterAll(() => this.wrapper.unmount());

  test('should render two CategoryForm component', () => {
    expect(this.wrapper.find('CategoryForm').length).toBe(1);
  });
});

