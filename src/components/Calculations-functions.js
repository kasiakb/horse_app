import _ from 'lodash'
import math from 'mathjs'

export function nutritionStandards(workValue, weightValue, nutritionStandards) {
  const hasValue =
    _.curry((name, weight, obj) => (obj.name === name) && (obj.weight === weight))
    
  const findObject = 
    nutritionStandards.filter(hasValue(workValue, weightValue))

  return findObject
}

export function forageStandards(selectedForage, forageStandards) {
  const hasValue =
    _.curry((name, obj) => (obj.name === name))
    
  const newObject = 
  selectedForage.reduce((add, forage) => {
    add.push(forageStandards.filter(hasValue(forage)))
      return add
  }
  , [])

return newObject
}

export function transformArr(newObject) {
  const removeArr = newObject.reduce((acc, val) => acc.concat(val), [])
  const objVal = removeArr.reduce((smallArr, bigArr) => {
    smallArr.push(Object.values(bigArr))
      return smallArr
    }
    , [])
  return objVal
 }

 export function removeElements(objVal) {
   const onlyNumbers = objVal.reduce((smallArr, bigArr) => {
    smallArr.push(bigArr.splice(-4))
    return smallArr
   }
    , [])
  return onlyNumbers
 }

export function matrixForm(onlyNumbers) {
  let matrix
  if (onlyNumbers.length === 1) {
    matrix = onlyNumbers.reduce((acc, val) => acc.concat(val), [])
  }else{
    matrix = onlyNumbers
  }
return matrix
}

export function energyEquation(matrix, vector, horseWeight, selectedCheckboxes) {  
  const transposedMatrix = [...math.transpose(matrix)]
  const transposedVector = [...math.transpose(vector)]
    let energyEquationFactor
    if (selectedCheckboxes.length === 1) {
      energyEquationFactor = [transposedMatrix[2]]
    }else{
      energyEquationFactor = transposedMatrix[2]
    }
  const energyEquationResult = transposedVector[2]
  const weightOfHay = parseInt(horseWeight)*0.02
  const totalEnergyWithoutHayEnergy = energyEquationResult - (weightOfHay*energyEquationFactor.slice(0, 1))
  const newEnergyEquationFactors = energyEquationFactor.slice(1)
  const arrayWithMarks = newEnergyEquationFactors.reduce((newArr, currArr) => {
    newArr.push(totalEnergyWithoutHayEnergy/currArr)
    return newArr
  }
  , [])
  const copy = [...arrayWithMarks]
  const finalArrayWithMarks = copy.unshift(energyEquationResult/energyEquationFactor.slice(0, 1))
  const sumOfFactors = newEnergyEquationFactors.reduce((acc, curr) => acc+curr, 0)
  const defoultValueForSliders = totalEnergyWithoutHayEnergy/sumOfFactors
  const combineArrays = _.zip(selectedCheckboxes, copy)
  const dataForSliders = combineArrays.reduce((acc, curr, i) => {
    if (i===0) {
      acc.push(curr.concat(weightOfHay))
    }else{
    acc.push(curr.concat(defoultValueForSliders))
    }
  return acc
  }, [])
  
return dataForSliders
}


