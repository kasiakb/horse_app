import React, { Component } from 'react';
import Slider from 'rc-slider';

class SliderWork extends React.Component {
  keys(arr) {
    var a = 100/3;
    var b = -1;
    
    arr = [];
    
    while(b++, b<= 3){
      arr.push(a*b);
    }
    return arr
    console.log(arr)
  }

  marksObject(workInput) {
    // const keys = [0, 33, 66, 100];
    const marks = {};
    this.keys(this.props.arr).forEach((key, i) => marks[key] = workInput[i]);
    return marks
  }

  style = { width: 400, margin: 50 };

  render() {  
    
    return (
      <div className='Work'>
        <form>
        <div style={this.style}>
          <Slider min={0} marks={this.marksObject(this.props.workInput)} step={null} included={false} defaultValue={20} />
        </div>
        </form>
      </div>
    );
  }
}

export default SliderWork