import React from 'react';
import { shallow } from 'enzyme';
import Cameras from './Cameras';

const mockData = [
  {
    id: "31820",
    filename: "162042.jpg",
    exif: {
      model: "NIKON D80",
      make: "NIKON CORPORATION"
    },
    urls: [
      {
        type: "small",
        link: "http://ih1.redbubble.net/work.31820.1.flat,135x135,075,f.jpg"
      },
      {
        type: "medium",
        link: "http://ih1.redbubble.net/work.31820.1.flat,300x300,075,f.jpg"
      },
      {
        type: "large",
        link: "http://ih1.redbubble.net/work.31820.1.flat,550x550,075,f.jpg"
      }
    ]
  }
]
it('expected to render Cameras Component', () => {
  expect(shallow(<Cameras />)).toMatchSnapshot();
})

it('expected to return data of works', () => {
  const wrapper = shallow(<Cameras />);
  expect(wrapper.find('Query').length).toBe(1);
})

