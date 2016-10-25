// load math.js
var math = require('./math.js');

console.log('create a matrix');
var p = math.matrix([[1, 0, 0, 0] , [0.5, 0, 0.5, 0], [0, 0.5, 0, 0.5],[0, 0, 0, 1]]);
var initial = math.matrix([[0, 1, 0, 0]]);
print(p);

// the matrix can be retrieved using valueOf()
console.log('calculate probability');
//var array = p.valueOf();
//var new_array = math.pow(p,10);
print (math.multiply(initial,math.pow(p,50)));

function print (value) {
  var precision = 3;
  console.log(math.format(value, precision));
  //console.log(value._data);   
}
