import React from 'react';
import 'rc-slider/assets/index.css';
import FormSection from './FormSection';
import DropDown from './DropDown';
import CheckBox from './CheckBox';
import SliderWork from './SliderWork';
import formsData from '../formsData.json';
import ResultSection from './ResultSection';
import {
  marksSlider,
  selectedCheckboxes,
} from './App-functions';

import { equation } from './functionalProgramming'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChangeCheckbox = this.handleInputChangeCheckbox.bind(this);
    this.handleInputChangeDropdown = this.handleInputChangeDropdown.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  
    this.state = {
      dropDownInput: formsData.weightInput[2],
      selectedCheckboxes: [],
      workInput: 66.66666666666667,
    };
  } 
  
  handleSliderChange(defaultValue) {

    this.setState({
      workInput: defaultValue,
    })
  }

  handleInputChangeDropdown(event) {
    const value = event.target.value;
    const name = event.target.name;
  
    this.setState({
      [name]: value
    });
  }

  componentWillMount () {
    this.selectedCheckboxes = new Set(["Siano"]);
  }

  handleInputChangeCheckbox(event) {
    const name = event.target.name;
    selectedCheckboxes(this.selectedCheckboxes, name)
    
    this.setState({
      selectedCheckboxes: this.selectedCheckboxes
    });
    console.log("Checboxes:", this.state.selectedCheckboxes)
  }

  selectedCheckboxesArr() {
    let array = Array.from(this.selectedCheckboxes);
    return array
    
  }

  render() {
  console.log(this.state.workInput),
  console.log("arrFromChecboxes:", this.selectedCheckboxesArr())
    return (
      <div>
        <div className="App">
        <FormSection
            titleValue={formsData.workTitle}
            input={<SliderWork
              marks={marksSlider(formsData.workInput)}
              onChange={this.handleSliderChange}
              defaultValue={this.state.workInput}
            />}
            />
          <FormSection
            titleValue={formsData.weightTitle}
            input={<DropDown
              dropDownInput={formsData.weightInput}
              onChange={this.handleInputChangeDropdown}
              value={this.state.dropDownInput}
            />}
          />
          <FormSection
            titleValue={formsData.forageTitle}
            input={<CheckBox
              checkBoxInput={formsData.forageInput}
              onChange={this.handleInputChangeCheckbox}
              checked={this.state.checkBoxInput}
            />}
          />
          <ResultSection
            selectedCheckboxes={this.selectedCheckboxesArr()}
            weightValue = {this.state.dropDownInput}
            workValue={this.state.workInput}
          />
        </div>
      </div>
    )
  }
}

export default App;
