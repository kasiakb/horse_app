import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import { mount } from 'enzyme';
import 'rc-slider/assets/index.css';
import { keys } from '../components/App'
// import renderer from 'react-test-renderer';


  test(' keys return array with numbers', () => {
    const startWorkInput = [
      "Brak pracy", 
      "Lekka praca", 
      "Średnia praca", 
      "Cięzka praca",
    ]

    const app = new App
    const finWorkInput = app.keys(startWorkInput)
    expect(finWorkInput).toEqual(
      [0, 33.333333333333336, 66.66666666666667, 100]
    )
  })

  test(' keys return array with numbers', () => {
    const startWorkInput = [
      "Brak pracy", 
      "Lekka praca", 
      "Średnia praca"
    ]

    const app = new App
    const finWorkInput = app.keys(startWorkInput)
    expect(finWorkInput).toEqual(
      [0, 50, 100]
    )
  })

  test(' keys return array with numbers', () => {
    const startWorkInput = ['1', '2', '3', '4','5', '6', '7', '8', '9', '10', '11']

    const app = new App
    const finWorkInput = app.keys(startWorkInput)
    expect(finWorkInput).toEqual(
      [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    )
  })

 
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
