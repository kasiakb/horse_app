import renderer from 'react-test-renderer';
import SmallSlider from '../components/SmallSlider';
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider'

describe('SmallSlider component renders the small sliders correctly', () => {
  it('renders correctly', () => {
    const key = "Owies"
    const title = "Owies"
    const marks={
      0: "0 kg",
      2: "2 kg"}
    const handle = jest.fn()
    const passChange = jest.fn()
    
    const rendered = renderer.create(
      <SmallSlider
      key={key}
      title={title}
      defaultValue={0}
      marks={marks}
      minCapacity={0}
      maxCapacity={2}
      handle={handle}
      passChange={passChange}
    />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});