import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
});

it('expected to render Cameras Component', () => {
  expect(shallow(<App />)).toMatchSnapshot();
})

it('expected to get works', () => {
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
  const wrapper = shallow(<App />);
  expect(wrapper.setState({ card: mockData }).length).toBe(1);
})

it('correctly get the searchField', () => {
  const wrapper = shallow(<App />);
  const input = wrapper.find('SearchBox');
  input.props().handleChange({ target: { value: '2' } });
  expect(wrapper.state('searchField')).toBeDefined();
})