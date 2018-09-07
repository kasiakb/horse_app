
import {
  marksSlider,
  selectedCheckboxes,
  resulSectionTitle
} from '../components/App-functions';


  test(' marksSlider return object with value for each level of work 1', () => {
    const startWorkInput = [
      "Brak pracy", 
      "Lekka praca", 
      "Średnia praca", 
      "Cięzka praca",
    ]
    const finWorkInput = marksSlider(startWorkInput)
    expect(finWorkInput).toEqual(
      {0: "Brak pracy", 33.333333333333336: "Lekka praca", 66.66666666666667: "Średnia praca", 100: "Cięzka praca"}
    )
  })

  test(' marksSlider return object with value for each level of work 2', () => {
    const startWorkInput = [
      "Brak pracy", 
      "Lekka praca", 
      "Średnia praca"
    ]
    const finWorkInput = marksSlider(startWorkInput)
    expect(finWorkInput).toEqual(
      {0: "Brak pracy", 50: "Lekka praca", 100: "Średnia praca"}
    )
  })

  test(' marksSlider return object with value for each level of work 3', () => {
    const startWorkInput = ['1', '2', '3', '4','5', '6', '7', '8', '9', '10', '11']
    const finWorkInput = marksSlider(startWorkInput)
    expect(finWorkInput).toEqual(
      {"0": "1", "10": "2", "100": "11", "20": "3", "30": "4", "40": "5", "50": "6", "60": "7", "70": "8", "80": "9", "90": "10"}
    )
  })

  test('add or delete checkboxe name from object with names of clicked checkboxes 1', () => {
    const startCheckboxes= new Set (["Wysłodki buraczane", "Jęczmień", "Owies"])
    const name = "Owies"
    const finCheckboxes = selectedCheckboxes(startCheckboxes, name)
    expect(finCheckboxes).toEqual(
      new Set (["Wysłodki buraczane", "Jęczmień"])
    )
  })

  test('add or delete checkboxe name from object with names of clicked checkboxes 2', () => {
    const startCheckboxes= new Set (["Wysłodki buraczane", "Jęczmień"])
    const name = "Owies"
    const finCheckboxes = selectedCheckboxes(startCheckboxes, name)
    expect(finCheckboxes).toEqual(
      new Set (["Wysłodki buraczane", "Jęczmień", "Owies"])
    )
  })

  test(' show title of result section after clicked any checkboks 1', () => {
    const startCheckboxes= ["Wysłodki buraczane", "Jęczmień", "Owies"]
    const title = ["Program zywienia Twojego konia"]
    const finWorkInput = resulSectionTitle(startCheckboxes, title)
    expect(finWorkInput).toEqual(
      ["Program zywienia Twojego konia"]
    )
  })

  test(' show title of result section after clicked any checkboks 2', () => {
    const startCheckboxes= []
    const title = ["Program zywienia Twojego konia"]
    const finWorkInput = resulSectionTitle(startCheckboxes, title)
    expect(finWorkInput).toBeNull()
  })



 
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
