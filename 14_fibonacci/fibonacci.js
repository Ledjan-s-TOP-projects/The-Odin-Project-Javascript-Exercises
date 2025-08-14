const fibonacci = function (num) {
  const number = Number(num);

  //Handle edge cases
  if (number < 0) return "OOPS";
  if (number === 0) return 0;
  if (number === 1 || number === 2) return 1;

  //Initial first two Fibonacci numbers
  let prevPrev = 1;
  let prev = 1;
  let current;

  //Computer Fibonacci sequence iteratively
  for (let i = 3; i <= number; i++) {
    // current Fibonacci number = sum of previous two
    current = prevPrev + prev;
    prevPrev = prev;
    prev = current;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
