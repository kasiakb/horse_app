import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CheckBox from '../components/CheckBox';

describe('CheckBox component renders the checkboxes correctly', () => {
  it('renders correctly', () => {
    const heckBoxInput=[
      "Owies", 
      "Jęczmień", 
      "Wysłodki buraczane", 
      "Drozdze pastewne",
      "Siano"]
    const onChange = jest.fn()
    const checked = jest.fn()
    
    
    const rendered = renderer.create(
      <CheckBox
      checkBoxInput={heckBoxInput}
      onChange={onChange}
      checked={checked}
    />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});