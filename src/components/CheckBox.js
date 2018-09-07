import React, { Component } from 'react';

class CheckBox extends React.Component {
  checkBoxes(checkBoxInput) {
    return checkBoxInput.map((forage) => {
      return (
        <div> 
          <label>
            <input 
              type='checkbox'
              checked={this.props.checked}
              onChange={this.props.onChange}
            />
            {forage}
          </label>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='pasza'>
        <form>
          {this.checkBoxes(this.props.checkBoxInput)}
        </form>
      </div>
    );
  } 
}

export default CheckBox;