// import _ from 'lodash'
// import math from 'mathjs'

// export function nutritionStandards(workValue, weightValue, nutritionStandards) {
//   const hasValue =
//     _.curry((name, weight, obj) => (obj.name === name) && (obj.weight === weight))
    
//   const findObject = 
//     nutritionStandards.filter(hasValue(workValue, weightValue))

//   return findObject
// }

// export function forageStandards(selectedForage, forageStandards) {
//   const hasValue =
//     _.curry((name, obj) => (obj.name === name))
    
//   const newObject = 
//   selectedForage.reduce((add, forage) => {
//     add.push(forageStandards.filter(hasValue(forage)))
//       return add
//   }
//   , [])

// return newObject
// }

// export function transformArr(newObject) {
//   const removeArr = newObject.reduce((acc, val) => acc.concat(val), [])
//   const objVal = removeArr.reduce((smallArr, bigArr) => {
//     smallArr.push(Object.values(bigArr))
//       return smallArr
//     }
//     , [])
//   return objVal
//  }

//  export function removeElements(objVal) {
//    const onlyNumbers = objVal.reduce((smallArr, bigArr) => {
//     smallArr.push(bigArr.splice(-4))
//     return smallArr
//    }
//     , [])
//   return onlyNumbers
//  }

// export function matrixForm(onlyNumbers) {
//   let matrix
//   if (onlyNumbers.length === 1) {
//     matrix = onlyNumbers.reduce((acc, val) => acc.concat(val), [])
//   }else{
//     matrix = onlyNumbers
//   }
// return matrix
// }

// export function equations(matrix, vector) {  
//   const transposedMatrix = [...math.transpose(matrix)]
//   const transposedVector = [...math.transpose(vector)]
//   // const objectProperty = matrix.length
//   const calculationStrategy = {
//     2: (array) => {
//       return [
//         array.slice(0,2),
//         array.slice(2,4),
//         _.concat(array.slice(0,1), array.slice(2,3)),
//         _.concat(array.slice(0,1), array.slice(3,4)),
//         _.concat(array.slice(1,2), array.slice(3,4)),
//         _.concat(array.slice(1,2), array.slice(2,3)),
//       ]
//     },
//     3: (array) => {
//       return [
//         array.slice(0,3),
//         array.slice(1,4),
//         _.concat(array.slice(2,4), array.slice(0,1)),
//         _.concat(array.slice(0,2), array.slice(3,4)),
  
//       ]
//     },
//     4: (array) => {return [...array]},
//   }
//   return [calculationStrategy[matrix.length](transposedMatrix), calculationStrategy[matrix.length](transposedVector)]
// }

// export function solveEquations(equations) {
//   let matrixesInCorrectOrder
//   let vectorsInCorrectOrder
//   if (equations[0][0].length === 4) {
//     matrixesInCorrectOrder = [equations[0]]
//     vectorsInCorrectOrder = [equations[1]]
//   }else{
//     matrixesInCorrectOrder = equations[0]
//     vectorsInCorrectOrder = equations[1]
//   }
//   const result = []
//   for (var i = 0; i < matrixesInCorrectOrder.length; i++) {
//     result.push(math.lusolve(matrixesInCorrectOrder[i], vectorsInCorrectOrder[i]))
//   }
//    return result
// }

// export function averageOfResults(result) {
//   const delateSmallArr = result.reduce((acc, val) => { 
//     acc.push(val.reduce((acc1, val1) => acc1.concat(val1)))
//     return acc
//   }, [])
//   const transposedResult = math.transpose(delateSmallArr)
//   const average = transposedResult.reduce((acc, curr) => {
//     acc.push(curr.reduce((sum, value, _, arr) => sum + value)/curr.length)
//     return acc
//   }, [])
//   return average
// }

// // arr.reduce((acc, val) => { 
// //   acc.push(val.reduce((acc1, val1) => acc1.concat(val1)))
// //   return acc
// // }, [])

