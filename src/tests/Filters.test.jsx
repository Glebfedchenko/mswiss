import React from 'react';
import {shallow} from 'enzyme';
import sdks from '../redux/sdks.json';
import Filters from '../components/Filters/Filters';

describe('Filters', () => {
  const wrapper = shallow(<Filters />);
  it(`renders properly`, () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(`has to render ${sdks.results.length} results`, () => {
    const {length} = sdks.results;
    expect(wrapper.state().currentlyDisplayed.length).toEqual(length);
  });

  it(`searchvalue has to be ''`, () => {
    expect(wrapper.state().searchValue).toEqual('');
  });
});
