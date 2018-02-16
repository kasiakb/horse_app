import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

class SmallSlider extends React.Component {
    
  marks = {
    0: "0 kg",
    2: "2 kg"
  }

  handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value} kg`}
        visible={true}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

  sliderTitle(selectedCheckboxes) {
    return selectedCheckboxes.map((sliderTitle) => {
      return (
        <div style={this.wrapperStyle} key={sliderTitle}> 
          <label>
            {sliderTitle}
            <Slider name={sliderTitle} min={0} max={2} step={0.1} defaultValue={1} handle={this.handle} marks = {this.marks} />
          </label>
        </div>
      )
    })
  }

  wrapperStyle = { width: 400, margin: 50 };

  render() {  
    console.log(this.props.smallSliderTitleValue)
    return (
      <div>
        <form>
          {this.sliderTitle(this.props.selectedCheckboxes)}
        </form>
    </div>
    );
  }
}

export default SmallSlider