// import _ from 'lodash'
// import math from 'mathjs'
// import {
//   nutritionStandards,
//   forageStandards,
//   columnVector,
//   matrix,
//   transformArr,
//   removeElements,
//   matrixForm,
//   equations,
//   solveEquations,
//   averageOfResults
// } from '../components/ResultCalculation-functions'

// test('find proper nutrition standards after selected level of work and weight',() =>{
//   const name = "Brak pracy"
//   const weight = "400kg"
//   const fakeObject = [
//     {
//       "name": "Brak pracy", 
//       "weight": "400kg", 
//       "Sucha masa": 8.0,
//       "Jednostki owsiane": 4.0,
//       "Energia strawna": 50,
//       "Biako": 300,
//     },
//     {
//       "name": "Brak pracy", 
//       "weight": "500kg", 
//       "Sucha masa": 10.0,
//       "Jednostki owsiane": 5.0,
//       "Energia strawna": 63,
//       "Biako": 371,
//     }
//   ]
    
//   const fakeResult = nutritionStandards(name, weight, fakeObject)
//   expect(fakeResult).toEqual(
//    [
//       {
//         "name": "Brak pracy", 
//         "weight": "400kg", 
//         "Sucha masa": 8.0,
//         "Jednostki owsiane": 4.0,
//         "Energia strawna": 50,
//         "Biako": 300,
//       }
//     ]
//   )
// })

// test('return object wiht selected forage standards', () => {
//   const fakeselectedForage =  ["Owies", "Jęczmień"]
//   const fakeforageStandards = [
//     {
//       "name": "Owies",
//       "Sucha masa": 0.882,
//       "Jednostki owsiane": 1,
//       "Energia strawna": 11.3,
//       "Biako": 0.093,
//     },
//     {
//       "name": "Jęczmień",
//       "Sucha masa": 0.864,
//       "Jednostki owsiane": 0.41,
//       "Energia strawna": 7.4,
//       "Biako": 0.046,
//     },
//     {
//       "name": "Drozdze pastewn",
//       "Sucha masa": 10,
//       "Jednostki owsiane": 4.0,
//       "Energia strawna": 50,
//       "Biako": 300,
//     }
//   ]
  
//   const fakeResult = forageStandards(fakeselectedForage, fakeforageStandards)
//   expect(fakeResult).toEqual(
//     [
//       [
//         {
//         "name": "Owies",
//         "Sucha masa": 0.882,
//         "Jednostki owsiane": 1,
//         "Energia strawna": 11.3,
//         "Biako": 0.093,
//         }
//       ],
//       [
//         {
//         "name": "Jęczmień",
//         "Sucha masa": 0.864,
//         "Jednostki owsiane": 0.41,
//         "Energia strawna": 7.4,
//         "Biako": 0.046,
//         }
//       ]
//     ]
//   )
// })

// test('change array with objects into array with objects values(1)', () => {
//   const fakeObject = [
//     {
//       "name": "Brak pracy", 
//       "weight": "400kg", 
//       "Sucha masa": 8.0,
//       "Jednostki owsiane": 4.0,
//       "Energia strawna": 50,
//       "Biako": 300,
//     }
//   ]
  
//   const fakeResult = transformArr(fakeObject)
//   expect(fakeResult).toEqual(
//     [["Brak pracy", "400kg", 8, 4, 50, 300]]
//   )
// })

// test ('change array with objects into array with objects values(2)', () => {
//   const fakeObject = [
//     [
//       {
//         "name": "Owies",
//         "Sucha masa": 0.882,
//         "Jednostki owsiane": 1,
//         "Energia strawna": 11.3,
//         "Biako": 0.093,
//       }
//     ],
//     [
//       {
//         "name": "Jęczmień",
//         "Sucha masa": 0.864,
//         "Jednostki owsiane": 0.41,
//         "Energia strawna": 7.4,
//         "Biako": 0.046,
//       }
//     ]
//   ]

//   const fakeResult = transformArr(fakeObject)
//   expect(fakeResult).toEqual(
//     [["Owies", 0.882, 1, 11.3, 0.093], ["Jęczmień", 0.864, 0.41, 7.4, 0.046]]
//   )
// })

// test ('leave only last 4 elements in each small array(1)', () =>{
//   const fakeArray = [["Owies", 0.882, 1, 11.3, 0.093], ["Jęczmień", 0.864, 0.41, 7.4, 0.046]]
//   const fakeResult = removeElements(fakeArray)
//   expect(fakeResult).toEqual(
//     [[0.882, 1, 11.3, 0.093], [0.864, 0.41, 7.4, 0.046]]
//   )
// })

// test ('leave only last 4 elements in each small array(2)', () =>{
//   const fakeArray = [["Brak pracy", "400kg", 8, 4, 50, 300]]
//   const fakeResult = removeElements(fakeArray)
//   expect(fakeResult).toEqual(
//     [[8, 4, 50, 300]]
//   )
// })

// test('change array into matrix form(1)', () => {
//   const fakeArray = [["Owies", 0.882, 1, 11.3, 0.093], ["Jęczmień", 0.864, 0.41, 7.4, 0.046]]
//   const fakeResult = matrixForm(fakeArray)
//   expect(fakeResult).toEqual(
//     [["Owies", 0.882, 1, 11.3, 0.093], ["Jęczmień", 0.864, 0.41, 7.4, 0.046]]
//   )
// })

// test('change array into matrix form(2)', () => {
//   const fakeArray = [["Brak pracy", "400kg", 8, 4, 50, 300]]
//   const fakeResult = matrixForm(fakeArray)
//   expect(fakeResult).toEqual(
//     ["Brak pracy", "400kg", 8, 4, 50, 300]
//   )
// })

// test( 'equation for selected checkboxes(1)', () => {
//   var fakeMatrix = [[0, 3, 5, 9], [2, 5, 13, 8]]
//   const fakeVector = [0, 13, 9, 4]
//   // const math = require('mathjs');
//   const fakeResult = equations(fakeMatrix, fakeVector)
//   expect(fakeResult).toEqual(
//     [
//       [
//         [[0, 2], [3, 5]],
//         [[5, 13], [9, 8]],
//         [[0, 2], [5, 13]],
//         [[0, 2], [9, 8]],
//         [[3, 5], [9, 8]],
//         [[3, 5], [5, 13]]
//       ],
//       [
//         [0, 13], [9, 4], [0, 9], [0, 4], [13, 4], [13, 9]
//       ]
//     ]
//   )
// })

// test( 'equation for selected checkboxes(2)', () => {
//   var fakeMatrix = [[0, 3, 5, 9], [2, 5, 13, 8], [0, 3, 5, 9]]
//   const fakeVector = [0, 13, 9, 4]
//   // const math = require('mathjs');
//   const fakeResult = equations(fakeMatrix, fakeVector)
//   expect(fakeResult).toEqual(
//     [
//       [[[0, 2, 0], [3, 5, 3], [5, 13, 5]],
//       [[3, 5, 3], [5, 13, 5], [9, 8, 9]],
//       [[5, 13, 5], [9, 8, 9], [0, 2, 0]],
//       [[0, 2, 0], [3, 5, 3], [9, 8, 9]]],
//       [[0, 13, 9], [13, 9, 4], [9, 4, 0], [0, 13, 4]]]
//   )
// })

// test( 'equation for selected checkboxes(3)', () => {
//   var fakeMatrix = [[0, 3, 5, 9], [2, 5, 13, 8], [0, 3, 5, 9], [0, 3, 5, 9]]
//   const fakeVector = [0, 13, 9, 4]
  
//   const fakeResult = equations(fakeMatrix, fakeVector)
//   expect(fakeResult).toEqual(
//     [
//       [[0, 2, 0, 0], [3, 5, 3, 3], [5, 13, 5, 5], [9, 8, 9, 9]],
//       [0, 13, 9, 4]
//     ]
//   )
// })

// test( 'solve equations for 4 checkboxes', () => {
//   // const math = require('mathjs');
//   const arr = 
//   [
//     [[4, 2, 6, 7.5], [2, 5, 8, 10], [7, 13, 9.5, 18], [11, 8, 13.5, 6]],
//     [1, 13, 9, 4]
//   ]
//   const fakeResult = solveEquations(arr)
//   expect(fakeResult).toEqual(
//     [[[-2.71325470867805], [1.1239218447456434], [1.9735961978524912], [-0.2981869389192045]]]
//   )
// })

// test( 'solve equations for 3 checkboxes', () => {
//   // const math = require('mathjs');
//   const arr = 
//     [
//       [
//         [[9.8, 2, 6], [10, 5, 3], [5, 13, 5]], 
//         [[3, 5, 8], [5, 13, 5], [9, 8, 9]], 
//         [[67, 13, 5], [9, 8, 2], [4, 2, 9]], 
//         [[4, 2, 6.5], [1.4, 5, 3], [9, 8, 9]]
//       ], 
//         [[9.8, 13, 9], [13, 9, 4], [9, 4, 5.6], [3.2, 13, 4]]
//     ]
//   const fakeResult = solveEquations(arr)
//   expect(fakeResult).toEqual(
//     [
//       [[1.2554399243140966], [0.42431409649952706], [-0.5586565752128669]],
//       [[-2.2233766233766232], [0.7922077922077922], [1.9636363636363634]],
//       [[0.029855810008481778], [0.3326547921967769], [0.5350296861747244]],
//       [[-3.7717492984097287], [2.4136576239476146], [2.0707202993451825]]]
//   )
// })

// test( 'solve equations for 2 checkboxes', () => {
//   // const math = require('mathjs');
//   const arr = 
//   [
//     [
//       [[0, 2], [3, 5]],
//       [[5, 13], [9, 8]],
//       [[0, 2], [5, 13]],
//       [[0, 2], [9, 8]],
//       [[3, 5], [9, 8]],
//       [[3, 5], [5, 13]]
//     ],
//     [
//       [0, 13], [9, 4], [0, 9], [0, 4], [13, 4], [13, 9]
//     ]
//   ]
//   const fakeResult = solveEquations(arr)
//   expect(fakeResult).toEqual(
//     [
//       [[4.333333333333333], [0]], 
//       [[-0.25974025974025977], [0.7922077922077922]],
//       [[1.8], [0]],
//       [[0.4444444444444444], [0]],
//       [[-3.999999999999999], [4.999999999999999]],
//       [[8.857142857142858], [-2.714285714285715]]]
//   )
// })

// test('averge of results', () => {
//   // const math = require('mathjs');
//   const fakeArrey = [[1, 2, 3], [4, 6, 1]]
//   const fakeResult = averageOfResults(fakeArrey)
//   expect(fakeResult).toEqual(
//     [2.5, 4, 2]
//   )
// })