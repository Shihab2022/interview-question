// console.log(a);
// var a = 10; // undefined comes

// console.log(a);
// let a = 10; // ReferenceError: Cannot access 'a' before initialization

// console.log(a);
// const a = 10; // ReferenceError: Cannot access 'a' before initialization

console.log(hi());

// function hi() {
//   return "Hello";  // Hello
// }

const hi = () => {
  return "Hello"; // ReferenceError: Cannot access 'hi' before initialization
};
