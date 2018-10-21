import React from 'react';
import {shallow} from 'enzyme';
import App from '../components/App';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders one App', () => {
    expect(wrapper).toHaveLength(1);
  });
});
