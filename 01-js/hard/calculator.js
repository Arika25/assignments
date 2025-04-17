/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result) {
    this.result = 0;
  }
  clear() {
    this.result=0
  }
  getResult() {
    return this.result
  }
  calculate(expression) {
    if (expression.replace(/\s/g, '').indexOf( '/0')>=0) {
      throw new Error("Division by zero is not allowed");
    }
    else {
      this.result=eval(expression);
  }
}
  add(a) {
    this.result=this.result+a;
  }
  subtract(a) {
    this.result=this.result-a;
  }
  multiply(a) {
    this.result=this.result*a;
  }
  multiply(a) {
    this.result=this.result*a;
  }
  divide(a) {
    if(a==0) {
    throw new Error("Division by zero is not allowed");
  }
  else {
  this.result = this.result/a;
  }
  }
  }


// let calculation = new Calculator();
// calculation.add(5);
// console.log(calculation.getResult());
module.exports = Calculator;
