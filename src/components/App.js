import React, { Component } from 'react';
import logo from '../logo.svg';
// import '../App.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Section from './Section';

class App extends Component {

  render() {
    const titleOne = 'Waga konia';
    const titleTwo = 'Wybierz rodzaj paszy';
    const titleThree = 'Wybierz poziom pracy swojego konia';

    return (
      <div className="App">
      <Section
      titleValue={titleOne}
      />
      <Section
      titleValue={titleTwo}
      />
      <Section
      titleValue={titleThree}
      />
      </div>
    )
  }
}
//   render() {
//    const style = { width: 400, margin: 50 };
//    const marks = {
//       0: <strong>Brak pracy</strong>,
//       33: <strong>Lekka praca</strong>,
//       66: <strong>Średnia prca</strong>,
//       100: {
//         style: {
//           color: 'red',
//         },
//         label: <strong>Cięzka praca</strong>,
//       },
//     };
  
//     return (
//       <div className="App">
//         <form>
//           <p>
//             <label>Horse Weight:</label>
//             <br/>
//             <select>
//               <option>400kg</option>
//               <option>500kg</option>
//               <option>600kg</option>
//               <option>700kg</option>
//               <option>800kg</option>
//             </select>
//           </p>
         
//             <label>Choose type of forage:</label>
//             <br/>
//             <p>
//               <label>Ziarna:</label>
//               <br/>
//               <label>
//                 <input type="checkbox"/>
//                 Owies
//               </label>
//               <br/>
//               <label>
//                 <input type="checkbox"/>
//                 Jęczmień
//               </label>
//            </p>
//            <p>
//               <label>Pasze pochodzenia rolślinnego:</label>
//               <br/>
//               <label>
//                 <input type="checkbox"/>
//                 Wysłodki buraczane
//               </label>
//               <br/>
//               <label>
//                 <input type="checkbox"/>
//                 Drozdze Pastewne
//               </label>
//            </p>
//            <div style={style}>
//             <p>Wybierz poziom pracy swojego konia</p>
//             <Slider min={0} marks={marks} step={null} included={false} defaultValue={20} />
//           </div>
//         </form>
//       </div>
      
//     );
//   }
// }

export default App;
