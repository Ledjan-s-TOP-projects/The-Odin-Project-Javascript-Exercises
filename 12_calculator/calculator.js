const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, curr) => {
    return (acc *= curr);
  }, 1);
};

const power = function (num, expo) {
  return num ** expo;
};

const factorial = function (num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
