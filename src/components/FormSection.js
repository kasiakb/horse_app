import React from 'react';
import Title from './Title';

class FormSection extends React.Component {
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

export default FormSection;