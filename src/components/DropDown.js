import React from 'react';

class DropDown extends React.Component {
  options(dropDownInput) {
    return dropDownInput.map((weight) => {
      return <option key={weight}>{weight}</option>
    })
  }

  render() {
    console.log(this.props.value)
    
    return (
      <div className='wagaKonia'>
        <form>
          <select name='dropDownInput' type='weight' value={this.props.value} onChange={this.props.onChange}>
            {this.options(this.props.dropDownInput)}
          </select>
        </form>
      </div>
    );
  }
}

export default DropDown;