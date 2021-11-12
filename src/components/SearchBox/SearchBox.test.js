import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

it('expected to render SearchBox Component', () => {
  const mockPlaceholder = 'search by model';
  const mockHandleChange = 'Canon'
  expect(shallow(<SearchBox placeholder={mockPlaceholder} handleChange={mockHandleChange}/>)).toMatchSnapshot();
})