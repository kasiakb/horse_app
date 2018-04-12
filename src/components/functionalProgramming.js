
export function equation() {
  var math = require('mathjs');
  var a1 = [[0, 0.41], [0.882, 0.864]];
  var b1 = [4, 7];
  var x1 = math.lusolve(a1, b1);
  
  var a2 = [[0.093, 0.046], [11, 7.4]];
  var b2 = [0.3, 50];
  var x2 = math.lusolve(a2, b2);
  return [x1, x2]
}

console.log("x1, x2:", equation())

