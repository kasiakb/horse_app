import React from 'react';

class CheckBox extends React.Component {
  checkBoxes(checkBoxInput) {
    let result
    return checkBoxInput.map((forage) => {
      if (forage != "Siano") {result = (
        <div key={forage}> 
          <label>
            <input 
              name = {forage}
              type='checkbox'
              checked={this.props.checked}
              onChange={this.props.onChange}
            />
            {forage}
          </label>
        </div>
      )}else{
        result = (
          <div key={forage}> 
            <label>
              <input 
                name = {forage}
                type='checkbox'
                checked="checked"
                onChange={this.props.onChange}
                disabled
              />
              {forage}
            </label>
          </div>
        )}
        return result
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