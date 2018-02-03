import React, { Component } from 'react';

class DropDown extends React.Component {
  options(dropDownInput) {
    return dropDownInput.map((weight) => {
      return <option>{weight}</option>
    })
  }

  render() {
    return (
      <div className='wagaKonia'>
        <form>
          <select>
            {this.options(this.props.dropDownInput)}
          </select>
        </form>
      </div>
    );
  }
}

export default DropDown;