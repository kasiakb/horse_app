import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Section from './Section';
import DropDown from './DropDown';
import CheckBox from './CheckBox';
import SliderWork from './SliderWork';

class App extends Component {

  weight = { 
    title: 'Waga konia',
    input: 
      <DropDown
        dropDownInput={['400kg', '500kg', '600kg', '700kg', '800kg']}
      />,
  };

  forage = {
    title: 'Wybierz paszę, którą chcesz karmić swojego konia',
    input: 
      <CheckBox
        checkBoxInput={['Owies', 'Jęczmień', 'Wysłodki buraczane', 'Drozdze pastewne']}
        />,
  };

  work = { 
    title: 'Wybierz poziom pracy swojego konia',
    input: 
      <SliderWork
        workInput={['Brak pracy', 'Lekka praca', 'Średnia prca', 'Cięzka praca']}
      />,
  };

  render() {
    return (
      <div className="App">
        <Section
          titleValue={this.weight.title}
          input={this.weight.input}
        />
        <Section
          titleValue={this.forage.title}
          input={this.forage.input}
        />
        <Section
          titleValue={this.work.title}
          input={this.work.input}
        />
      </div>
    )
  }
}

export default App;
