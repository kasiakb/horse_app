import React from 'react';

class SmallSliderTitle extends React.Component {
  render() {
    return (
      <div>
        <h4>
          {this.props.smallSliderTitleValue}
        </h4>
      </div>
    );
  }
}

export default SmallSliderTitle;