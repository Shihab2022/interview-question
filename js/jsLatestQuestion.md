# JavaScript Core Language & Execution — Viva & Interview Guide

A curated list of core JavaScript execution, scoping, hoisting, and event loop interview questions and answers formatted for GitHub `README.md`.

---

## Table of Contents

1. [Explain hoisting for var, let, const, and function declarations.](#1-explain-hoisting-for-var-let-const-and-function-declarations)
2. [What is the Temporal Dead Zone (TDZ) and why does it exist?](#2-what-is-the-temporal-dead-zone-tdz-and-why-does-it-exist)
3. [How does the JavaScript execution context work?](#3-how-does-the-javascript-execution-context-work)
4. [What is the difference between Call Stack, Task Queue, and Microtask Queue?](#4-what-is-the-difference-between-call-stack-task-queue-and-microtask-queue)
5. [How does the Event Loop prioritize Promises over setTimeout?](#5-how-does-the-event-loop-prioritize-promises-over-settimeout)
6. [Explain lexical scoping with an example.](#6-explain-lexical-scoping-with-an-example)
7. [What happens when you access an undeclared variable vs undefined?](#7-what-happens-when-you-access-an-undeclared-variable-vs-undefined)
8. [What is a closure, and when does it cause memory leaks?](#8-what-is-a-closure-and-when-does-it-cause-memory-leaks)
9. [What is the difference between Function Declarations, Function Expressions, and Anonymous Functions?](#9-what-is-the-difference-between-function-declarations-function-expressions-and-anonymous-functions)
10. [How does the 'this' keyword behave in normal functions, arrow functions, and event handlers?](#10-how-does-the-this-keyword-behave-in-normal-functions-arrow-functions-and-event-handlers)
11. [Explain call, bind, and apply with practical use cases.](#11-explain-call-bind-and-apply-with-practical-use-cases)
12. [What is Currying and why is it useful?](#12-what-is-currying-and-why-is-it-useful)
13. [What is function composition?](#13-what-is-function-composition)
14. [What is an Immediately Invoked Function Expression (IIFE) and why is it used?](#14-what-is-an-immediately-invoked-function-expression-iife-and-why-is-it-used)
15. [What are Pure Functions and why are they important?](#15-what-are-pure-functions-and-why-are-they-important)
16. [What are Higher-Order Functions and Recursive Functions?](#16-what-are-higher-order-functions-and-recursive-functions)
17. [Explain Prototype Chaining in JavaScript.](#17-explain-prototype-chaining-in-javascript)
18. [What is the difference between Object.create() and class-based inheritance?](#18-what-is-the-difference-between-objectcreate-and-class-based-inheritance)
19. [How does JavaScript handle property lookup?](#19-how-does-javascript-handle-property-lookup)
20. [What is the difference between Shallow Copy and Deep Copy?](#20-what-is-the-difference-between-shallow-copy-and-deep-copy)
21. [How does Object.freeze() differ from Object.seal()?](#21-how-does-objectfreeze-differ-from-objectseal)
22. [What are Primitive and Non-Primitive Data Types in JavaScript?](#22-what-are-primitive-and-non-primitive-data-types-in-javascript)
23. [What is the difference between Loose Equality (==) and Strict Equality (===)?](#23-what-is-the-difference-between-loose-equality-and-strict-equality)
24. [What is Destructuring and how does it work in Objects and Arrays?](#24-what-is-destructuring-and-how-does-it-work-in-objects-and-arrays)
25. [How do Unary Operators, Nullish Coalescing (??), and Optional Chaining (?.) work?](#25-how-do-unary-operators-nullish-coalescing-and-optional-chaining-work)
26. [What is Call by Value vs Call by Reference?](#26-what-is-call-by-value-vs-call-by-reference)
27. [What is Mutation and how do you achieve Immutability?](#27-what-is-mutation-and-how-do-you-achieve-immutability)
28. [What are Symbols and what are their real-world use cases?](#28-what-are-symbols-and-what-are-their-real-world-use-cases)
29. [How does Proxy work and when would you use it?](#29-how-does-proxy-work-and-when-would-you-use-it)
30. [What is the difference between for...in and for...of Loops?](#30-what-is-the-difference-between-forin-and-forof-loops)
31. [Essential Array & String Methods (map, forEach, reduce, slice, splice) and Method Chaining.](#31-essential-array--string-methods-and-method-chaining)
32. [Explain Promise states, chaining, .then, .catch, .finally, and .resolve.](#32-explain-promise-states-chaining-then-catch-finally-and-resolve)
33. [What is the difference between async/await and Promises internally?](#33-what-is-the-difference-between-asyncawait-and-promises-internally)
34. [What happens if you don't await an async function?](#34-what-happens-if-you-dont-await-an-async-function)
35. [How would you implement Promise.all() manually?](#35-how-would-you-implement-promiseall-manually)
36. [What is the difference between Promise.all, Promise.allSettled, Promise.race, and Promise.any?](#36-what-is-the-difference-between-promiseall-promiseallsettled-promiserace-and-promiseany)
37. [How do you handle concurrent async requests with limits?](#37-how-do-you-handle-concurrent-async-requests-with-limits)
38. [Explain Callback Hell and modern solutions.](#38-explain-callback-hell-and-modern-solutions)
39. [What is the difference between DOM and BOM Manipulation?](#39-what-is-the-difference-between-dom-and-bom-manipulation)
40. [Explain Event Mechanisms: Bubbling, Capturing, Delegation, stopPropagation, and preventDefault.](#40-explain-event-mechanisms-bubbling-capturing-delegation-stoppropagation-and-preventdefault)
41. [What is the difference between Cookies, Local Storage, and Session Storage?](#41-what-is-the-difference-between-cookies-local-storage-and-session-storage)
42. [How do Location Properties, History Access, and Page Redirection work?](#42-how-do-location-properties-history-access-and-page-redirection-work)
43. [What causes memory leaks in JavaScript and how do you prevent them?](#43-what-causes-memory-leaks-in-javascript-and-how-do-you-prevent-them)
44. [How does Garbage Collection work (Mark-and-Sweep)?](#44-how-does-garbage-collection-work-mark-and-sweep)
45. [What is the difference between Debounce and Throttle?](#45-what-is-the-difference-between-debounce-and-throttle)
46. [How do browsers optimize JavaScript execution (Hidden Classes, Inline Caching)?](#46-how-do-browsers-optimize-javascript-execution-hidden-classes-inline-caching)
47. [When would you use Web Workers?](#47-when-would-you-use-web-workers)
48. [What is the difference between Monolithic vs Modular JS Architecture?](#48-what-is-the-difference-between-monolithic-vs-modular-js-architecture)
49. [Modern ES6+ Features and Template Literals.](#49-modern-es6-features-and-template-literals)
50. [How do Lazy Loading Strategies work for Images and Code Modules?](#50-how-do-lazy-loading-strategies-work-for-images-and-code-modules)

---

### 1. What is hoisting for var, let, const, and function declarations

**Hoisting** is JavaScript's default behavior of allocating memory for variable and function declarations at the top of their containing scope during the **Creation Phase**, before any code is executed.

While all declarations (`var`, `let`, `const`, and `function`) are hoisted, they behave differently in how they are initialized:

```javascript
// 1. var is hoisted and initialized with 'undefined'
console.log(a); // Output: undefined
var a = 10;

// 2. let and const are hoisted but NOT initialized (stay in TDZ)
// console.log(b); // Throws ReferenceError: Cannot access 'b' before initialization
let b = 20;

// 3. Function Declarations are fully hoisted with their body definition
greet(); // Output: "Hello World!"
function greet() {
  console.log("Hello World!");
}

// 4. Function Expressions follow variable hoisting rules
// sayHi(); // Throws TypeError: sayHi is not a function (since sayHi is 'undefined')
var sayHi = function () {
  console.log("Hi!");
};
```

#### Summary Comparison

| Declaration Type                | Hoisted? | Initialized Value  | Accessible Before Line of Declaration? |
| :------------------------------ | :------- | :----------------- | :------------------------------------- |
| **`var`**                       | Yes      | `undefined`        | Yes (returns `undefined`)              |
| **`let`**                       | Yes      | Uninitialized      | No (throws `ReferenceError`)           |
| **`const`**                     | Yes      | Uninitialized      | No (throws `ReferenceError`)           |
| **Function Declaration**        | Yes      | Full Function Body | Yes (invokable)                        |
| **Function Expression (`var`)** | Yes      | `undefined`        | No (throws `TypeError`)                |

**[⬆ Back to Top](#table-of-contents)**

---

### 2. What is the Temporal Dead Zone (TDZ) and why does it exist

The **Temporal Dead Zone (TDZ)** is the specific time frame between entering a scope and reaching the line where a `let` or `const` variable is declared and initialized. Accessing the variable while it is in the TDZ throws a `ReferenceError`.

```javascript
{
  // --- TDZ for variable 'score' starts here ---
  // console.log(score); // Throws ReferenceError: Cannot access 'score' before initialization

  let score = 100; // --- TDZ for 'score' ends here ---
  console.log(score); // Output: 100
}
```

#### Why does the TDZ exist?

1. **Prevents Early Variable Usage:** It forces developers to declare variables before accessing them, catching potential bugs caused by reading `undefined` variables unexpectedly.
2. **Enforces `const` Invariants:** Since `const` variables can never be reassigned, initializing them as `undefined` during hoisting (like `var`) and reassigning them at runtime would violate `const` immutability semantics.

**[⬆ Back to Top](#table-of-contents)**

---

### 3. How does the JavaScript execution context work

An **Execution Context** is an abstract environment created by the JavaScript engine to evaluate and execute code. Everything in JavaScript runs inside an Execution Context.

There are two primary types of execution contexts:

- **Global Execution Context (GEC):** Created by default when the script starts running.
- **Function Execution Context (FEC):** Created whenever a function is invoked.

Every Execution Context is created in **two phases**:

1. **Creation Phase (Memory Allocation):**
   - Creates the `Global` / `window` object (in browser).
   - Sets up the scope chain and binds `this`.
   - Allocates memory for variables (`var` initialized to `undefined`, `let`/`const` left uninitialized) and function declarations (**Hoisting**).

2. **Execution Phase:**
   - Executes code line-by-line.
   - Assigns actual values to variables and invokes functions.

```javascript
var num1 = 10;
var num2 = 20;

function add(a, b) {
  var total = a + b;
  return total;
}

var result = add(num1, num2);
console.log(result); // Output: 30
```

#### Execution Steps:

1. **GEC Creation Phase:** `num1 = undefined`, `num2 = undefined`, `add = fn()`, `result = undefined`.
2. **GEC Execution Phase:** `num1` assigned `10`, `num2` assigned `20`.
3. `add(10, 20)` is called -> A new **FEC** is created and pushed onto the **Call Stack**.
4. **FEC Creation Phase:** Arguments `a = 10`, `b = 20`, variable `total = undefined`.
5. **FEC Execution Phase:** `total = 30` is calculated and returned. FEC is popped off the Call Stack.
6. `result` receives `30` in the GEC.

**[⬆ Back to Top](#table-of-contents)**

---

### 4. What is the difference between Call Stack, Task Queue, and Microtask Queue

JavaScript is single-threaded, meaning it can only execute one command at a time. It manages asynchronous events using three major structures:

```
┌────────────────────────────────────────────────────────┐
│                       CALL STACK                       │
└────────────────────────────────────────────────────────┘
                            │
                 Is Call Stack Empty?
                            │
           ┌────────────────┴────────────────┐
           ▼                                 ▼
┌──────────────────────┐          ┌──────────────────────┐
│   MICROTASK QUEUE    │          │      TASK QUEUE      │
│  (Promises, Async)   │          │ (setTimeout, Events) │
├──────────────────────┤          ├──────────────────────┤
│    HIGH PRIORITY     │          │   NORMAL PRIORITY    │
│ (Drains Completely)  │          │    (One Per Loop)    │
└──────────────────────┘          └──────────────────────┘
```

#### Definitions & Differences

- **Call Stack:** Tracks function execution in a **LIFO** (Last In, First Out) order. Synchronous code runs directly on the stack.
- **Microtask Queue:** A high-priority queue for callbacks generated by `Promises`, `async/await`, `queueMicrotask`, and `MutationObserver`.
- **Task Queue (Macrotask Queue):** A lower-priority queue for callbacks from timer events (`setTimeout`, `setInterval`), I/O operations, and DOM user interactions.

| Feature        | Microtask Queue                                      | Task Queue (Macrotask)                                      |
| :------------- | :--------------------------------------------------- | :---------------------------------------------------------- |
| **Sources**    | `Promise.then/catch/finally`, `queueMicrotask`       | `setTimeout`, `setInterval`, UI events                      |
| **Priority**   | **High** (Runs immediately after Call Stack empties) | **Normal** (Runs after Microtask Queue is completely empty) |
| **Processing** | Drains **all tasks** in the queue during the tick    | Executes **one task** per Event Loop iteration              |

**[⬆ Back to Top](#table-of-contents)**

---

### 5. How does the Event Loop prioritize Promises over setTimeout

The **Event Loop** is a continuously running process that checks whether the **Call Stack** is empty. When the Call Stack clears, it always empties the **Microtask Queue** completely before taking the next item from the **Task Queue** (Macrotask Queue).

Because Promise callbacks enter the Microtask Queue and `setTimeout` callbacks enter the Task Queue, **Promises are always processed before `setTimeout`**, regardless of whether `setTimeout` has a delay of `0` milliseconds.

```javascript
console.log("1: Synchronous Start");

setTimeout(() => {
  console.log("2: setTimeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise Microtask");
});

console.log("4: Synchronous End");
```

#### Output:

```text
1: Synchronous Start
4: Synchronous End
3: Promise Microtask
2: setTimeout Task
```

#### Step-by-Step Execution Sequence:

1. `console.log("1: Synchronous Start")` runs on the Call Stack -> **Logs `1`**.
2. `setTimeout` registers timer callback with Web APIs; upon timer completion, callback goes to **Task Queue**.
3. `Promise.resolve().then(...)` pushes callback directly to **Microtask Queue**.
4. `console.log("4: Synchronous End")` runs on Call Stack -> **Logs `4`**.
5. Call Stack becomes empty.
6. Event Loop checks **Microtask Queue** first -> Executes and **Logs `3`**.
7. Microtask Queue is empty. Event Loop checks **Task Queue** -> Executes and **Logs `2`**.

**[⬆ Back to Top](#table-of-contents)**

---

### 6. Explain lexical scoping with an example

**Lexical Scoping** (also known as Static Scoping) means that variable accessibility is determined by the physical location of variables and blocks in the source code at **compile time**, not at runtime.

An inner function always has access to the variables defined in its outer (enclosing) parent scopes through the **Scope Chain**.

```javascript
const globalName = "John";

function outerFunction() {
  const outerRole = "Developer";

  function innerFunction() {
    const innerLanguage = "JavaScript";
    // innerFunction has access to variables in its scope, parent scope, and global scope
    console.log(`${globalName} is a ${outerRole} writing${innerLanguage}.`);
  }

  innerFunction();
}

outerFunction();
// Output: "John is a Developer writing JavaScript."
```

#### How Scope Chain Lookup Works:

When `innerFunction` references `globalName`:

1. Search local scope of `innerFunction` -> _Not found_.
2. Search scope of parent `outerFunction` -> _Not found_.
3. Search `Global Scope` -> _Found `globalName`!_
4. If not found in the global scope, JavaScript throws a `ReferenceError`.

**[⬆ Back to Top](#table-of-contents)**

---

### 7. What happens when you access an undeclared variable vs undefined

In JavaScript, there is a distinct difference between an **undeclared variable** and a variable holding the value **`undefined`**.

#### Key Differences

- **`undefined`:** A variable has been declared in the scope using `var`, `let`, or `const`, but has not yet been assigned a value.
- **Undeclared Variable:** A variable that was never declared in any accessible scope using `var`, `let`, or `const`.

```javascript
// --- 1. Declared but undefined ---
let declaredVar;
console.log(declaredVar); // Output: undefined
console.log(typeof declaredVar); // Output: "undefined"

// --- 2. Undeclared Variable ---
// console.log(notDeclaredVar);  // Throws ReferenceError: notDeclaredVar is not defined

// Safe check using typeof:
console.log(typeof notDeclaredVar); // Output: "undefined" (Does NOT throw an error)

// --- 3. Implicit Global Assignment (Non-Strict Mode) ---
function createGlobal() {
  implicitGlobal = "I am global"; // Assigned without declaration keyword
}
createGlobal();
console.log(implicitGlobal); // Output: "I am global" (Pollutes global object)
```

| Metric                     | `undefined`           | Undeclared Variable                    |
| :------------------------- | :-------------------- | :------------------------------------- |
| **Declaration Status**     | Declared              | Not Declared                           |
| **Reading Value**          | Returns `undefined`   | Throws `ReferenceError`                |
| **`typeof` Operator**      | Returns `"undefined"` | Returns `"undefined"` (does not crash) |
| **Strict Mode Assignment** | Valid                 | Throws `ReferenceError`                |

**[⬆ Back to Top](#table-of-contents)**

### 8. What is a closure and when does it cause memory leaks

A **closure** is a function bundled together with references to its surrounding lexical environment. In JavaScript, closures give inner functions access to an outer function's scope even after the outer function has finished executing and returned.

```javascript
function createCounter() {
  let count = 0; // Lexical variable trapped in closure

  return function increment() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
```

#### How Memory Leaks Occur with Closures

Since a closure keeps a reference to its outer lexical scope in memory, variables inside that scope cannot be garbage collected as long as the closure exists. Memory leaks happen when:

1. **Unattached Event Listeners:** Attaching a closure to a DOM element without removing the event listener when the element is removed.
2. **Uncleared `setInterval` or `setTimeout`:** A long-running timer holding a callback that references large objects in its outer scope.
3. **Unintended Scope Retention:** Retaining a large object in the outer scope when the inner function only needs a small piece of data.

```javascript
// --- Example: Memory Leak Pattern ---
function attachHandler() {
  const hugeDataArray = new Array(1000000).fill("leak");

  document.getElementById("btn").addEventListener("click", function () {
    // Keeps 'hugeDataArray' alive in memory indefinitely!
    console.log("Button clicked!");
  });
}
```

**[⬆ Back to Top](#table-of-contents)**

---

### 9. Difference between function declaration and function expression

The fundamental difference lies in **how they are defined** and **how they are hoisted** by the JavaScript engine.

```javascript
// --- 1. Function Declaration ---
console.log(add(2, 3)); // Output: 5 (Works due to full hoisting)

function add(a, b) {
  return a + b;
}

// --- 2. Function Expression ---
// console.log(multiply(2, 3)); // Throws ReferenceError or TypeError

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2, 3)); // Output: 6
```

#### Key Differences

| Feature             | Function Declaration                              | Function Expression                                               |
| :------------------ | :------------------------------------------------ | :---------------------------------------------------------------- |
| **Syntax**          | Starts with `function` keyword statement          | Assigned as a value to a variable                                 |
| **Hoisting**        | Fully hoisted (can be called before definition)   | Follows variable rules (`var` = `undefined`, `let`/`const` = TDZ) |
| **Name**            | Must always be named                              | Can be anonymous or named                                         |
| **Conditional Use** | Not recommended inside `if` blocks in legacy code | Safe to declare inside conditional blocks                         |

**[⬆ Back to Top](#table-of-contents)**

---

### 10. How does this behave in normal functions arrow functions and event handlers

The value of the `this` keyword depends on **how** and **where** a function is called.

#### 1. Normal Functions

In normal functions, `this` is dynamically bound at execution time based on the caller context:

- **Implicit Binding:** `obj.method()` $\rightarrow$ `this` refers to `obj`.
- **Standalone Invocation:** `fn()` $\rightarrow$ `this` refers to `window`/`global` (or `undefined` in strict mode).

#### 2. Arrow Functions

Arrow functions do **not** have their own `this`. Instead, they bind `this` **lexically** (inheriting `this` from the enclosing outer scope at definition time).

#### 3. Event Handlers

In standard event listeners, `this` is bound to the DOM element receiving the event. If an arrow function is used, `this` refers to the outer scope (e.g., `Window`).

```javascript
const user = {
  name: "Alice",

  // 1. Normal Function
  regularFunc: function () {
    console.log("Regular:", this.name);
  },

  // 2. Arrow Function
  arrowFunc: () => {
    console.log("Arrow:", this.name);
  },
};

user.regularFunc(); // Output: Regular: Alice
user.arrowFunc(); // Output: Arrow: undefined (inherits 'this' from window)

// --- 3. Event Handlers ---
const button = document.getElementById("myButton");

// Normal callback -> 'this' refers to the button element
button.addEventListener("click", function () {
  console.log(this); // Output: <button id="myButton">
});

// Arrow callback -> 'this' refers to Window/Outer scope
button.addEventListener("click", () => {
  console.log(this); // Output: Window
});
```

**[⬆ Back to Top](#table-of-contents)**

---

### 11. Explain bind call and apply with use cases

`call`, `apply`, and `bind` are explicit binding methods used to manipulate the context of `this` inside a function.

```javascript
const person = {
  name: "Rahim",
};

function introduce(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

// 1. call(): Passes arguments individually
introduce.call(person, "Hello", "!"); // Output: "Hello, my name is Rahim!"

// 2. apply(): Passes arguments as an array
introduce.apply(person, ["Hi", "."]); // Output: "Hi, my name is Rahim."

// 3. bind(): Returns a new bound function to invoke later
const boundFunc = introduce.bind(person, "Hey");
boundFunc("?"); // Output: "Hey, my name is Rahim?"
```

#### Comparison & Common Use Cases

| Method        | Execution                     | Argument Format                        | Common Use Cases                                                 |
| :------------ | :---------------------------- | :------------------------------------- | :--------------------------------------------------------------- |
| **`call()`**  | Immediately                   | Arguments listed individually          | Method borrowing from another object                             |
| **`apply()`** | Immediately                   | Arguments as an array (`[arg1, arg2]`) | Finding min/max in array (`Math.max.apply(null, arr)`)           |
| **`bind()`**  | Deferred (Returns a function) | Arguments listed individually          | Preserving `this` inside timer callbacks or React event handlers |

**[⬆ Back to Top](#table-of-contents)**

---

### 12. What is currying and why is it useful

**Currying** is a functional programming technique where a function with multiple arguments is transformed into a sequence of nested functions, each taking a **single argument**.

$$f(a, b, c) \longrightarrow f(a)(b)(c)$$

```javascript
// --- Standard N-ary Function ---
const addNormal = (a, b, c) => a + b + c;
console.log(addNormal(1, 2, 3)); // Output: 6

// --- Curried Function ---
const addCurried = (a) => (b) => (c) => a + b + c;

console.log(addCurried(1)); // Returns function: (b) => (c) => 1 + b + c
console.log(addCurried(1)(2)); // Returns function: (c) => 3 + c
console.log(addCurried(1)(2)(3)); // Output: 6
```

#### Why is Currying Useful?

1. **Partial Application & Reusability:** Allows you to configure a base function with reusable fixed arguments.
2. **Avoids Duplicate Arguments:** Keeps code DRY by partially applying repetitive data once.
3. **Improves Functional Composition:** Makes functions easier to combine in pipelines.

```javascript
// Useful Real-World Example: Logging Utility
const log = (level) => (message) => `[${level.toUpperCase()}]:${message}`;

const logError = log("error"); // Partially applied
console.log(logError("Database connection failed")); // Output: [ERROR]: Database connection failed
console.log(logError("Invalid user session")); // Output: [ERROR]: Invalid user session
```

**[⬆ Back to Top](#table-of-contents)**

---

### 13. What is function composition

**Function Composition** is an approach in functional programming where two or more simple functions are combined to produce a new, complex function. The output of one function becomes the direct input for the next function.

In mathematical terms:

$$(f \circ g)(x) = f(g(x))$$

```javascript
const addFive = (x) => x + 5;
const multiplyByTwo = (x) => x * 2;
const square = (x) => x * x;

// Standard Nested Execution (Hard to read)
const result1 = square(multiplyByTwo(addFive(3)));
console.log(result1); // ((3 + 5) * 2)^2 = 256

// --- Function Composition Helper (Pipe: Left to Right) ---
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((value, fn) => fn(value), initialValue);

// Clean, composable pipeline
const transformData = pipe(
  addFive, // 3 + 5 = 8
  multiplyByTwo, // 8 * 2 = 16
  square, // 16 * 16 = 256
);

console.log(transformData(3)); // Output: 256
```

#### Benefits of Function Composition

- **Modularity:** Encourages small, pure, single-purpose functions.
- **Readability:** Eliminates deeply nested function calls using flat processing pipelines (`pipe`).
- **Testability:** Small composed functions are easy to unit test independently.

**[⬆ Back to Top](#table-of-contents)**

### 14. Explain prototype chaining

Every JavaScript object has an internal hidden link to another object called its **Prototype** (represented internally as `[[Prototype]]`, accessible via `Object.getPrototypeOf()` or `__proto__`).

When you try to access a property or method on an object, JavaScript first looks for it directly on that object. If it doesn't find it, it searches up the prototype object, then that prototype's prototype, and so on until it finds the property or reaches `null`. This chain of linked prototype objects is called the **Prototype Chain**.

```javascript
const grandParent = {
  familyName: "Chowdhury",
};

// Set grandParent as prototype of parent
const parent = Object.create(grandParent);
parent.house = "Villa";

// Set parent as prototype of child
const child = Object.create(parent);
child.name = "Aria";

console.log(child.name); // Output: "Aria" (Found on 'child' object)
console.log(child.house); // Output: "Villa" (Found on 'parent' prototype)
console.log(child.familyName); // Output: "Chowdhury" (Found on 'grandParent' prototype)
console.log(child.car); // Output: undefined (Traversed to null, property not found)
```

#### Visualizing the Chain:

`child` $\rightarrow$ `parent` $\rightarrow$ `grandParent` $\rightarrow$ `Object.prototype` $\rightarrow$ `null`

**[⬆ Back to Top](#table-of-contents)**

---

### 15. Difference between Object.create() and class-based inheritance

While both mechanisms achieve inheritance via prototype delegation, `Object.create()` is **pure prototypal inheritance**, whereas `class` syntax is **syntactic sugar** built on top of prototype delegation to mimic class-based Object-Oriented Programming (OOP).

#### Code Example Comparison

```javascript
// --- 1. Pure Prototypal Inheritance via Object.create() ---
const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};

const dog = Object.create(Animal);
dog.name = "Rex";
dog.speak(); // Output: "Rex makes a noise."

// --- 2. Class-based Inheritance ---
class AnimalClass {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class DogClass extends AnimalClass {
  constructor(name, breed) {
    super(name); // Invokes superclass constructor
    this.breed = breed;
  }
}

const myDog = new DogClass("Buddy", "Golden Retriever");
myDog.speak(); // Output: "Buddy makes a noise."
```

#### Key Differences

| Feature                    | `Object.create()`                  | `class` Inheritance                                   |
| :------------------------- | :--------------------------------- | :---------------------------------------------------- |
| **Concept**                | Direct object-to-object delegation | Blueprint-based instantiation (`new` keyword)         |
| **Constructor Invocation** | No constructor function required   | Requires `constructor()` and `super()` for subclasses |
| **Syntactic Style**        | Functional / Prototypal            | Classical Object-Oriented syntax                      |
| **Encapsulation Support**  | Manual via closures/symbols        | Supports private fields (`#privateField`)             |

**[⬆ Back to Top](#table-of-contents)**

---

### 16. How does JavaScript handle property lookup

When reading a property `obj.prop`, the JavaScript engine performs an algorithm called **Property Lookup** along the scope and prototype chain.

```
                  ┌─────────────────────────────┐
                  │    Access obj.prop          │
                  └──────────────┬──────────────┘
                                 │
                   Does 'prop' exist directly
                       on 'obj' itself?
                   (obj.hasOwnProperty('prop'))
                                 │
                    ┌────────────┴────────────┐
                    ▼                         ▼
                 [ YES ]                   [ NO ]
                    │                         │
     Returns property value         Does obj.[[Prototype]]
                                        equal null?
                                              │
                                   ┌──────────┴──────────┐
                                   ▼                     ▼
                                [ YES ]               [ NO ]
                                   │                     │
                           Returns undefined      Move to parent prototype
                                                  & repeat check step
```

#### Code Example

```javascript
function Person(name) {
  this.name = name; // Own Property
}

// Prototype Property
Person.prototype.species = "Homo Sapiens";

const user = new Person("Rahim");

// 1. Own Property Lookup
console.log(user.name); // Output: "Rahim"
console.log(user.hasOwnProperty("name")); // Output: true

// 2. Prototype Property Lookup
console.log(user.species); // Output: "Homo Sapiens"
console.log(user.hasOwnProperty("species")); // Output: false (inherited from Person.prototype)

// 3. Failed Property Lookup
console.log(user.age); // Output: undefined (Searched user -> Person.prototype -> Object.prototype -> null)
```

**[⬆ Back to Top](#table-of-contents)**

---

### 17. What is the difference between shallow copy and deep copy

The difference lies in how nested objects and reference data types are copied in memory.

```javascript
const original = {
  title: "JavaScript Guide",
  author: { name: "Alex" },
};

// --- 1. Shallow Copy ---
const shallowCopy = { ...original };
shallowCopy.author.name = "John"; // Modifies nested object in both original and copy!

console.log(original.author.name); // Output: "John" (Shared memory reference)

// --- 2. Deep Copy ---
const deepCopy = structuredClone(original);
deepCopy.author.name = "Sarah"; // Completely independent

console.log(original.author.name); // Output: "John" (Original remain untouched)
console.log(deepCopy.author.name); // Output: "Sarah"
```

#### Comparison Summary

| Metric                    | Shallow Copy                                                                      | Deep Copy                                              |
| :------------------------ | :-------------------------------------------------------------------------------- | :----------------------------------------------------- |
| **Top-level Primitives**  | Copied by value (independent)                                                     | Copied by value (independent)                          |
| **Nested Objects/Arrays** | Copied by **reference** (shared)                                                  | Copied by **value** (recursively duplicated)           |
| **Common Native Methods** | Object spread (`{ ...obj }`), `Object.assign({}, obj)`, `Array.prototype.slice()` | `structuredClone()`, `JSON.parse(JSON.stringify(obj))` |
| **Performance**           | Fast & lightweight                                                                | Slower (requires deep memory traversal)                |

> **Note:** `JSON.parse(JSON.stringify(obj))` fails to copy `Functions`, `Symbols`, `Map`, `Set`, `undefined`, or circular references. Prefer `structuredClone()` in modern JavaScript environments.

**[⬆ Back to Top](#table-of-contents)**

---

### 18. How does Object.freeze() differ from Object.seal()

Both methods are used to prevent modification of objects, but `Object.freeze()` provides a **stricter level of immutability** than `Object.seal()`.

```javascript
// --- 1. Object.seal() ---
const sealedObj = { name: "Alice", role: "Admin" };
Object.seal(sealedObj);

sealedObj.role = "User"; // Allowed: Existing values CAN be modified
delete sealedObj.name; // Silently fails / throws TypeError in strict mode (Cannot delete)
sealedObj.age = 25; // Silently fails / throws TypeError in strict mode (Cannot add)

console.log(sealedObj); // Output: { name: "Alice", role: "User" }

// --- 2. Object.freeze() ---
const frozenObj = { name: "Bob", role: "Admin" };
Object.freeze(frozenObj);

frozenObj.role = "User"; // Silently fails / throws TypeError in strict mode (Cannot modify value)
delete frozenObj.name; // Silently fails (Cannot delete)
frozenObj.age = 30; // Silently fails (Cannot add)

console.log(frozenObj); // Output: { name: "Bob", role: "Admin" }
```

#### Feature Matrix Comparison

| Action                               | `Object.seal()`        | `Object.freeze()`      |
| :----------------------------------- | :--------------------- | :--------------------- |
| **Add New Properties**               | ❌ No                  | ❌ No                  |
| **Delete Existing Properties**       | ❌ No                  | ❌ No                  |
| **Modify Existing Values**           | ✅ **Yes**             | ❌ No                  |
| **Reconfigure Property Descriptors** | ❌ No                  | ❌ No                  |
| **Verification Method**              | `Object.isSealed(obj)` | `Object.isFrozen(obj)` |

> **Note:** Both methods perform a **shallow freeze/seal**. Nested objects inside a frozen object can still be mutated unless recursively frozen.

**[⬆ Back to Top](#table-of-contents)**

### 19. Explain Promise states and chaining

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.

#### The 3 Promise States

1. **Pending:** Initial state, operation is in progress (neither fulfilled nor rejected).
2. **Fulfilled:** Operation completed successfully, holding a resolved `value`.
3. **Rejected:** Operation failed, holding a rejection `reason` (error).

> State transitions are **immutable** and **one-way**: a promise transitions from `Pending` to either `Fulfilled` or `Rejected` exactly once.

```javascript
// --- Promise Creation & Chaining ---
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: 1, name: "Data Payload" });
      } else {
        reject(new Error("Network Error"));
      }
    }, 1000);
  });
}

// Chaining .then(), .catch(), and .finally()
fetchData()
  .then((data) => {
    console.log("Step 1 Received:", data);
    return data.name.toUpperCase(); // Returns a new resolved promise
  })
  .then((processedName) => {
    console.log("Step 2 Processed:", processedName); // Output: "DATA PAYLOAD"
  })
  .catch((error) => {
    console.error("Caught in Chain:", error.message);
  })
  .finally(() => {
    console.log("Cleanup: Operation Complete");
  });
```

#### How Chaining Works

Every call to `.then()`, `.catch()`, or `.finally()` returns a **brand new Promise**. Returning a value inside `.then()` wraps that value in a resolved Promise, allowing sequential asynchronous operations without nesting callbacks.

**[⬆ Back to Top](#table-of-contents)**

---

### 20. Difference between async/await and Promises internally

`async/await` is **syntactic sugar** built on top of native Promises and JavaScript Generators (`yield` / iterator pattern). It makes asynchronous code look and behave like synchronous code.

#### Key Differences

| Feature                | Native Promises                                | `async / await`                                                                                        |
| :--------------------- | :--------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| **Syntax**             | Explicit chaining with `.then()` & `.catch()`  | Synchronous-looking code with `async` & `await`                                                        |
| **Error Handling**     | `.catch()` method block                        | Standard `try / catch` block                                                                           |
| **Conditional Flow**   | Complex nested `.then()` or branching          | Standard `if / else` statements                                                                        |
| **Internal Execution** | Callback handlers scheduled in Microtask Queue | Pauses function execution using engine-level generator control before yielding back to Microtask Queue |

#### Internal Mechanism Example

Under the hood, an `async` function converts standard execution into generator-like step resolution:

```javascript
// --- 1. Syntactic Sugar (async/await) ---
async function getUser() {
  try {
    const user = await fetchUser();
    console.log(user);
  } catch (err) {
    console.error(err);
  }
}

// --- 2. How JavaScript Engine Evaluates It Internally (Promise-based) ---
function getUserInternal() {
  return Promise.resolve()
    .then(() => fetchUser())
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.error(err);
    });
}
```

**[⬆ Back to Top](#table-of-contents)**

---

### 21. What happens if you don’t await an async function

When you call an `async` function without using the `await` keyword:

1. **Non-blocking Execution:** The synchronous code directly following the invocation executes immediately without waiting for the async operation to complete.
2. **Returns Pending Promise:** The expression evaluates to a pending `Promise` object instead of the unwrapped return value.
3. **Unhandled Rejections:** If the un-awaited async function throws an error, it results in an **Unhandled Promise Rejection** unless a `.catch()` is explicitly attached to the returned promise object.

```javascript
async function fetchScore() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(100), 1000);
  });
}

async function run() {
  console.log("1. Start");

  // Missing 'await' keyword
  const scorePromise = fetchScore();

  console.log("2. Result:", scorePromise); // Output: Promise { <pending> }
  console.log("3. End");
}

run();
// Output Order:
// "1. Start"
// "2. Result: Promise { <pending> }"
// "3. End"
```

**[⬆ Back to Top](#table-of-contents)**

---

### 22. How would you implement Promise.all() manually

`Promise.all()` takes an iterable of promises and returns a single Promise that fulfills when **all** input promises fulfill, or rejects immediately as soon as **any** input promise rejects (fail-fast behavior).

#### Custom `Promise.all()` Implementation

```javascript
function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    // Ensure input is an array
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    const results = [];
    let completedCount = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      // Wrap items in Promise.resolve to handle primitive/non-promise values
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value; // Maintain original array order
          completedCount++;

          // If all promises resolved successfully
          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          // Reject immediately on first failure (fail-fast)
          reject(error);
        });
    });
  });
}

// --- Test Case ---
const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res(20), 100));
const p3 = 30; // Primitive value

customPromiseAll([p1, p2, p3])
  .then((res) => console.log("Custom Promise.all Result:", res)) // Output: [10, 20, 30]
  .catch((err) => console.error(err));
```

**[⬆ Back to Top](#table-of-contents)**

---

### 23. Difference between Promise.all allSettled race and any

JavaScript provides 4 primary Promise combinators to handle concurrent asynchronous operations:

| Method                   | Fulfillment Condition                             | Rejection Condition                               | Use Case                                                                                  |
| :----------------------- | :------------------------------------------------ | :------------------------------------------------ | :---------------------------------------------------------------------------------------- |
| **`Promise.all`**        | All promises fulfill                              | **First** promise rejects (fail-fast)             | Aggregate dependent data (e.g., fetch User + Settings + Permissions together)             |
| **`Promise.allSettled`** | All promises settle (fulfilled or rejected)       | Never rejects overall                             | Independent tasks where partial failure is acceptable (e.g., dashboard analytics widgets) |
| **`Promise.race`**       | **First** promise to settle (fulfills OR rejects) | **First** promise to settle (fulfills OR rejects) | Request timeouts (e.g., race API request against a timeout timer)                         |
| **`Promise.any`**        | **First** promise to fulfill                      | All promises reject (returns `AggregateError`)    | Fetching redundantly from multiple mirrors/CDNs (first successful response wins)          |

```javascript
const pSlow = new Promise((res) => setTimeout(() => res("Slow Success"), 500));
const pFast = new Promise((res) => setTimeout(() => res("Fast Success"), 100));
const pErr = new Promise((_, rej) => setTimeout(() => rej("Instant Fail"), 50));

// 1. Promise.all -> Rejects immediately because pErr rejects
Promise.all([pSlow, pFast, pErr]).catch(console.log); // Output: "Instant Fail"

// 2. Promise.allSettled -> Waits for all to complete regardless of errors
Promise.allSettled([pSlow, pErr]).then(console.log);
// Output: [{status: 'fulfilled', value: 'Slow Success'}, {status: 'rejected', reason: 'Instant Fail'}]

// 3. Promise.race -> Settles as soon as the fastest promise settles
Promise.race([pFast, pErr]).catch(console.log); // Output: "Instant Fail" (pErr is fastest at 50ms)

// 4. Promise.any -> Ignores errors and takes the first SUCCESSFUL promise
Promise.any([pErr, pFast, pSlow]).then(console.log); // Output: "Fast Success"
```

**[⬆ Back to Top](#table-of-contents)**

---

### 24. How do you handle concurrent async requests with limits

Firing hundreds or thousands of concurrent HTTP requests at once can overwhelm server resources, crash browsers, or trigger rate-limiting errors (`429 Too Many Requests`).

We solve this using a **Concurrency Pool Worker** algorithm that executes tasks up to a maximum limit (`concurrencyLimit`).

```javascript
async function mapConcurrent(items, limit, asyncFn) {
  const results = [];
  const executing = [];

  for (const item of items) {
    // Start executing the async task
    const p = Promise.resolve().then(() => asyncFn(item));
    results.push(p);

    if (limit <= items.length) {
      // Keep track of active executing promises
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);

      // If active limit reached, wait for at least one active promise to finish
      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
  }

  return Promise.all(results);
}

// --- Usage Example ---
const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fetchMock = (id) =>
  new Promise((res) =>
    setTimeout(() => {
      console.log(`Finished task ${id}`);
      res(`Data ${id}`);
    }, 1000),
  );

// Run 10 tasks with a maximum concurrency limit of 3
mapConcurrent(urls, 3, fetchMock).then((data) => {
  console.log("All tasks finished:", data);
});
```

**[⬆ Back to Top](#table-of-contents)**

---

### 25. Explain callback hell and modern solutions

**Callback Hell** (also known as the **Pyramid of Doom**) occurs when multiple asynchronous functions are deeply nested inside callbacks. This creates unreadable, hard-to-maintain code where error propagation becomes difficult to manage.

#### Problem: Callback Hell (Pyramid of Doom)

```javascript
// ❌ HARD TO READ & MAINTAIN
getUserData(userId, function (err, user) {
  if (err) {
    handleError(err);
  } else {
    getOrders(user.id, function (err, orders) {
      if (err) {
        handleError(err);
      } else {
        getOrderDetails(orders[0].id, function (err, details) {
          if (err) {
            handleError(err);
          } else {
            console.log("Order Details:", details);
          }
        });
      }
    });
  }
});
```

#### Modern Solutions

##### 1. Promise Chaining

Flattens the pyramid into sequential `.then()` calls with centralized `.catch()` error handling.

##### 2. Async / Await (Best Practice)

Eliminates nesting entirely by allowing asynchronous code to be written sequentially using `try / catch` blocks.

```javascript
// ✅ MODERN SOLUTION: Async / Await
async function displayOrderDetails(userId) {
  try {
    const user = await getUserData(userId);
    const orders = await getOrders(user.id);
    const details = await getOrderDetails(orders[0].id);

    console.log("Order Details:", details);
  } catch (err) {
    handleError(err); // Single error entry point
  }
}

displayOrderDetails(101);
```

**[⬆ Back to Top](#table-of-contents)**

### 26. What causes memory leaks in JavaScript

A **memory leak** occurs when an application retains references to objects in memory that are no longer needed by the execution flow, preventing the Garbage Collector (GC) from reclaiming that memory.

#### Common Causes & Fixes

```javascript
// --- 1. Accidental Global Variables ---
function leakGlobal() {
  leakedVar = "I am accidentally global"; // Missing var/let/const attaches to window/global
}
// Fix: Always use 'use strict'; or let/const declarations.

// --- 2. Forgotten Timers & Callbacks ---
const heavyData = new Array(1000000).fill("data");

const intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);

// Fix: Clear intervals when no longer needed
clearInterval(intervalId);

// --- 3. Detached DOM Nodes ---
let detachedButton = document.createElement("button");
document.body.appendChild(detachedButton);

// Storing reference in JS memory
const buttonRef = detachedButton;

// Removed from DOM tree, but remains in JS memory via buttonRef
document.body.removeChild(detachedButton);

// Fix: Clear reference explicitly when removing DOM element
detachedButton = null;

// --- 4. Unremoved Event Listeners ---
function setupListener() {
  const element = document.getElementById("myBtn");

  function onClick() {
    console.log("Clicked!");
  }

  element.addEventListener("click", onClick);

  // Fix: Remove event listener before destroying element
  element.removeEventListener("click", onClick);
}
```

**[⬆ Back to Top](#table-of-contents)**

---

### 27. How does garbage collection work (mark-and-sweep)

JavaScript uses an automated memory management system powered by a **Garbage Collector (GC)**. The primary algorithm used by modern engines (V8, SpiderMonkey, JavaScriptCore) is **Mark-and-Sweep**.

#### How the Mark-and-Sweep Algorithm Works

1. **Roots Identification:** The GC identifies all "root" objects (e.g., global variables, active execution context stack variables).
2. **Mark Phase:** The GC recursively traverses all reference chains originating from the roots. Every object reached is marked as **reachable** ("alive").
3. **Sweep Phase:** The GC scans memory addresses. Any memory space occupied by objects that were **not marked** as reachable is cleared and freed.

```
[ Root (Global Context) ]
         │
         ├───> [ Object A (Marked: Alive) ] ───> [ Object B (Marked: Alive) ]
         │
         └───> [ Object C (Marked: Alive) ]

[ Object D (Unreachable) ] ───> [ Object E (Unreachable) ]
         ▲
         └────── [ Swept and Freed by Garbage Collector ]
```

```javascript
let user = { name: "Alice" }; // 'user' references the object in memory (Reachable)

user = null; // Reference broken! The object { name: "Alice" } is now unreachable.
// During the next GC cycle, Mark-and-Sweep will sweep { name: "Alice" } from memory.
```

> **Why Mark-and-Sweep beats Reference Counting:** Reference counting failed when two unreachable objects referenced each other (circular dependency). Mark-and-Sweep handles circular references gracefully because it starts strictly from active global roots.

**[⬆ Back to Top](#table-of-contents)**

---

### 28. Difference between debounce and throttle

Both **Debounce** and **Throttle** are rate-limiting techniques used to control how frequently a high-frequency event callback is executed (e.g., window scrolling, resizing, or keypresses).

#### Key Differences

- **Debounce:** Delays function execution until a specified period of inactivity has elapsed since the _last_ event trigger. (Resets timer on every new event).
- **Throttle:** Ensures the function executes at most **once every $N$ milliseconds**, guaranteed, regardless of how many times the event fires.

```javascript
// --- 1. Debounce Implementation ---
function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId); // Reset existing timer on every invocation
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Usage: Search Input Auto-complete (Fires 300ms AFTER user stops typing)
const handleSearch = debounce((e) => console.log(e.target.value), 300);

// --- 2. Throttle Implementation ---
function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Usage: Window Scroll Handler (Executes at most once every 200ms)
const handleScroll = throttle(
  () => console.log("Scroll position updated"),
  200,
);
```

#### Comparison Summary

| Metric                | Debounce                                            | Throttle                                                                |
| :-------------------- | :-------------------------------------------------- | :---------------------------------------------------------------------- |
| **Execution Trigger** | Executes **after** user stops triggering for $N$ ms | Executes at **fixed regular intervals** during continuous activity      |
| **Timer Reset**       | Resets delay timer on every trigger                 | Ignores intermediate triggers until timer expires                       |
| **Best Use Cases**    | Search bar auto-suggest, Window resize finish       | Infinite scroll loading, Mouse movement tracking, Button click spamming |

**[⬆ Back to Top](#table-of-contents)**

---

### 29. How do browsers optimize JavaScript execution

Modern JavaScript engines (like Google Chrome's **V8**) optimize execution speed using **Just-In-Time (JIT) Compilation**, **Hidden Classes**, and **Inline Caching**.

```
    Source Code
         │
         ▼
     [ Parser ]
         │
         ▼
┌──────────────────┐
│   AST (Tree)     │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐    Executes Fast    ┌─────────────────────┐
│ Bytecode Engine  │ ──────────────────> │ Output / Profiler   │
│   (Ignition)     │                     └──────────┬──────────┘
└──────────────────┘                                │ Identifies
         ▲                                          │ "Hot" Functions
         │ De-optimizes                             ▼
         │ (Type changes)                ┌─────────────────────┐
         └────────────────────────────── │ Optimizing Compiler │
                                         │     (TurboFan)      │
                                         └─────────────────────┘
```

#### 1. JIT Compilation (Ignition & TurboFan)

- **Interpreter (Ignition):** Converts Abstract Syntax Tree (AST) into bytecode to start code execution instantly.
- **Profiler:** Monitors running bytecode to identify "hot" functions (code called repeatedly with stable variable types).
- **Optimizing Compiler (TurboFan):** Compiles hot bytecode into direct machine code for maximum speed. If dynamic types change unexpectedly later, it performs **De-optimization** back to standard bytecode.

#### 2. Hidden Classes (Shapes)

JavaScript is dynamically typed, but V8 creates internal **Hidden Classes** (Shapes) behind the scenes to optimize property access offsets in memory.

```javascript
// Good practice: Keep property initialization order identical
function Point(x, y) {
  this.x = x;
  this.y = y; // Shares same Hidden Class across all Point instances
}

const p1 = new Point(1, 2);
const p2 = new Point(3, 4);

// ❌ Bad practice: Adding properties later in different orders breaks Hidden Class sharing
p1.z = 5;
```

#### 3. Inline Caching (IC)

Bypasses lookup mechanisms for property access by storing offset shortcuts in machine code based on previously seen object shapes.

**[⬆ Back to Top](#table-of-contents)**

---

### 30. When would you use Web Workers

JavaScript is single-threaded, meaning synchronous code runs on the **Main Thread** alongside UI rendering and event handling. CPU-intensive operations block the main thread, freezing the UI.

A **Web Worker** allows you to offload background scripts onto a separate thread without disrupting the user interface.

```javascript
// --- main.js ---
const worker = new Worker("worker.js");

// Send heavy payload to background thread
worker.postMessage({ number: 45 });

// Listen for computed result from worker
worker.onmessage = function (e) {
  console.log("Fibonacci Result:", e.data);
};

// --- worker.js (Background Thread) ---
function heavyFibonacci(n) {
  if (n <= 1) return n;
  return heavyFibonacci(n - 1) + heavyFibonacci(n - 2);
}

self.onmessage = function (e) {
  const result = heavyFibonacci(e.data.number);
  self.postMessage(result); // Pass result back to main thread
};
```

#### Ideal Use Cases for Web Workers

- Large dataset parsing (huge CSV/JSON processing).
- Image processing, video encoding, or canvas manipulations.
- Complex mathematical simulations, cryptography, and hashing operations.
- Real-time audio analysis.

#### Limitations of Web Workers

- **No DOM Access:** Workers cannot access `document`, `window`, or UI elements directly.
- Communication with the main thread incurs serialization overhead via `postMessage`.

**[⬆ Back to Top](#table-of-contents)**

---

### 31. Explain immutability and why it matters

**Immutability** means that once a object or data structure is created, its value **cannot be modified**. Instead of mutating the original object directly, any modifications produce a **new object** with updated values.

```javascript
// ❌ Mutable Approach (Bad Practice in State Management)
const user = { name: "Rahim", age: 25 };
user.age = 26; // Direct mutation alters original memory reference

// ✅ Immutable Approach (Best Practice)
const updatedUser = { ...user, age: 26 }; // Spread syntax creates a new memory reference

console.log(user === updatedUser); // Output: false (Separate memory references)
```

#### Why Immutability Matters

1. **Fast Change Detection:** Frameworks like React can determine whether UI components need re-rendering using a fast reference check (`oldState !== newState`), avoiding costly deep-object comparisons ($O(1)$ vs $O(N)$ speed).
2. **Predictability & Debugging:** Eliminates accidental side-effects where external functions mutate shared state references.
3. **Time-Travel Debugging:** Allows tools like Redux DevTools to record every state change snapshot for easy undo/redo tracking.

**[⬆ Back to Top](#table-of-contents)**

---

### 32. What are pure functions

A **Pure Function** is a function that satisfies two strict criteria:

1. **Determinism:** Given the same input arguments, it will **always** return the exact same output.
2. **No Side Effects:** It does not modify external state, alter global variables, mutate its input arguments, or execute I/O operations (like API calls or DOM updates).

```javascript
// ❌ Impure Function
let taxRate = 0.05;

function calculateTotalImpure(amount) {
  return amount + amount * taxRate; // Relies on external variable (Non-deterministic if taxRate changes)
}

// ✅ Pure Function
function calculateTotalPure(amount, taxRate) {
  return amount + amount * taxRate; // Pure: Relies solely on passed parameters
}

console.log(calculateTotalPure(100, 0.05)); // Always returns 105
console.log(calculateTotalPure(100, 0.05)); // Always returns 105
```

#### Benefits of Pure Functions

- **Unit Testing:** Extremely simple to test because they have zero external dependencies.
- **Memoization:** Easy to cache execution results since inputs map directly to deterministic outputs.
- **Refactoring Safety:** Safe to reorder or run in parallel without race conditions.

**[⬆ Back to Top](#table-of-contents)**

---

### 33. Difference between monolithic vs modular JS architecture

#### 1. Monolithic JavaScript Architecture

All application logic, utilities, state, and UI handling reside in a single large script file or tightly coupled structure.

- **Pros:** Easy to set up initially for small scripts.
- **Cons:** High risk of global variable pollution, tight coupling, impossible to maintain at scale, zero code reuse.

#### 2. Modular JavaScript Architecture

Application logic is divided into small, independent, self-contained files called **Modules** (e.g., using ES Modules `import`/`export`).

- **Pros:** Strict scope encapsulation, high reusability, easy testability, supports dynamic code splitting and tree shaking.

```javascript
// --- mathUtils.js (Module) ---
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// --- app.js (Module Consumer) ---
import { add, multiply } from "./mathUtils.js";

console.log(add(2, 3)); // Output: 5
console.log(multiply(2, 3)); // Output: 6
```

#### Comparison Matrix

| Feature              | Monolithic Architecture                   | Modular Architecture                   |
| :------------------- | :---------------------------------------- | :------------------------------------- |
| **Scope Management** | Global scope pollution risk               | File-level encapsulated module scopes  |
| **Maintainability**  | Degrades quickly as codebase grows        | Highly scalable and maintainable       |
| **Testing**          | Difficult due to implicit dependencies    | Easy to unit test isolated modules     |
| **Performance**      | Downloads large bundled files all at once | Supports tree shaking and lazy loading |

**[⬆ Back to Top](#table-of-contents)**

---

### 34. Explain event delegation and its benefits

**Event Delegation** is a design pattern that leverages **Event Bubbling** to handle events at a parent element level rather than attaching separate event listeners to every individual child node.

When an event fires on a child element, it automatically bubbles up through the DOM tree to its parent elements.

```html
<!-- Parent Container -->
<ul id="itemList">
  <li data-id="1">Item 1</li>
  <li data-id="2">Item 2</li>
  <li data-id="3">Item 3</li>
</ul>
```

```javascript
// ✅ Event Delegation: Single listener on parent element
const itemContainer = document.getElementById("itemList");

itemContainer.addEventListener("click", function (event) {
  // Check if click originated from an <li> element
  if (event.target && event.target.nodeName === "LI") {
    console.log(`Clicked Item ID: ${event.target.dataset.id}`);
  }
});
```

#### Key Benefits of Event Delegation

1. **Memory Efficiency:** Creates a single event handler in memory instead of hundreds for large lists.
2. **Dynamic DOM Support:** Automatically works for newly created dynamic list elements added to the DOM after page load without re-binding event listeners.
3. **Cleaner Code:** Simplifies cleanup procedures when destroying elements.

**[⬆ Back to Top](#table-of-contents)**

---

### 35. What are Symbols and real-world use cases

A **Symbol** is a primitive data type introduced in ES6. Every call to `Symbol()` produces a **guaranteed unique, immutable primitive value**. Even if two symbols are created with identical descriptions, they are strictly non-equal.

```javascript
const sym1 = Symbol("key");
const sym2 = Symbol("key");

console.log(sym1 === sym2); // Output: false
```

#### Real-World Use Cases

#### 1. Private/Hidden Object Properties

Properties defined with Symbols do not show up during standard iteration routines like `for...in`, `Object.keys()`, or `JSON.stringify()`.

```javascript
const ID = Symbol("id");

const user = {
  name: "Sarah",
  [ID]: "SECRET_USER_123",
};

console.log(Object.keys(user)); // Output: ["name"] (Symbol property ignored)
console.log(user[ID]); // Output: "SECRET_USER_123"
```

#### 2. Creating Custom Iterators (`Symbol.iterator`)

You can turn any object into an iterable (usable with `for...of` loops or spread operator) using `Symbol.iterator`.

```javascript
const customCollection = {
  items: [10, 20, 30],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.items.length) {
          return { value: this.items[index++], done: false };
        }
        return { done: true };
      },
    };
  },
};

for (const val of customCollection) {
  console.log(val); // Output: 10, 20, 30
}
```

**[⬆ Back to Top](#table-of-contents)**

---

### 36. How does Proxy work and when would you use it

The **`Proxy`** object enables you to wrap a target object and intercept ("trap") low-level fundamental operations (e.g., property lookup, assignment, function invocation, deletion).

#### Syntax

`const proxy = new Proxy(target, handler);`

```javascript
const targetUser = { name: "Karim", age: 20 };

// Handler contains traps
const handler = {
  // Intercept reading properties
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return `Property '${prop}' does not exist!`;
  },

  // Intercept setting properties (Validation Trap)
  set(target, prop, value) {
    if (prop === "age" && typeof value !== "number") {
      throw new TypeError("Age must be a number!");
    }
    target[prop] = value;
    return true;
  },
};

const proxyUser = new Proxy(targetUser, handler);

console.log(proxyUser.name); // Output: "Karim"
console.log(proxyUser.city); // Output: "Property 'city' does not exist!"

// proxyUser.age = "twenty"; // Throws TypeError: Age must be a number!
```

#### Real-World Use Cases

1. **Reactivity Systems:** Powers Vue.js 3's reactive state engine by trapping property access and mutations to trigger re-renders.
2. **Data Validation:** Enforces type safety and business rules when mutating object attributes.
3. **Logging & Profiling:** Intercepts function calls and object access to record analytical data or debug history.
4. **Negative Array Indexing:** Wraps arrays to allow negative offsets like `arr[-1]`.

**[⬆ Back to Top](#table-of-contents)**

### 37. What are Promises and how do .then, .catch, .finally, .resolve, and chaining work

A **Promise** represents the eventual completion or failure of an asynchronous operation and its resulting value.

- **`Promise.resolve(value)`**: Creates a Promise that is immediately fulfilled with the given value.
- **`.then(onFulfilled)`**: Attaches a callback for when the promise resolves. Returns a **new Promise**, allowing chaining.
- **`.catch(onRejected)`**: Attaches a callback for error handling anywhere in the chain.
- **`.finally(onFinally)`**: Executes cleanup code regardless of whether the promise succeeded or failed.

```javascript
// Quick resolution
const resolvedPromise = Promise.resolve("Initial Data");

resolvedPromise
  .then((data) => {
    console.log("Step 1:", data);
    return "Processed Data"; // Automatically wrapped in a resolved promise
  })
  .then((result) => {
    console.log("Step 2:", result);
    throw new Error("Something went wrong!"); // Trigger rejection
  })
  .catch((err) => {
    console.error("Caught Error:", err.message);
  })
  .finally(() => {
    console.log("Operation complete (Cleanup)");
  });
```

**[⬆ Back to Top](#table-of-contents)**

---

### 38. What is Callback Hell and how do you fix it

**Callback Hell** (also called the _Pyramid of Doom_) occurs when asynchronous operations are nested within callbacks inside other callbacks. This makes code extremely difficult to read, maintain, and debug.

```javascript
// ❌ Callback Hell (Pyramid of Doom)
getUser(1, function (user) {
  getOrders(user.id, function (orders) {
    getPayment(orders[0].id, function (payment) {
      sendEmail(user.email, payment.amount, function (response) {
        console.log("Notification sent!");
      });
    });
  });
});

// ✅ Modern Fix using Async / Await
async function processOrder() {
  try {
    const user = await getUser(1);
    const orders = await getOrders(user.id);
    const payment = await getPayment(orders[0].id);
    await sendEmail(user.email, payment.amount);
    console.log("Notification sent!");
  } catch (error) {
    console.error("Error processing order:", error);
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

---

### 39. How do Asynchronous Operations and Microtask Queue priority work

JavaScript handles **asynchronous operations** via Web APIs (in browsers) or C++ APIs (in Node.js). Once completed, their callbacks are placed in queues monitored by the **Event Loop**:

1. **Microtask Queue:** High priority (`Promises`, `queueMicrotask`, `MutationObserver`).
2. **Macrotask Queue (Task Queue):** Normal priority (`setTimeout`, `setInterval`, I/O).

> **Rule:** The Event Loop empties the **entire Microtask Queue** before taking a single item from the Macrotask Queue.

```javascript
console.log("1: Synchronous Start");

setTimeout(() => {
  console.log("2: Macrotask (setTimeout)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3: Microtask 1 (Promise)");
  })
  .then(() => {
    console.log("4: Microtask 2 (Chained Promise)");
  });

console.log("5: Synchronous End");

/* Output:
1: Synchronous Start
5: Synchronous End
3: Microtask 1 (Promise)
4: Microtask 2 (Chained Promise)
2: Macrotask (setTimeout)
*/
```

**[⬆ Back to Top](#table-of-contents)**

---

### 40. What is the difference between Function Declarations, Function Expressions, and Anonymous Functions

```javascript
// 1. Function Declaration (Fully hoisted)
console.log(add(2, 3)); // Output: 5
function add(a, b) {
  return a + b;
}

// 2. Function Expression (Hoisting depends on variable declaration)
// console.log(subtract(5, 2)); // ReferenceError: Cannot access 'subtract' before initialization
const subtract = function (a, b) {
  return a - b;
};

// 3. Anonymous Function (Unnamed function used as an inline argument)
const numbers = [1, 2, 3];
const doubled = numbers.map(function (num) {
  return num * 2;
});
```

| Type            | Syntax                      | Hoisted?                  | Name Requirement   |
| :-------------- | :-------------------------- | :------------------------ | :----------------- |
| **Declaration** | `function foo() {}`         | Yes (Function Body)       | Always Named       |
| **Expression**  | `const foo = function() {}` | No (Variable rules apply) | Named or Anonymous |
| **Anonymous**   | `function() {}`             | No                        | Unnamed            |

**[⬆ Back to Top](#table-of-contents)**

---

### 41. What is the difference between Arrow Functions and Regular Functions

Introduced in ES6, **Arrow Functions** provide a concise syntax but lack their own `this`, `arguments`, or `super` bindings.

```javascript
const obj = {
  name: "Alice",

  // Regular Function: 'this' bound dynamically at call time
  regularFunc: function () {
    console.log("Regular:", this.name);
  },

  // Arrow Function: 'this' inherited lexically from enclosing scope
  arrowFunc: () => {
    console.log("Arrow:", this.name);
  },
};

obj.regularFunc(); // Output: Regular: Alice
obj.arrowFunc(); // Output: Arrow: undefined (points to Window/Global)
```

| Feature                  | Regular Function                      | Arrow Function                                |
| :----------------------- | :------------------------------------ | :-------------------------------------------- |
| **`this` Binding**       | Dynamic (based on invocation context) | Lexical (inherits from parent scope)          |
| **`arguments` Object**   | Available                             | Not available (use rest parameters `...args`) |
| **Constructor Usage**    | Yes (`new Function()`)                | No (throws `TypeError`)                       |
| **Duplicate Parameters** | Allowed in non-strict mode            | Not allowed                                   |

**[⬆ Back to Top](#table-of-contents)**

---

### 42. What is an Immediately Invoked Function Expression (IIFE) and why is it used

An **IIFE** is a function that executes immediately after it is defined. It is created by wrapping a function expression in parentheses followed by an invocation operator `()`.

```javascript
// --- Standard IIFE Syntax ---
(function () {
  const privateSecret = "KEY_98765";
  console.log("IIFE initialized private scope!");
})();

// console.log(privateSecret); // Throws ReferenceError

// --- IIFE with parameters and encapsulation ---
const counter = (function (start) {
  let count = start; // Private variable

  return {
    increment() {
      return ++count;
    },
    get() {
      return count;
    },
  };
})(10);

console.log(counter.get()); // Output: 10
console.log(counter.increment()); // Output: 11
```

#### Why use an IIFE?

1. **Avoid Global Pollution:** Prevents declaring global variables that might conflict with other scripts.
2. **Encapsulation:** Creates private variables via closures.

**[⬆ Back to Top](#table-of-contents)**

---

### 43. What is Currying and why is it useful

**Currying** is the process of transforming a function with multiple arguments into a sequence of nesting functions, each taking a single argument.

```javascript
// Normal Function
const normalAdd = (a, b, c) => a + b + c;

// Curried Function
const curriedAdd = (a) => (b) => (c) => a + b + c;

console.log(curriedAdd(1)(2)(3)); // Output: 6

// Reusability with Partial Application
const addFive = curriedAdd(5);
const addFiveAndTen = addFive(10);

console.log(addFiveAndTen(2)); // Output: 17
```

#### Why is Currying Useful?

- Enables **partial application** to reuse functions with preset configuration arguments.
- Improves **functional composition** and modular code design.

**[⬆ Back to Top](#table-of-contents)**

---

### 44. What are Pure Functions and why are they important

A **Pure Function** is a function that:

1. Always returns the **same output** for the **same input** (Deterministic).
2. Has **no side effects** (does not modify global variables, mutate arguments, or call external APIs).

```javascript
// ❌ Impure Function (Mutates external state & non-deterministic)
let tax = 0.1;
function calculateTotalImpure(price) {
  return price + price * tax;
}

// ✅ Pure Function (Relies solely on arguments)
function calculateTotalPure(price, taxRate) {
  return price + price * taxRate;
}

console.log(calculateTotalPure(100, 0.1)); // Always returns 110
```

**[⬆ Back to Top](#table-of-contents)**

---

### 45. What are Higher-Order Functions and Recursive Functions

#### 1. Higher-Order Functions (HOF)

A **Higher-Order Function** is a function that either accepts another function as an argument, returns a function, or both.

```javascript
// Custom HOF returning a function
function createFormatter(prefix) {
  return function (msg) {
    return `${prefix}:${msg}`;
  };
}

const errorLogger = createFormatter("[ERROR]");
console.log(errorLogger("Connection failed")); // Output: [ERROR]: Connection failed

// Built-in Array HOFs: map, filter, reduce
const numbers = [1, 2, 3, 4];
const squared = numbers.map((n) => n * n); // Output: [1, 4, 9, 16]
```

#### 2. Recursive Functions

A **Recursive Function** is a function that calls itself until it reaches a **Base Case** (stopping condition).

```javascript
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // Output: 120
```

**[⬆ Back to Top](#table-of-contents)**

---

### 46. Explain Scope and Closures (Global, Block, and Lexical Scope)

#### 1. Scopes in JavaScript

- **Global Scope:** Variables declared outside functions/blocks, accessible anywhere.
- **Lexical / Function Scope:** Variables declared inside a function are accessible only within that function and nested inner functions.
- **Block Scope:** Variables declared with `let` and `const` inside `{}` are accessible only within that block.

```javascript
const globalVar = "Global";

function outer() {
  const outerVar = "Outer";

  if (true) {
    const blockVar = "Block";
    var functionScopedVar = "Function-Scoped";
    console.log(globalVar, outerVar, blockVar); // Accessible
  }

  // console.log(blockVar); // ReferenceError: blockVar is not defined
  console.log(functionScopedVar); // Accessible (var ignores block scope)
}
```

#### 2. Closures

A **Closure** gives an inner function access to its outer function's scope even after the outer function has returned.

```javascript
function makeCounter() {
  let count = 0; // Enclosed variable

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
```

**[⬆ Back to Top](#table-of-contents)**

---

### 47. How does the this keyword behave across different contexts

The value of `this` depends on **how** a function is called at runtime:

```javascript
// 1. Global Context
console.log(this); // In browser: Window object

// 2. Object Method (Implicit Binding)
const user = {
  name: "Rahim",
  greet() {
    console.log(this.name); // 'this' refers to 'user' object
  },
};
user.greet(); // Output: "Rahim"

// 3. Standalone Function Call
function show() {
  console.log(this);
}
show(); // Window (or undefined in 'use strict')

// 4. Constructor Function Call
function Person(name) {
  this.name = name; // 'this' refers to newly created instance
}
const p = new Person("Karim");
console.log(p.name); // Output: "Karim"
```

**[⬆ Back to Top](#table-of-contents)**

---

### 48. Explain call, bind, and apply with practical use cases

These explicit binding methods allow developers to specify what object `this` should refer to inside a function call.

```javascript
const person1 = { name: "Anik" };
const person2 = { name: "Riya" };

function introduce(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city},${country}.`);
}

// 1. call(): Invokes function immediately with individual arguments
introduce.call(person1, "Dhaka", "Bangladesh");
// Output: "Hi, I'm Anik from Dhaka, Bangladesh."

// 2. apply(): Invokes function immediately with arguments in an array
introduce.apply(person2, ["Sylhet", "Bangladesh"]);
// Output: "Hi, I'm Riya from Sylhet, Bangladesh."

// 3. bind(): Returns a new function to execute later
const introduceAnik = introduce.bind(person1, "Dhaka");
introduceAnik("Bangladesh");
// Output: "Hi, I'm Anik from Dhaka, Bangladesh."
```

#### Method Comparison

| Method        | Execution | Parameter Format     | Return Value          |
| :------------ | :-------- | :------------------- | :-------------------- |
| **`call()`**  | Immediate | Comma-separated list | Function return value |
| **`apply()`** | Immediate | Array of values      | Function return value |
| **`bind()`**  | Deferred  | Comma-separated list | A new bound function  |

**[⬆ Back to Top](#table-of-contents)**

### 49. What are Primitive and Non-Primitive Data Types in JavaScript

JavaScript is dynamically typed and categorizes data into two main groups: **Primitive** types (passed by value) and **Non-Primitive / Reference** types (passed by reference).

#### 1. Primitive Data Types (7 types)

Stored directly in the call stack memory. Immutable by nature.

- **`string`**: Textual data (`"hello"`)
- **`number`**: Double-precision floating-point numbers (`42`, `3.14`)
- **`boolean`**: Logical values (`true` / `false`)
- **`undefined`**: Variable declared but not assigned a value
- **`null`**: Intentional absence of any object value
- **`symbol`**: Unique and immutable primitive value (ES6)
- **`bigint`**: Arbitrary-precision integers (`9007199254740991n`)

#### 2. Non-Primitive / Reference Data Types

Stored in the heap memory; variables store a reference address.

- **`object`**: Collections of key-value pairs (`{ key: "value" }`)
- **`array`**: Ordered lists of values (`[1, 2, 3]`) — special subtype of `object`
- **`function`**: Executable code blocks — callable objects

```javascript
// Checking types with typeof
console.log(typeof "JS"); // "string"
console.log(typeof 100); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (Historical JS bug!)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 10n); // "bigint"
console.log(typeof [1, 2]); // "object"
console.log(typeof function () {}); // "function"
```

**[⬆ Back to Top](#table-of-contents)**

---

### 50. What is the difference between Loose Equality (==) and Strict Equality (===)

| Feature           | `==` (Loose Equality)                        | `===` (Strict Equality)                      |
| :---------------- | :------------------------------------------- | :------------------------------------------- |
| **Type Coercion** | Performed (converts types if different)      | Not performed (strictly enforces type match) |
| **Performance**   | Slightly slower due to conversion logic      | Faster (direct memory/type comparison)       |
| **Best Practice** | Discouraged (leads to unexpected edge cases) | **Standard practice** for reliable code      |

```javascript
// Type Coercion Examples with ==
console.log(5 == "5"); // true (string "5" converted to number 5)
console.log(0 == false); // true (false coerced to 0)
console.log("" == false); // true (empty string coerced to 0)
console.log(null == undefined); // true (special rule in JS spec)

// Strict Equality with ===
console.log(5 === "5"); // false (Number vs String)
console.log(0 === false); // false (Number vs Boolean)
console.log(null === undefined); // false (Null vs Undefined)

// Object Reference Comparison (Applies to both == and ===)
console.log([] == []); // false (Different reference locations)
console.log({} === {}); // false (Different reference locations)
```

**[⬆ Back to Top](#table-of-contents)**

---

### 51. What is Destructuring and how does it work in Objects and Arrays

**Destructuring** is a syntax introduced in ES6 that allows extracting values from arrays or properties from objects into distinct variables.

```javascript
// --- 1. Array Destructuring ---
const rgb = [255, 140, 0];

// Basic assignment, skipping values, and default values
const [r, g, b] = rgb;
const [red, , blue] = rgb; // Skipping middle element
const [primary, secondary = 0, tertiary, alpha = 1.0] = rgb; // With default value

console.log(r, g, b); // Output: 255 140 0
console.log(alpha); // Output: 1.0

// --- 2. Object Destructuring ---
const user = {
  id: 101,
  username: "coder_dev",
  profile: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

// Renaming variables & nested destructuring
const {
  username: handle,
  profile: { city },
} = user;

console.log(handle); // Output: coder_dev
console.log(city); // Output: Dhaka

// --- 3. Function Parameter Destructuring ---
function displayUser({ id, username }) {
  console.log(`User ID: ${id}, Name:${username}`);
}
displayUser(user); // Output: User ID: 101, Name: coder_dev
```

**[⬆ Back to Top](#table-of-contents)**

---

### 52. How do Unary Operators, Nullish Coalescing (??), and Optional Chaining (?.) work

#### 1. Unary Operators

Operate on a single operand to perform conversions or mathematical operations.

```javascript
// Unary Plus (+): Converts operand to number
console.log(+"42"); // 42 (Number)
console.log(+true); // 1
console.log(+"hello"); // NaN

// Unary Negation (-): Converts to number and negates
console.log(-"-10"); // 10

// Logical NOT (! / !!): Converts value to boolean
console.log(!""); // true
console.log(!!"JS"); // true (Truthiness check)
```

#### 2. Nullish Coalescing Operator (`??`)

Returns the right-hand operand only when the left-hand operand is **`null`** or **`undefined`** (unlike `||`, which triggers on all falsy values like `0`, `""`, or `false`).

```javascript
const count = 0;

console.log(count || 10); // Output: 10 (0 is falsy, so it falls back)
console.log(count ?? 10); // Output: 0  (0 is NOT null or undefined)

const name = null;
console.log(name ?? "Default Name"); // Output: Default Name
```

#### 3. Optional Chaining Operator (`?.`)

Reads nested properties safely without causing a runtime `TypeError` if an intermediate reference is `null` or `undefined`.

```javascript
const user = {
  name: "Sarah",
  // details property is missing
};

// ❌ Without Optional Chaining: Throws TypeError
// console.log(user.details.city);

// ✅ With Optional Chaining: Evaluates safely to undefined
console.log(user.details?.city); // Output: undefined

// Calling optional methods securely
console.log(user.getAge?.()); // Output: undefined (no error thrown)
```

**[⬆ Back to Top](#table-of-contents)**

---

### 53. What is Call by Value vs Call by Reference

In JavaScript, variable assignment and argument passing behave differently depending on the data type:

- **Primitives (Call by Value):** Values are copied directly into a new memory stack location. Modifying one copy does not affect the original.
- **Objects / Arrays (Call by Reference):** The memory address (pointer) is copied. Both variables point to the same underlying heap object.

```javascript
// --- Call by Value (Primitives) ---
let x = 10;
let y = x; // Copy value
y = 20;

console.log(x); // Output: 10 (Original unaffected)
console.log(y); // Output: 20

// --- Call by Reference (Objects/Arrays) ---
let obj1 = { name: "Tanvir" };
let obj2 = obj1; // Copy memory reference address

obj2.name = "Sumi";

console.log(obj1.name); // Output: "Sumi" (Original object mutated!)
console.log(obj2.name); // Output: "Sumi"
```

**[⬆ Back to Top](#table-of-contents)**

---

### 54. What is the difference between Shallow Copy and Deep Copy

#### 1. Shallow Copy

Copies top-level properties. However, nested objects or arrays still share references with the original object.

#### 2. Deep Copy

Duplicates every level of the object hierarchy, creating a completely independent copy in memory.

```javascript
const original = {
  title: "JS Guide",
  tags: ["code", "dev"], // Nested reference
};

// --- Shallow Copy Methods ---
const shallow1 = { ...original };
const shallow2 = Object.assign({}, original);

shallow1.tags.push("web");

console.log(original.tags); // ["code", "dev", "web"] -> Original mutated!

// --- Deep Copy Methods ---
// Modern native way (ES2022+)
const deep1 = structuredClone(original);

// Alternative JSON serialization (loses functions, Symbol, and undefined)
const deep2 = JSON.parse(JSON.stringify(original));

deep1.tags.push("deep");

console.log(original.tags); // ["code", "dev", "web"] (Untouched by deep1 change)
console.log(deep1.tags); // ["code", "dev", "web", "deep"]
```

**[⬆ Back to Top](#table-of-contents)**

---

### 55. What is Mutation and how do you achieve Immutability

**Mutation** means modifying an existing object or array directly in memory. **Immutability** prevents modifications by creating new instances when state changes occur.

```javascript
// ❌ Mutating Approach
const arr = [1, 2, 3];
arr.push(4); // Mutates 'arr'
arr.sort(); // Mutates 'arr'

// ✅ Immutable Approach (Creating new copies)
const originalArr = [1, 2, 3];
const newArr = [...originalArr, 4]; // Spread operator creates new array

console.log(originalArr); // [1, 2, 3] (Preserved)
console.log(newArr); // [1, 2, 3, 4]

// --- Preventing Mutations with Object.freeze() ---
const config = Object.freeze({
  apiEndpoint: "[https://api.example.com](https://api.example.com)",
  timeout: 5000,
});

// config.timeout = 10000; // Fails silently or throws TypeError in strict mode
console.log(config.timeout); // Output: 5000
```

**[⬆ Back to Top](#table-of-contents)**

---

### 56. What is the difference between for...in and for...of Loops

| Feature               | `for...in`                       | `for...of`                                |
| :-------------------- | :------------------------------- | :---------------------------------------- |
| **Iterates Over**     | Enumerable **Keys / Indexes**    | **Values** of iterable collections        |
| **Target Data Types** | Plain Objects, Arrays, Strings   | Arrays, Strings, Sets, Maps, NodeLists    |
| **Use Case**          | Iterating over Object properties | Iterating through Array/Collection values |

```javascript
const items = ["Apple", "Banana", "Cherry"];
items.customProp = "Extra"; // Custom property added to array object

// --- 1. for...in (Iterates over keys/indexes) ---
for (const index in items) {
  console.log(index); // Output: "0", "1", "2", "customProp"
}

// --- 2. for...of (Iterates over values) ---
for (const value of items) {
  console.log(value); // Output: "Apple", "Banana", "Cherry"
}

// --- Iterating plain objects with for...in vs Object methods ---
const user = { name: "Rahim", age: 25 };

for (const key in user) {
  console.log(`${key}:${user[key]}`);
}

// Preferred modern alternative for Objects:
Object.entries(user).forEach(([key, val]) => console.log(key, val));
```

**[⬆ Back to Top](#table-of-contents)**

---

### 57. Essential Array & String Methods and Method Chaining

#### 1. Array Iteration Methods

- **`map()`**: Transforms each element and returns a **new array** of equal length.
- **`forEach()`**: Executes a callback for each element; returns `undefined` (used for side effects).
- **`reduce()`**: Accumulates elements into a single value (number, object, array).

```javascript
const numbers = [10, 20, 30, 40];

// forEach vs map
numbers.forEach((num) => console.log(num * 2)); // Logs values, returns undefined
const doubled = numbers.map((num) => num * 2); // [20, 40, 60, 80]

// reduce: Sum of numbers
const totalSum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalSum); // Output: 100
```

#### 2. `slice()` vs `splice()`

| Method                               | Purpose                          | Mutates Original? | Returns                |
| :----------------------------------- | :------------------------------- | :---------------- | :--------------------- |
| **`slice(start, end)`**              | Extracts a section of an array   | ❌ No             | New subarray           |
| **`splice(start, count, ...items)`** | Adds/removes elements from array | ✅ Yes            | Array of deleted items |

```javascript
const letters = ["a", "b", "c", "d", "e"];

// slice: Non-mutating
const subSlice = letters.slice(1, 4); // Index 1 up to (not including) 4
console.log(subSlice); // ["b", "c", "d"]
console.log(letters); // ["a", "b", "c", "d", "e"] (Unchanged)

// splice: Mutating (remove 2 items starting at index 2, insert 'X')
const removed = letters.splice(2, 2, "X");
console.log(removed); // ["c", "d"]
console.log(letters); // ["a", "b", "X", "e"] (Mutated!)
```

#### 3. Method Chaining Example

Combines multiple array/string operations sequentially into a clean expression.

```javascript
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
];

// Chain filter, map, and reduce to calculate total price of in-stock items
const totalInStockValue = products
  .filter((item) => item.inStock) // Keep only in-stock items
  .map((item) => item.price) // Extract prices: [1000, 75, 300]
  .reduce((sum, price) => sum + price, 0); // Calculate sum

console.log(`Total Inventory Value: $${totalInStockValue}`);
// Output: Total Inventory Value: $1375
```

**[⬆ Back to Top](#table-of-contents)**

### 58. What is the difference between DOM and BOM Manipulation

#### 1. DOM (Document Object Model)

The **DOM** is an object-oriented representation of the HTML document structure as a tree of nodes. It allows JavaScript to modify page content, structure, and styles.

#### 2. BOM (Browser Object Model)

The **BOM** represents the browser environment outside of the document content itself. It includes objects like `window`, `navigator`, `screen`, `location`, and `history`.

```javascript
// --- DOM Manipulation ---
const heading = document.createElement("h1");
heading.textContent = "Hello World";
heading.style.color = "blue";
document.body.appendChild(heading);

// --- BOM Manipulation ---
console.log(`Viewport dimensions: ${window.innerWidth}x${window.innerHeight}`);
console.log(`User Agent: ${navigator.userAgent}`);
console.log(`Screen Resolution: ${screen.width}x${screen.height}`);

// Triggering browser dialog (BOM)
window.alert("DOM and BOM loaded successfully!");
```

**[⬆ Back to Top](#table-of-contents)**

---

### 59. Explain Event Mechanisms: Bubbling, Capturing, Delegation, stopPropagation, and preventDefault

Events propagate through the DOM in three sequential phases:

1. **Capturing Phase:** Event trickles down from the `window` to the target element.
2. **Target Phase:** Event reaches the target element.
3. **Bubbling Phase:** Event bubbles up from the target element back to `window`.

```text
[Window] ---> (1. Capturing) ---> [Parent] ---> [Target Element]
[Window] <--- (3. Bubbling)  <--- [Parent] <--- (2. Target)
```

```javascript
// --- 1. Bubbling vs Capturing ---
const parent = document.querySelector("#parent");

// Capturing listener (3rd parameter set to true)
parent.addEventListener("click", () => console.log("Parent (Capturing)"), true);

// Bubbling listener (default behavior, 3rd parameter is false)
parent.addEventListener("click", () => console.log("Parent (Bubbling)"), false);

// --- 2. stopPropagation() vs preventDefault() ---
const link = document.querySelector("#myLink");

link.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents default browser action (e.g., following URL)
  event.stopPropagation(); // Stops event from bubbling up to parent elements
  console.log("Link clicked safely without navigation or bubbling!");
});

// --- 3. Event Delegation ---
// Instead of attaching listeners to every button, attach one to the parent list
const itemContainer = document.querySelector("#itemList");

itemContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log(`Clicked item with ID: ${e.target.dataset.id}`);
  }
});
```

#### Key Event Methods Summary

- **`event.preventDefault()`**: Prevents the browser's default behavior for that event (e.g., form submit reload, link redirection).
- **`event.stopPropagation()`**: Prevents the event from traveling further up (bubbling) or down (capturing) the DOM tree.
- **`event.stopImmediatePropagation()`**: Prevents propagation AND stops other listeners on the _same_ element from executing.

**[⬆ Back to Top](#table-of-contents)**

---

### 60. What is the difference between Cookies, Local Storage, and Session Storage

| Feature             | Cookies                                      | Local Storage                           | Session Storage             |
| :------------------ | :------------------------------------------- | :-------------------------------------- | :-------------------------- |
| **Capacity**        | ~4 KB                                        | ~5-10 MB                                | ~5 MB                       |
| **Expiration**      | Set manually via `Expires` / `Max-Age`       | Never (persists until manually cleared) | On tab/window close         |
| **Server Transfer** | Sent with every HTTP request                 | Client-side only                        | Client-side only            |
| **Scope**           | Same Origin (accessible across tabs/windows) | Same Origin                             | Same Tab/Window session     |
| **Access API**      | `document.cookie` (Manual string parsing)    | `window.localStorage` API               | `window.sessionStorage` API |

```javascript
// --- 1. Local Storage ---
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
localStorage.removeItem("theme");
localStorage.clear();

// --- 2. Session Storage ---
sessionStorage.setItem("activeStep", "2");
const step = sessionStorage.getItem("activeStep");

// --- 3. Cookies ---
// Setting a cookie with HttpOnly/Secure flags is typically handled server-side
document.cookie = "username=JohnDoe; max-age=3600; path=/; SameSite=Strict";
console.log(document.cookie); // "username=JohnDoe"
```

**[⬆ Back to Top](#table-of-contents)**

---

### 61. How do Location Properties, History Access, and Page Redirection work

#### 1. Location Properties (`window.location`)

Provides information about the current page URL and mechanisms for page navigation.

```javascript
console.log(window.location.href); // Full URL
console.log(window.location.hostname); // e.g., "example.com"
console.log(window.location.pathname); // e.g., "/dashboard"
console.log(window.location.search); // Query parameters e.g., "?id=12"
console.log(window.location.hash); // Anchor tag e.g., "#section2"
```

#### 2. Redirection Techniques

```javascript
// Assign: Adds entry to browser history (back button works)
window.location.assign("[https://example.com](https://example.com)");

// Replace: Overwrites current history entry (back button does NOT go to previous page)
window.location.replace("[https://example.com](https://example.com)");

// Reload current page
window.location.reload();
```

#### 3. History API (`window.history`)

Manages browser session navigation, essential for Single Page Applications (SPAs).

```javascript
// Basic Navigation
history.back(); // Equivalent to clicking Back button
history.forward(); // Equivalent to clicking Forward button
history.go(-2); // Move back 2 pages

// SPA Routing without reloading page
history.pushState({ page: 1 }, "Page 1", "/page1"); // Adds new entry
history.replaceState({ page: 2 }, "Page 2", "/page2"); // Updates current entry

// Listen to browser navigation changes (Back/Forward clicks)
window.addEventListener("popstate", (event) => {
  console.log("State changed:", event.state);
});
```

**[⬆ Back to Top](#table-of-contents)**

---

### 62. How does Garbage Collection work and how do you prevent Memory Leaks

JavaScript uses automatic memory management driven by Garbage Collection algorithms, primarily **Mark-and-Sweep**.

#### Mark-and-Sweep Algorithm

1. The engine defines a set of **roots** (e.g., global `window` object, currently executing call stack variables).
2. It traverses all references recursively, **marking** reachable objects.
3. Unreachable objects (not connected to roots) are **swept** (freed from memory).

```text
[Roots (Window / Stack)] ---> Accessible Object A ---> Accessible Object B
                               Unreachable Object C (Marked for Cleanup)
```

#### Common Causes of Memory Leaks and Solutions

```javascript
// ❌ Leak 1: Accidental Global Variables
function leak1() {
  leakedVar = "I am attached to window!"; // Forgot 'const/let'
}

// ❌ Leak 2: Uncleared Timers
const data = loadHugeData();
setInterval(() => {
  console.log(data); // 'data' cannot be garbage collected
}, 1000);
// ✅ Fix: Clear interval when no longer needed using clearInterval()

// ❌ Leak 3: Detached DOM Nodes
let btn = document.getElementById("button");
document.body.removeChild(btn); // Removed from DOM
// 'btn' variable still holds a JS reference in memory!
// ✅ Fix: Set btn = null;

// ❌ Leak 4: Forgotten Event Listeners / Closures
const element = document.getElementById("box");
function onClick() {
  /* ... */
}
element.addEventListener("click", onClick);
// ✅ Fix: removeEventListener("click", onClick) before destroying element
```

**[⬆ Back to Top](#table-of-contents)**

---

### 63. How do JS Engines optimize execution (Hidden Classes, Inline Caching, Monomorphism)

Modern engines like V8 optimize dynamic JavaScript execution by applying Just-In-Time (JIT) compilation techniques.

#### 1. Hidden Classes (Shapes)

JavaScript is dynamically typed, but V8 creates hidden internal classes under the hood to track object shapes and property offsets in memory.

```javascript
// ✅ Good: Shared Hidden Class (Same initialization order)
function Point(x, y) {
  this.x = x;
  this.y = y;
}
const p1 = new Point(1, 2);
const p2 = new Point(3, 4); // Reuses the same Hidden Class as p1

// ❌ Bad: Causes Hidden Class divergence
const p3 = {};
p3.x = 1;
p3.y = 2;

const p4 = {};
p4.y = 2; // Different property addition order creates different hidden classes!
p4.x = 1;
```

#### 2. Inline Caching (IC)

V8 caches memory locations of object properties based on previous lookups to bypass costly property offsets search.

#### 3. Monomorphic vs Polymorphic Functions

- **Monomorphic:** A function always receives objects with the **exact same hidden class**. (Optimized heavily).
- **Polymorphic:** A function receives objects with varying hidden classes (Slower due to fallback checks).

```javascript
// ✅ Monomorphic Function (Fast)
function getX(obj) {
  return obj.x;
}
getX(p1);
getX(p2); // Passed same shape repeatedly

// ❌ Avoid deleting properties at runtime
delete p1.x; // Breaks hidden class optimization! Use p1.x = null instead.
```

**[⬆ Back to Top](#table-of-contents)**

---

### 64. Modern ES6+ Features and Template Literals

#### 1. Template Literals & Tagged Templates

Template literals support multiline strings, string interpolation, and custom parsing via tagged templates.

```javascript
// Interpolation & Expression evaluation
const name = "Alice";
console.log(`Hello, ${name.toUpperCase()}! 2 + 2 =${2 + 2}`);

// Tagged Template Function
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    const val = values[i] ? `<mark>${values[i]}</mark>` : "";
    return `${acc}${str}${val}`;
  }, "");
}

const item = "Laptop";
const price = 999;
const taggedOutput = highlight`Product: ${item}, Price:$${price}`;
console.log(taggedOutput);
// Output: Product: <mark>Laptop</mark>, Price: $<mark>999</mark>
```

#### 2. Syntax Enhancements (ES6+)

```javascript
// Default Parameters
function greet(user = "Guest") {
  return `Hi, ${user}`;
}

// Computed Property Names
const keyName = "role";
const userObj = {
  id: 1,
  [keyName]: "Admin", // Key dynamically evaluated
};

// Rest and Spread Operators
const sumAll = (...nums) => nums.reduce((a, b) => a + b, 0); // Rest
const arrCombined = [...[1, 2], ...[3, 4]]; // Spread
```

**[⬆ Back to Top](#table-of-contents)**

---

### 65. What are Web Workers and how do they enable Multithreading in JavaScript

JavaScript runs on a single main thread. **Web Workers** allow running heavy background scripts in separate threads without blocking the UI/event loop.

> **Note:** Web Workers do **NOT** have access to the DOM, `window`, or `document` objects. They communicate with the main thread via message passing (`postMessage`).

```javascript
// --- main.js ---
const worker = new Worker("worker.js");

// Send data to background worker thread
worker.postMessage({ number: 40 });

// Receive calculated result from worker
worker.onmessage = function (event) {
  console.log(`Result from worker: ${event.data}`);
};

worker.onerror = function (err) {
  console.error("Worker error:", err.message);
};

// Terminate worker when done
// worker.terminate();

// --- worker.js (Background Thread) ---
self.onmessage = function (event) {
  const { number } = event.data;

  // Heavy computation running in background
  const result = fibonacci(number);

  // Send result back to main thread
  self.postMessage(result);
};

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

**[⬆ Back to Top](#table-of-contents)**

---

### 66. How do Debouncing and Throttling work

Both **Debouncing** and **Throttling** are rate-limiting techniques used to control how many times a high-frequency event handler executes.

#### 1. Debouncing

Delays execution of a function until a specified time interval has elapsed since the **last time** the event was triggered. (Ideal for search bar autocomplete).

#### 2. Throttling

Ensures a function executes at most **once per specified time window**, regardless of how many times the event fires. (Ideal for scroll or resize handlers).

```javascript
// --- 1. Debounce Implementation ---
function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId); // Reset timer on each trigger
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Usage: Search input handler
const handleSearch = debounce((e) => {
  console.log("Fetching API results for:", e.target.value);
}, 300);

// --- 2. Throttle Implementation ---
function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Usage: Window scroll listener
window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scroll position:", window.scrollY);
  }, 200),
);
```

**[⬆ Back to Top](#table-of-contents)**

---

### 67. How do Lazy Loading Strategies work for Images and Code Modules

Lazy loading delays the initialization or loading of non-critical resources until they are actually needed (e.g., when entering the viewport).

#### 1. Native Image Lazy Loading (`loading="lazy"`)

```html
<!-- Native HTML attribute handled by modern browsers -->
<img
  src="large-banner.jpg"
  alt="Banner"
  loading="lazy"
  width="800"
  height="600"
/>
```

#### 2. Intersection Observer API for Custom Lazy Loading

```javascript
const lazyImages = document.querySelectorAll("img.lazy");

const observer = new IntersectionObserver(
  (entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Replace data-src placeholder with real source
        img.classList.remove("lazy");
        observerInstance.unobserve(img); // Stop tracking once loaded
      }
    });
  },
  { rootMargin: "0px 0px 50px 0px" },
);

lazyImages.forEach((img) => observer.observe(img));
```

#### 3. Dynamic Code-Splitting with Imports

```javascript
const loadChartButton = document.querySelector("#loadChartBtn");

loadChartButton.addEventListener("click", async () => {
  try {
    // Dynamic import loads JS module on demand (returns a Promise)
    const { renderChart } = await import("./chartModule.js");
    renderChart();
  } catch (err) {
    console.error("Failed to load module dynamically", err);
  }
});
```

**[⬆ Back to Top](#table-of-contents)**
