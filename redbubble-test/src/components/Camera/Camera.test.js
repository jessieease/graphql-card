import React from 'react';
import { shallow } from 'enzyme';
import Camera from './Camera';

const mockWork = 
  {
    id: "31820",
    exif: {
      model: "",
      make: ""
    },
  }

it('expected to render Camera Component', () => {
  expect(shallow(<Camera work={mockWork} />)).toMatchSnapshot();
})

it('expected to return model', () => {
  const wrapper = shallow(<Camera work={mockWork} />);
  expect(wrapper.find('div').at(2).text()).toBe('MODEL: Unknown Model');
})

