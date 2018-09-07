import React, { Component } from 'react';
import Title from './Title';
import DropDown from './DropDown';
import CheckBox from './CheckBox';
import SliderWork from './SliderWork';

class Section extends React.Component {
  render() {
    return (
      <div>
        <Title
          titleValue={this.props.titleValue}
        />
        {this.props.input}
      </div>
    );
  }
}

export default Section;