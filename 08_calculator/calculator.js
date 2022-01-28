const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let sumArray = 0;
  for (let i = 0; i < array.length; sumArray += array[i++])  {
  }
  return sumArray;
};

const multiply = function(num) {
  let multiplySum = 1;
  for (let i = 0; i < num.length; multiplySum *= num[i++]) {
  }
  return multiplySum;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let sum = 1;
	for (; a >= 1; a--) {
    sum = sum * a;
  }
  return sum;
};


console.log(multiply([1,2,3,4,5,6,7,89,6]));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
