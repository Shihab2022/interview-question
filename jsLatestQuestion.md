# JavaScript Core Language & Execution — Viva & Interview Guide

A curated list of core JavaScript execution, scoping, hoisting, and event loop interview questions and answers formatted for GitHub `README.md`.

---

## Table of Contents

1. [What is hoisting for var, let, const, and function declarations?](#1-what-is-hoisting-for-var-let-const-and-function-declarations)
2. [What is the Temporal Dead Zone (TDZ) and why does it exist?](#2-what-is-the-temporal-dead-zone-tdz-and-why-does-it-exist)
3. [How does the JavaScript execution context work?](#3-how-does-the-javascript-execution-context-work)
4. [What is the difference between Call Stack, Task Queue, and Microtask Queue?](#4-what-is-the-difference-between-call-stack-task-queue-and-microtask-queue)
5. [How does the Event Loop prioritize Promises over setTimeout?](#5-how-does-the-event-loop-prioritize-promises-over-settimeout)
6. [Explain lexical scoping with an example.](#6-explain-lexical-scoping-with-an-example)
7. [What happens when you access an undeclared variable vs undefined?](#7-what-happens-when-you-access-an-undeclared-variable-vs-undefined)

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
