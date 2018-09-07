import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import DropDown from '../components/DropDown';
// import { options } from '../components/DropDown'

describe('DropDown component renders the dropdown with the weight correctly', () => {
  it('renders correctly', () => {
    const dropDownInput=[
      "400kg", 
      "500kg", 
      "600kg", 
      "700kg", 
      "800kg"]
    const onChange=jest.fn()
    const value="500kg"
    
    
    
    
    const rendered = renderer.create(
      <DropDown
        dropDownInput={dropDownInput}
        value={value} 
        onChange={onChange}
      />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});