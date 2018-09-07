import renderer from 'react-test-renderer';
import SliderWork from '../components/SliderWork';
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider'

describe('SliderWork component renders the slider with level of work correctly', () => {
  it('renders correctly', () => {
    const marks = {0: "Brak pracy", 33.333333333333336: "Lekka praca", 66.66666666666667: "Średnia praca", 100: "Cięzka praca"}
    const onChange = jest.fn();
    const defaultValue = 66.66666666666667
    
    
    const rendered = renderer.create(
      <Slider 
      name='workInput'
      min={0}
      marks={marks}
      step={null} 
      included={false} 
      defaultValue={defaultValue} 
      onChange={onChange} 
    />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});