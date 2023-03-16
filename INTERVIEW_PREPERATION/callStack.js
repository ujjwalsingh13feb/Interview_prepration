// In computer science, a call stack is a data structure used by programs
//  to keep track of the sequence of function calls made during the execution
//   of a program.



function addNumbers(a, b) {
    return a + b;
  }
  
  function multiplyNumbers(a, b) {
    return a * b;
  }
  
  function calculateResult(a, b, c) {
    const sum = addNumbers(a, b);
    const product = multiplyNumbers(sum, c);
    return product;
  }
  
  calculateResult(2, 3, 4);
  