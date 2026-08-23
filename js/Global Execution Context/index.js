//! 1
// console.log(a);
// var a = 10; // Output: undefined  // here first set all the variable in the memory as undefined and then it read all code from top to bottom , we are declaring a after the console that why in the console we get undefined because the variable is hoisted to the top of the scope but not the value assigned to it.

//! 2
// a = 10;
// console.log(a);  // Output: 10  // after storing the variable when it read the code from first line it find the variable a and assign the value to it and then print it in the console.
// var a= 20;

//! 3
// a = 10;
// console.log(`The value of first a is: ${a}`); // Output: 10  // here we are not declaring the variable a with var keyword so it will be treated as a global variable and it will be stored in the memory and then it will print the value of a in the console.
// var a = 20; // here we are declaring the variable a with var keyword so it will be treated as a local variable and it will be stored in the memory and then it will print the value of a in the console.
// console.log(`The value of second a is: ${a}`); // Output: 20  // here we are printing the value of a in the console after declaring it with var keyword so it will print the value of a which is 20.

//! 4  // when we create function it store the whole function in the memory and then it will execute the code from top to bottom and when it find the function call it will execute the function and then it will continue to execute the code from where it left off.
// console.log("Global execution context Started");
// var a = 10;
// console.log(`The value of a is: ${a}`);
// globalExecutionContext();
// console.log("Global execution context Ended");
// function globalExecutionContext() {
//   console.log("Inside Global execution context function");
// }

// /Global execution context Started
// /The value of a is: 10
// /Inside Global execution context function
// /Global execution context Ended

//! 5 when we use setTimeout function it will  render after the whole code is executed and then it will execute the setTimeout function after the specified time in milliseconds. In this case we have given 0 milliseconds so it will execute the setTimeout function after the whole code is executed.
// console.log("Script Start");
// setTimeout(function () {
//   console.log("Inside setTimeout");
// }, 0);
// console.log("Script End");
// console.log("Script End");
// console.log("Script End");
// console.log("Script End");
// console.log("Script End");
// console.log("Script End");
// console.log("Script End");
// console.log("Script End");
// console.log("Script End");
// console.log("Script End");

//! 6 var , let and const all those are hosted but the difference is that var is hoisted to the top of the scope and it can be accessed before it is declared but let and const are hoisted to the top of the block scope and they cannot be accessed before they are declared. If we try to access let and const before they are declared we will get a ReferenceError.
