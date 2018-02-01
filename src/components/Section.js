import React, { Component } from 'react';
import Title from './Title'

class Section extends React.Component {
  render() {
    return (
      <Title
        titleValue={this.props.titleValue}
      />
    );
  }
}

export default Section;