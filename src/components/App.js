import React from 'react';
import 'rc-slider/assets/index.css';
import Section from './Section';
import DropDown from './DropDown';
import CheckBox from './CheckBox';
import SliderWork from './SliderWork';
import formsData from '../formsData.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownInput: formsData.weightInput[2],
      selectedCheckboxes: null,
      workInput: 66,
    };
    
    this.handleInputChangeCheckbox = this.handleInputChangeCheckbox.bind(this);
    this.handleInputChangeDropdown = this.handleInputChangeDropdown.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.keys = this.keys.bind(this); 
    this.marksSlider = this.marksSlider.bind(this);
  }

  keys(workInput) {
      const length = workInput.length - 1
      const delta = 100/length;
      const numericKeys = workInput.map((_, i) => {
        return delta*i
      })
      return numericKeys
    }

  marksSlider() {
    const workInput = formsData.workInput
    const marks = {};
    this.keys(workInput).forEach((key, i) => marks[key] = workInput[i]);
      return marks
    }

  handleSliderChange(defaultValue) {
    // console.log(defaultValue)

    this.setState({
      workInput: defaultValue,
    })
  }

  handleInputChangeDropdown(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // console.log(name)
  
    this.setState({
      [name]: value
    });
    // console.log(name, value)
  }
  
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  handleInputChangeCheckbox(event) {
    const target = event.target;
    const name = target.name;

    if (this.selectedCheckboxes.has(name)) {
      this.selectedCheckboxes.delete(name);
    } else {
      this.selectedCheckboxes.add(name);
    }
    
    this.setState({
      selectedCheckboxes: this.selectedCheckboxes
    });
  }

  render() {
    console.log(this.state.selectedCheckboxes)
    return (
      <div className="App">
        <Section
          titleValue={formsData.weightTitle}
          input={<DropDown
            dropDownInput={formsData.weightInput}
            onChange={this.handleInputChangeDropdown}
            value={this.state.dropDownInput}
          />}
        />
        <Section
          titleValue={formsData.workTitle}
          input={<SliderWork
            marks={this.marksSlider()}
            onChange={this.handleSliderChange}
            defaultValue={this.state.workInput}
          />}
        />
        <Section
          titleValue={formsData.forageTitle}
          input={<CheckBox
            checkBoxInput={formsData.forageInput}
            onChange={this.handleInputChangeCheckbox}
            checked={this.state.checkBoxInput}
          />}
        />
      </div>
    )
  }
}

export default App;
