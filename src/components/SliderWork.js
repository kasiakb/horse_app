import React, { Component } from 'react';
import Slider from 'rc-slider';

class SliderWork extends React.Component {
  keys(workInput) {
    const length = workInput.length - 1
    const delta = 100/length;
    const numericKeys = workInput.map((_, i) => {
      return delta*i
    })
    return numericKeys
  }

  marksObject(workInput) {
    const marks = {};
    this.keys(workInput).forEach((key, i) => marks[key] = workInput[i]);
    return marks
  }
  

  style = { width: 400, margin: 50 };


  render() {  
    
    
    return (
      <div className='Work'>
        <form>
          <div type='level' style={this.style}>
            <Slider 
              name='workInput'
              min={0} 
              marks={this.marksObject(this.props.workInput)} 
              step={null} 
              included={false} 
              defaultValue={this.props.defaultValue} 
              onChange={this.props.onChange} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SliderWork