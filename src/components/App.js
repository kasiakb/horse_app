import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Section from './Section';
import DropDown from './DropDown';
import CheckBox from './CheckBox';
import SliderWork from './SliderWork';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownInput: '400 kg',
      checkBoxInput: false,
      workInput: 66,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    // this.forms.weight = this.forms.weight.bind(this);

    this.forms = {
      weight: { 
        title: 'Waga konia',
        input: 
          <DropDown
            dropDownInput={['400kg', '500kg', '600kg', '700kg', '800kg']}
            onChange={this.handleInputChange}
            value={this.state.dropDownInput}
          />,
      },
      forage: {
        title: 'Wybierz paszę, którą chcesz karmić swojego konia',
        input: 
          <CheckBox
            checkBoxInput={['Owies', 'Jęczmień', 'Wysłodki buraczane', 'Drozdze pastewne']}
            onChange={this.handleInputChange}
            checked={this.state.checkBoxInpu}
          />,
      },
      work: { 
        title: 'Wybierz poziom pracy swojego konia',
        input: 
          <SliderWork
            workInput={['Brak pracy', 'Lekka praca', 'Średnia prca', 'Cięzka praca']}
            onChange={this.handleSliderChange}
            defaultValue={this.state.workInput}
          />,
      },
    }
  }
  

  handleSliderChange(defaultValue) {
    console.log(defaultValue)
  
    this.setState({
      workInput: defaultValue,
    })
  }
    
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // console.log(value)
  

    this.setState({
      [name]: value
    });
  }

  render() {

    return (
      <div className="App">
        <Section
          titleValue={this.forms.weight.title}
          input={this.forms.weight.input}
        />
        <Section
          titleValue={this.forms.forage.title}
          input={this.forms.forage.input}
        />
        <Section
          titleValue={this.forms.work.title}
          input={this.forms.work.input}
        />
      </div>
    )
  }
}

export default App;
