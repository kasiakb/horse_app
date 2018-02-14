import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.titleValue}
        </h3>
      </div>
    );
  }
}

export default Title;