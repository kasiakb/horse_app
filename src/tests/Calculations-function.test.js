import _ from 'lodash'
import math from 'mathjs'
import {
  nutritionStandards,
  forageStandards,
  columnVector,
  matrix,
  transformArr,
  removeElements,
  matrixForm,
  dataForSmallSliders,
  onlyHay
} from '../components/Calculations-functions'

test('find proper nutrition standards after selected level of work and weight',() =>{
  const name = "Brak pracy"
  const weight = "400kg"
  const fakeObject = [
    {
      "name": "Brak pracy", 
      "weight": "400kg", 
      "Sucha masa": 8.0,
      "Jednostki owsiane": 4.0,
      "Energia strawna": 50,
      "Biako": 300,
    },
    {
      "name": "Brak pracy", 
      "weight": "500kg", 
      "Sucha masa": 10.0,
      "Jednostki owsiane": 5.0,
      "Energia strawna": 63,
      "Biako": 371,
    }
  ]
    
  const fakeResult = nutritionStandards(name, weight, fakeObject)
  expect(fakeResult).toEqual(
   [
      {
        "name": "Brak pracy", 
        "weight": "400kg", 
        "Sucha masa": 8.0,
        "Jednostki owsiane": 4.0,
        "Energia strawna": 50,
        "Biako": 300,
      }
    ]
  )
})

test('return object wiht selected forage standards', () => {
  const fakeselectedForage =  ["Owies", "Jęczmień"]
  const fakeforageStandards = [
    {
      "name": "Owies",
      "Sucha masa": 0.882,
      "Jednostki owsiane": 1,
      "Energia strawna": 11.3,
      "Biako": 0.093,
    },
    {
      "name": "Jęczmień",
      "Sucha masa": 0.864,
      "Jednostki owsiane": 0.41,
      "Energia strawna": 7.4,
      "Biako": 0.046,
    },
    {
      "name": "Drozdze pastewn",
      "Sucha masa": 10,
      "Jednostki owsiane": 4.0,
      "Energia strawna": 50,
      "Biako": 300,
    }
  ]
  
  const fakeResult = forageStandards(fakeselectedForage, fakeforageStandards)
  expect(fakeResult).toEqual(
    [
      [
        {
        "name": "Owies",
        "Sucha masa": 0.882,
        "Jednostki owsiane": 1,
        "Energia strawna": 11.3,
        "Biako": 0.093,
        }
      ],
      [
        {
        "name": "Jęczmień",
        "Sucha masa": 0.864,
        "Jednostki owsiane": 0.41,
        "Energia strawna": 7.4,
        "Biako": 0.046,
        }
      ]
    ]
  )
})

test('change array with objects into array with objects values(1)', () => {
  const fakeObject = [
    {
      "name": "Brak pracy", 
      "weight": "400kg", 
      "Sucha masa": 8.0,
      "Jednostki owsiane": 4.0,
      "Energia strawna": 50,
      "Biako": 300,
    }
  ]
  
  const fakeResult = transformArr(fakeObject)
  expect(fakeResult).toEqual(
    [["Brak pracy", "400kg", 8, 4, 50, 300]]
  )
})

test ('change array with objects into array with objects values(2)', () => {
  const fakeObject = [
    [
      {
        "name": "Owies",
        "Sucha masa": 0.882,
        "Jednostki owsiane": 1,
        "Energia strawna": 11.3,
        "Biako": 0.093,
      }
    ],
    [
      {
        "name": "Jęczmień",
        "Sucha masa": 0.864,
        "Jednostki owsiane": 0.41,
        "Energia strawna": 7.4,
        "Biako": 0.046,
      }
    ]
  ]

  const fakeResult = transformArr(fakeObject)
  expect(fakeResult).toEqual(
    [["Owies", 0.882, 1, 11.3, 0.093], ["Jęczmień", 0.864, 0.41, 7.4, 0.046]]
  )
})

test ('leave only last 4 elements in each small array(1)', () =>{
  const fakeArray = [["Owies", 0.882, 1, 11.3, 0.093], ["Jęczmień", 0.864, 0.41, 7.4, 0.046]]
  const fakeResult = removeElements(fakeArray)
  expect(fakeResult).toEqual(
    [[0.882, 1, 11.3, 0.093], [0.864, 0.41, 7.4, 0.046]]
  )
})

test ('leave only last 4 elements in each small array(2)', () =>{
  const fakeArray = [["Brak pracy", "400kg", 8, 4, 50, 300]]
  const fakeResult = removeElements(fakeArray)
  expect(fakeResult).toEqual(
    [[8, 4, 50, 300]]
  )
})

test('change array into matrix form(1)', () => {
  const fakeArray = [["Owies", 0.882, 1, 11.3, 0.093], ["Jęczmień", 0.864, 0.41, 7.4, 0.046]]
  const fakeResult = matrixForm(fakeArray)
  expect(fakeResult).toEqual(
    [["Owies", 0.882, 1, 11.3, 0.093], ["Jęczmień", 0.864, 0.41, 7.4, 0.046]]
  )
})

test('change array into matrix form(2)', () => {
  const fakeArray = [["Brak pracy", "400kg", 8, 4, 50, 300]]
  const fakeResult = matrixForm(fakeArray)
  expect(fakeResult).toEqual(
    ["Brak pracy", "400kg", 8, 4, 50, 300]
  )
})

test('create array with date for small sliders(1)', () => {
  const fakeMatrix = [[0.859, 0.49, 7.9, 0.073], [0.892, 1.29, 15.5, 0.422], [0.882, 1, 11.3, 0.093], [0.864, 0.41, 7.4, 0.046]]
  const fakeVector = [11.1, 8.4, 105, 0.63]
  const fakeHorseWeight = ["600kg"]
  const fakeCheckboxes = ["Siano", "Drozdze pastewne", "Owies", "Jęczmień"]
  const fakeResult = dataForSmallSliders(fakeMatrix, fakeVector, fakeHorseWeight, fakeCheckboxes)
  expect(fakeResult).toEqual(
    [
      ["Siano", 13.291139240506329, 12], 
      ["Drozdze pastewne", 0.6580645161290315, 0.29824561403508737], 
      ["Owies", 0.9026548672566361, 0.29824561403508737], 
      ["Jęczmień", 1.3783783783783767, 0.29824561403508737]
    ]
  )
})

test('create array with date for small sliders(2)', () => {
  const fakeMatrix = [0.859, 0.49, 7.9, 0.073]
  const fakeVector = [11.1, 8.4, 105, 0.63]
  const fakeHorseWeight = ["600kg"]
  const fakeCheckboxes = ["Siano"]
  const fakeResult = dataForSmallSliders(fakeMatrix, fakeVector, fakeHorseWeight, fakeCheckboxes)
  expect(fakeResult).toEqual([["Siano", 13.291139240506329, 12]])
})
