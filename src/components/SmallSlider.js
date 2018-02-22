import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

const Handle = Slider.Handle;

class SmallSlider extends React.Component {
  wrapperStyle = { width: 400, margin: 50 };

  handleSliderChange = (defaultValue) => {
    this.props.passChange(defaultValue, this.props.title)
  }

  render() {  
    
    return (
      <div>
        <form>
          <div style={ {width: 400, margin: 50} } key={this.props.title}> 
            <label>
              {this.props.title}
              <Slider 
                className={this.props.title}
                name={this.props.title} 
                min={this.props.minCapacity} 
                max={this.props.maxCapacity} 
                step={0.1} 
                defaultValue={this.props.defaultValue}
                handle={this.props.handle} 
                onChange={this.handleSliderChange}
                marks = {this.props.marks}
                />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SmallSlider