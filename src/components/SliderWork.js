import React from 'react';
import Slider from 'rc-slider';

class SliderWork extends React.Component {
  style = { width: 400, margin: 50 };

  render() {  
    
    return (
      <div className='Work'>
        <form>
          <div type='level' style={this.style}>
            <Slider 
              name='workInput'
              min={0} 
              marks={this.props.marks}
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