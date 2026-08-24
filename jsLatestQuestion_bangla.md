# JavaScript Core Language & Execution — Viva & Interview Guide

A curated list of core JavaScript execution, scoping, hoisting, and event loop interview questions and answers formatted for GitHub `README.md` .

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

While all declarations ( `var` , `let` , `const` , and `function` ) are hoisted, they behave differently in how they are initialized:

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

#### সারসংক্ষেপ তুলনা 

| ঘোষণার ধরন | উত্তোলন? | প্রারম্ভিক মান | ঘোষণার লাইনের আগে অ্যাক্সেসযোগ্য? | 
| :------------------------------- | :------- | :----------------- | :----------------------------------------- | 
| ** `var` ** | হ্যাঁ | `undefined` | হ্যাঁ ( `undefined` ফেরত দেয়) | 
| ** `let` ** | হ্যাঁ | শুরু না করা | না ( `ReferenceError` নিক্ষেপ করে) | 
| ** `const` ** | হ্যাঁ | শুরু না করা | না ( `ReferenceError` নিক্ষেপ করে) | 
| **ফাংশন ঘোষণা** | হ্যাঁ | সম্পূর্ণ ফাংশন বডি | হ্যাঁ (আবেদনযোগ্য) | 
| **ফাংশন এক্সপ্রেশন ( `var` )** | হ্যাঁ | `undefined` | না ( `TypeError` নিক্ষেপ করে) | 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 2. টেম্পোরাল ডেড জোন (TDZ) কি এবং কেন এটি বিদ্যমান 

**টেম্পোরাল ডেড জোন (TDZ)** হল একটি স্কোপ প্রবেশ করা এবং লাইনে পৌঁছানোর মধ্যে নির্দিষ্ট সময়সীমা যেখানে একটি `let` বা `const` ভেরিয়েবল ঘোষণা করা হয় এবং শুরু করা হয়। TDZ এ থাকাকালীন ভেরিয়েবলটি অ্যাক্সেস করা একটি `ReferenceError` নিক্ষেপ করে।

```javascript
{
  // --- TDZ for variable 'score' starts here ---
  // console.log(score); // Throws ReferenceError: Cannot access 'score' before initialization

  let score = 100; // --- TDZ for 'score' ends here ---
  console.log(score); // Output: 100
}
```

#### টিডিজেড কেন বিদ্যমান? 

1. **প্রাথমিক পরিবর্তনশীল ব্যবহার রোধ করে:** এটি বিকাশকারীদেরকে তাদের অ্যাক্সেস করার আগে ভেরিয়েবল ঘোষণা করতে বাধ্য করে, `undefined` ভেরিয়েবলগুলি অপ্রত্যাশিতভাবে পড়ার কারণে সম্ভাব্য বাগগুলি ধরতে পারে৷ 
2. ** `const` ইনভেরিয়েন্টগুলি প্রয়োগ করে:** যেহেতু `const` ভেরিয়েবলগুলি কখনই পুনরায় বরাদ্দ করা যায় না, তাই উত্তোলনের সময় সেগুলিকে `undefined` হিসাবে আরম্ভ করা (যেমন `var` ) এবং রানটাইমে তাদের পুনরায় বরাদ্দ করা হলে ZINZLINEZLINECODE21ZZZ রনটাইমে বিনামূল্য হবে শব্দার্থবিদ্যা 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 3. জাভাস্ক্রিপ্ট এক্সিকিউশন প্রসঙ্গ কিভাবে কাজ করে 

একটি **এক্সিকিউশন কনটেক্সট** হল একটি বিমূর্ত পরিবেশ যা জাভাস্ক্রিপ্ট ইঞ্জিন দ্বারা কোড মূল্যায়ন এবং কার্যকর করার জন্য তৈরি করা হয়েছে। জাভাস্ক্রিপ্টের সবকিছুই এক্সিকিউশন কনটেক্সটের মধ্যে চলে। 

দুটি প্রাথমিক ধরনের মৃত্যুদন্ড প্রসঙ্গ আছে: 

- **গ্লোবাল এক্সিকিউশন কনটেক্সট (জিইসি):** স্ক্রিপ্ট চলতে শুরু করলে ডিফল্টরূপে তৈরি করা হয়। 
- **ফাংশন এক্সিকিউশন কনটেক্সট (এফইসি):** যখনই একটি ফাংশন আহ্বান করা হয় তখন তৈরি করা হয়। 

প্রতিটি এক্সিকিউশন কনটেক্সট **দুটি ধাপে** তৈরি করা হয়: 

1. **সৃষ্টির পর্যায় (মেমরি বরাদ্দ):** 
- `Global` / `window` অবজেক্ট (ব্রাউজারে) তৈরি করে। 
- স্কোপ চেইন সেট আপ করে এবং `this` আবদ্ধ করে। 
- ভেরিয়েবলের জন্য মেমরি বরাদ্দ করে ( `var` `undefined` তে আরম্ভ করা হয়েছে, `let` / `const` শুরু না করা হয়েছে) এবং ফাংশন ঘোষণা (**উঠানো**)। 

2. **সম্পাদনা পর্যায়:** 
- লাইন-বাই-লাইন কোড এক্সিকিউট করে। 
- ভেরিয়েবলে প্রকৃত মান বরাদ্দ করে এবং ফাংশন আহ্বান করে।

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

#### সম্পাদনের ধাপ: 

1. **GEC তৈরির পর্যায়:** `num1 = undefined` , `num2 = undefined` , `add = fn()` , `result = undefined` । 
2. **GEC এক্সিকিউশন ফেজ:** `num1` `10` , `num2` `20` বরাদ্দ করা হয়েছে। 
3. `add(10, 20)` বলা হয় -> একটি নতুন **FEC** তৈরি করা হয় এবং **কল স্ট্যাক**-এ পুশ করা হয়। 
4. **FEC ক্রিয়েশন ফেজ:** আর্গুমেন্ট `a = 10` , `b = 20` , পরিবর্তনশীল `total = undefined` । 
5. **FEC এক্সিকিউশন ফেজ:** `total = 30` গণনা করা হয় এবং ফেরত দেওয়া হয়। FEC কল স্ট্যাক বন্ধ করা হয়. 
6. `result` GEC-তে `30` পায়। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 4. কল স্ট্যাক, টাস্ক কিউ এবং মাইক্রোটাস্ক সারির মধ্যে পার্থক্য কী 

জাভাস্ক্রিপ্ট একক-থ্রেডেড, মানে এটি একবারে শুধুমাত্র একটি কমান্ড চালাতে পারে। এটি তিনটি প্রধান কাঠামো ব্যবহার করে অ্যাসিঙ্ক্রোনাস ইভেন্ট পরিচালনা করে:

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

#### সংজ্ঞা এবং পার্থক্য 

- **কল স্ট্যাক:** **LIFO** (লাস্ট ইন, ফার্স্ট আউট) অর্ডারে ফাংশন এক্সিকিউশন ট্র্যাক করে। সিঙ্ক্রোনাস কোড সরাসরি স্ট্যাকের উপর চলে। 
- **মাইক্রোটাস্ক সারি:** `Promises` , `async/await` , `queueMicrotask` , এবং `MutationObserver` দ্বারা জেনারেট করা কলব্যাকের জন্য একটি উচ্চ-প্রধান সারি। 
- **টাস্ক কিউ (ম্যাক্রোটাস্ক সারি):** টাইমার ইভেন্ট ( `setTimeout` , `setInterval` ), I/O অপারেশন এবং DOM ব্যবহারকারীর ইন্টারঅ্যাকশন থেকে কলব্যাকের জন্য একটি নিম্ন-অগ্রাধিকার সারি। 

| বৈশিষ্ট্য | মাইক্রোটাস্ক সারি | টাস্ক কিউ (ম্যাক্রোটাস্ক) | 
| :------------- | :--------------------------------------------------- | :------------------------------------------------------------ | 
| **সূত্র** | `Promise.then/catch/finally` , `queueMicrotask` | `setTimeout` , `setInterval` , UI ইভেন্ট | 
| **অগ্রাধিকার** | **উচ্চ** (কল স্ট্যাক খালি হওয়ার পরপরই চলে) | **স্বাভাবিক** (মাইক্রোটাস্ক সারি সম্পূর্ণ খালি হওয়ার পরে চলে) | 
| **প্রসেসিং** | টিক করার সময় **সব কাজ** সারিতে ফেলে দেয় | প্রতি ইভেন্ট লুপ পুনরাবৃত্তি | 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 5. কিভাবে ইভেন্ট লুপ সেটটাইমআউটের উপর প্রতিশ্রুতিকে অগ্রাধিকার দেয় 

**ইভেন্ট লুপ** একটি ক্রমাগত চলমান প্রক্রিয়া যা **কল স্ট্যাক** খালি কিনা তা পরীক্ষা করে। কল স্ট্যাক পরিষ্কার হয়ে গেলে, এটি **টাস্ক কিউ** (ম্যাক্রোটাস্ক সারি) থেকে পরবর্তী আইটেম নেওয়ার আগে **মাইক্রোটাস্ক সারি**কে সম্পূর্ণরূপে খালি করে দেয়। 

যেহেতু প্রতিশ্রুতি কলব্যাকগুলি মাইক্রোটাস্ক সারিতে প্রবেশ করে এবং `setTimeout` কলব্যাকগুলি টাস্ক সারিতে প্রবেশ করে, **প্রতিশ্রুতিগুলি সর্বদা `setTimeout` ** এর আগে প্রক্রিয়া করা হয়, `setTimeout` -এর `0` millises-এর বিলম্ব হোক না কেন।

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

#### আউটপুট:

```text
1: Synchronous Start
4: Synchronous End
3: Promise Microtask
2: setTimeout Task
```

#### ধাপে ধাপে এক্সিকিউশন সিকোয়েন্স: 

1. `console.log("1: Synchronous Start")` কল স্ট্যাকে চলে -> **লগ `1` **। 
2. `setTimeout` ওয়েব API-এর সাথে টাইমার কলব্যাক নিবন্ধন করে; টাইমার শেষ হলে, কলব্যাক **টাস্ক কিউ**-এ যায়। 
3. `Promise.resolve().then(...)` কলব্যাককে সরাসরি **মাইক্রোটাস্ক কিউ**-এ ঠেলে দেয়। 
4. `console.log("4: Synchronous End")` কল স্ট্যাকে চলে -> **লগ `4` **। 
5. কল স্ট্যাক খালি হয়ে যায়। 
6. ইভেন্ট লুপ চেক করে **মাইক্রোটাস্ক কিউ** প্রথমে -> এক্সিকিউট করে এবং **লগ `3` **। 
7. মাইক্রোটাস্ক সারি খালি। ইভেন্ট লুপ চেক **টাস্ক কিউ** -> এক্সিকিউট করে এবং **লগ `2` **। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 6. একটি উদাহরণ সহ আভিধানিক স্কোপিং ব্যাখ্যা করুন 

**লেক্সিকাল স্কোপিং** (স্ট্যাটিক স্কোপিং নামেও পরিচিত) এর অর্থ হল ভেরিয়েবল অ্যাক্সেসিবিলিটি **কম্পাইল টাইমে** সোর্স কোডে ভেরিয়েবল এবং ব্লকের শারীরিক অবস্থান দ্বারা নির্ধারিত হয়, রানটাইমে নয়। 

একটি অভ্যন্তরীণ ফাংশন সবসময় **স্কোপ চেইন** এর মাধ্যমে এর বাইরের (ঘেরা) প্যারেন্ট স্কোপে সংজ্ঞায়িত ভেরিয়েবলগুলিতে অ্যাক্সেস করে।

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

#### কিভাবে স্কোপ চেইন লুকআপ কাজ করে: 

যখন `innerFunction` `globalName` উল্লেখ করে: 

1. `innerFunction` -এর স্থানীয় স্কোপ অনুসন্ধান করুন -> _পাওয়া যায়নি_। 
2. অভিভাবক `outerFunction` -এর অনুসন্ধানের সুযোগ -> _পাওয়া যায়নি_। 
3. অনুসন্ধান `Global Scope` -> _ `globalName` !_ 
4. গ্লোবাল স্কোপে না পাওয়া গেলে, জাভাস্ক্রিপ্ট একটি `ReferenceError` ছুড়ে দেয়। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 7. যখন আপনি একটি অঘোষিত ভেরিয়েবল বনাম অনির্ধারিত অ্যাক্সেস করেন তখন কী হয় 

জাভাস্ক্রিপ্টে, একটি **অঘোষিত ভেরিয়েবল** এবং ** `undefined` ** মান ধারণকারী একটি ভেরিয়েবলের মধ্যে একটি স্বতন্ত্র পার্থক্য রয়েছে। 

#### মূল পার্থক্য 

- ** `undefined` :** `var` , `let` , বা `const` ব্যবহার করে স্কোপে একটি পরিবর্তনশীল ঘোষণা করা হয়েছে, কিন্তু এখনও একটি মান নির্ধারণ করা হয়নি৷ 
- **অঘোষিত পরিবর্তনশীল:** একটি পরিবর্তনশীল যা কখনোই `var` , `let` বা `const` ব্যবহার করে কোনো অ্যাক্সেসযোগ্য সুযোগে ঘোষণা করা হয়নি।

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

| মেট্রিক | `undefined` | অঘোষিত পরিবর্তনশীল | 
| :------------------------- | :--------- | :----------------------------------------- | 
| **ঘোষণার স্থিতি** | ঘোষিত | ঘোষণা করা হয়নি | 
| **পড়ার মান** | `undefined` | `ReferenceError` | 
| ** `typeof` অপারেটর** | `"undefined"` | ফেরত দেয় `"undefined"` ফেরত দেয় (ক্র্যাশ হয় না) | 
| **কঠোর মোড অ্যাসাইনমেন্ট** | বৈধ | `ReferenceError` | 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

### 8. ক্লোজার কি এবং কখন এটি মেমরি লিক হতে পারে 

একটি **ক্লোজার** হল একটি ফাংশন যা এর আশেপাশের আভিধানিক পরিবেশের রেফারেন্স সহ একত্রে বান্ডিল। জাভাস্ক্রিপ্টে, ক্লোজারগুলি বাইরের ফাংশনটি কার্যকর করা শেষ করে ফিরে আসার পরেও ভিতরের ফাংশনগুলিকে বাইরের ফাংশনের সুযোগে অ্যাক্সেস দেয়।

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

#### কিভাবে মেমরি লিক বন্ধ হয়ে যায় 

যেহেতু একটি ক্লোজার মেমরিতে এর বাইরের আভিধানিক সুযোগের একটি রেফারেন্স রাখে, সেই সুযোগের ভিতরের ভেরিয়েবলগুলি যতক্ষণ বন্ধ থাকে ততক্ষণ আবর্জনা সংগ্রহ করা যায় না। মেমরি লিক হয় যখন: 

1. **অসংযুক্ত ইভেন্ট লিসেনার:** এলিমেন্টটি সরানো হলে ইভেন্ট লিসেনারকে না সরিয়ে একটি DOM এলিমেন্টের সাথে ক্লোজার সংযুক্ত করা। 
2. **অস্পষ্ট `setInterval` বা `setTimeout` :** একটি দীর্ঘ-চলমান টাইমার একটি কলব্যাক ধারণ করে যা এর বাইরের সুযোগে বড় বস্তুর উল্লেখ করে। 
3. **অপ্রত্যাশিত স্কোপ ধারণ:** বাইরের সুযোগে একটি বড় বস্তু ধরে রাখা যখন অভ্যন্তরীণ ফাংশনের জন্য শুধুমাত্র একটি ছোট তথ্যের প্রয়োজন হয়।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 9. ফাংশন ডিক্লেয়ারেশন এবং ফাংশন এক্সপ্রেশনের মধ্যে পার্থক্য 

মৌলিক পার্থক্য জাভাস্ক্রিপ্ট ইঞ্জিন দ্বারা **কীভাবে এগুলিকে সংজ্ঞায়িত করা হয়** এবং **কীভাবে সেগুলিকে উত্তোলন করা হয়** এর মধ্যে রয়েছে।

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

#### মূল পার্থক্য 

| বৈশিষ্ট্য | ফাংশন ঘোষণা | ফাংশন এক্সপ্রেশন | 
| :------------------ | :------------------------------------------------ | :---------------------------------------------------------------- | 
| **সিনট্যাক্স** | `function` কীওয়ার্ড স্টেটমেন্ট দিয়ে শুরু হয় একটি ভেরিয়েবলের মান হিসাবে বরাদ্দ করা হয়েছে | 
| **উত্থান** | সম্পূর্ণ উত্তোলন (সংজ্ঞা আগে বলা যেতে পারে) | পরিবর্তনশীল নিয়ম অনুসরণ করে ( `var` = `undefined` , `let` / `const` = TDZ) | 
| **নাম** | সবসময় নাম রাখতে হবে | বেনামী বা নামকরণ করা যেতে পারে | 
| **শর্তসাপেক্ষ ব্যবহার** | লিগ্যাসি কোডে `if` ব্লকের মধ্যে প্রস্তাবিত নয় | শর্তাধীন ব্লকের ভিতরে ঘোষণা করা নিরাপদ | 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 10. সাধারণ ফাংশন তীর ফাংশন এবং ইভেন্ট হ্যান্ডলারে এটি কীভাবে আচরণ করে `this` কীওয়ার্ডের মান **কীভাবে** এবং **কোথায়** একটি ফাংশন বলা হয় তার উপর নির্ভর করে। 

#### 1. সাধারণ কার্যাবলী 

সাধারন ফাংশনে, `this` কলারের প্রেক্ষাপটের উপর ভিত্তি করে কার্যকর করার সময় গতিশীলভাবে আবদ্ধ থাকে: 

- **ইমপ্লিসিট বাইন্ডিং:** `obj.method()` $\rightarrow$ `this` `obj` বোঝায়। 
- **স্বতন্ত্র আমন্ত্রণ:** `fn()` $\rightarrow$ `this` `window` / `global` (বা কঠোর মোডে `undefined` ) বোঝায়। 

#### 2. তীর ফাংশন 

তীর ফাংশনগুলির নিজস্ব `this` **নয়** থাকে। পরিবর্তে, তারা `this` **লেক্সিক্যালি** আবদ্ধ করে (সংজ্ঞার সময়ে ঘেরা বাইরের সুযোগ থেকে `this` উত্তরাধিকারসূত্রে পাওয়া)। 

#### 3. ইভেন্ট হ্যান্ডলার 

স্ট্যান্ডার্ড ইভেন্ট শ্রোতাদের মধ্যে, `this` ইভেন্টটি গ্রহণকারী DOM উপাদানের সাথে আবদ্ধ। যদি একটি তীর ফাংশন ব্যবহার করা হয়, `this` বাইরের সুযোগকে বোঝায় (যেমন, `Window` )।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 11. বাইন্ড কল ব্যাখ্যা করুন এবং ব্যবহারের ক্ষেত্রে আবেদন করুন `call` , `apply` , এবং `bind` হল একটি ফাংশনের ভিতরে `this` এর প্রেক্ষাপট ম্যানিপুলেট করতে ব্যবহৃত সুস্পষ্ট বাঁধাই পদ্ধতি৷

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

#### তুলনা এবং সাধারণ ব্যবহারের ক্ষেত্রে 

| পদ্ধতি | মৃত্যুদন্ড | আর্গুমেন্ট ফরম্যাট | সাধারণ ব্যবহারের ক্ষেত্রে | 
| :------------ | :---------------------------- | :----------------------------------------- | :------------------------------------------------------------------------- | 
| ** `call()` ** | অবিলম্বে | স্বতন্ত্রভাবে তালিকাভুক্ত আর্গুমেন্ট | অন্য বস্তু থেকে ধার নেওয়ার পদ্ধতি | 
| ** `apply()` ** | অবিলম্বে | একটি অ্যারে হিসাবে আর্গুমেন্ট ( `[arg1, arg2]` ) | অ্যারেতে সর্বনিম্ন/সর্বোচ্চ খোঁজা হচ্ছে ( `Math.max.apply(null, arr)` ) | 
| ** `bind()` ** | বিলম্বিত (একটি ফাংশন প্রদান করে) | স্বতন্ত্রভাবে তালিকাভুক্ত আর্গুমেন্ট | টাইমার কলব্যাক বা প্রতিক্রিয়া ইভেন্ট হ্যান্ডলারের ভিতরে `this` সংরক্ষণ করা 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 12. তরকারি কি এবং কেন উপকারী 

**কারি করা** হল একটি কার্যকরী প্রোগ্রামিং কৌশল যেখানে একাধিক আর্গুমেন্ট সহ একটি ফাংশন নেস্টেড ফাংশনের একটি ক্রমানুসারে রূপান্তরিত হয়, প্রতিটি একটি **একক যুক্তি** গ্রহণ করে। 

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

#### কেন তরকারি উপকারী? 

1. **আংশিক অ্যাপ্লিকেশন এবং পুনঃব্যবহারযোগ্যতা:** আপনাকে পুনরায় ব্যবহারযোগ্য স্থির আর্গুমেন্ট সহ একটি বেস ফাংশন কনফিগার করার অনুমতি দেয়। 
2. **ডুপ্লিকেট আর্গুমেন্ট এড়িয়ে যায়:** একবার পুনরাবৃত্ত ডেটা আংশিকভাবে প্রয়োগ করে কোড শুষ্ক রাখে। 
3. **ফাংশনাল কম্পোজিশন উন্নত করে:** পাইপলাইনে কাজগুলিকে একত্রিত করা সহজ করে তোলে।

```javascript
// Useful Real-World Example: Logging Utility
const log = (level) => (message) => `[${level.toUpperCase()}]:${message}`;

const logError = log("error"); // Partially applied
console.log(logError("Database connection failed")); // Output: [ERROR]: Database connection failed
console.log(logError("Invalid user session")); // Output: [ERROR]: Invalid user session
```

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 13. ফাংশন কম্পোজিশন কি? 

**ফাংশন কম্পোজিশন** হল ফাংশনাল প্রোগ্রামিং এর একটি পদ্ধতি যেখানে দুটি বা ততোধিক সাধারণ ফাংশন একত্রিত হয়ে একটি নতুন, জটিল ফাংশন তৈরি করে। একটি ফাংশনের আউটপুট পরবর্তী ফাংশনের জন্য সরাসরি ইনপুট হয়ে ওঠে। 

গাণিতিক ভাষায়: 

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

#### ফাংশন কম্পোজিশনের সুবিধা 

- **মডুলারিটি:** ছোট, খাঁটি, একক-উদ্দেশ্য ফাংশনকে উৎসাহিত করে। 
- **পঠনযোগ্যতা:** ফ্ল্যাট প্রসেসিং পাইপলাইন ( `pipe` ) ব্যবহার করে গভীরভাবে নেস্টেড ফাংশন কলগুলি দূর করে৷ 
- **পরীক্ষাযোগ্যতা:** ছোট ছোট ফাংশনগুলি স্বাধীনভাবে ইউনিট পরীক্ষা করা সহজ। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

### 14. প্রোটোটাইপ চেইনিং ব্যাখ্যা কর 

প্রতিটি জাভাস্ক্রিপ্ট অবজেক্টের অন্য বস্তুর সাথে একটি অভ্যন্তরীণ লুকানো লিঙ্ক থাকে যার নাম **প্রোটোটাইপ** (অভ্যন্তরীণভাবে `[[Prototype]]` হিসাবে উপস্থাপিত, `Object.getPrototypeOf()` বা `__proto__` এর মাধ্যমে অ্যাক্সেসযোগ্য)। 

আপনি যখন একটি বস্তুর উপর একটি সম্পত্তি বা পদ্ধতি অ্যাক্সেস করার চেষ্টা করেন, তখন JavaScript প্রথমে সরাসরি সেই বস্তুর উপর এটি সন্ধান করে। যদি এটি খুঁজে না পায়, এটি প্রোটোটাইপ অবজেক্ট অনুসন্ধান করে, তারপর সেই প্রোটোটাইপের প্রোটোটাইপ, এবং যতক্ষণ না এটি সম্পত্তি খুঁজে পায় বা `null` এ পৌঁছায়। সংযুক্ত প্রোটোটাইপ বস্তুর এই চেইনকে **প্রোটোটাইপ চেইন** বলা হয়।

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

#### চেইনটি ভিজ্যুয়ালাইজ করা: `child` $\rightarrow$ `parent` $\rightarrow$ `grandParent` $\rightarrow$ `Object.prototype` $\rightarrow$ `null` **[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 15. Object.create() এবং ক্লাস-ভিত্তিক উত্তরাধিকারের মধ্যে পার্থক্য 

যদিও উভয় প্রক্রিয়াই প্রোটোটাইপ প্রতিনিধিত্বের মাধ্যমে উত্তরাধিকার অর্জন করে, `Object.create()` হল **বিশুদ্ধ প্রোটোটাইপল উত্তরাধিকার**, যেখানে `class` সিনট্যাক্স হল **সিনট্যাকটিক চিনি** প্রোটোটাইপ প্রতিনিধিত্বের উপরে তৈরি করা ক্লাস-ভিত্তিক প্রোটোটাইপ অবজেক্ট-ওপিগ্রামিং (ওপিগ্রামিং)। 

#### কোডের উদাহরণ তুলনা

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

#### মূল পার্থক্য 

| বৈশিষ্ট্য | `Object.create()` | `class` উত্তরাধিকার | 
| :------------------------- | :--------------------------------- | :------------------------------------------------------ | 
| **ধারণা** | সরাসরি অবজেক্ট-টু-অবজেক্ট প্রতিনিধি | ব্লুপ্রিন্ট-ভিত্তিক ইনস্ট্যান্টিয়েশন ( `new` কীওয়ার্ড) | 
| **কনস্ট্রাক্টর আমন্ত্রণ** | কোন কনস্ট্রাক্টর ফাংশন প্রয়োজন নেই | সাবক্লাসের জন্য `constructor()` এবং `super()` প্রয়োজন | 
| **সিনট্যাকটিক স্টাইল** | কার্যকরী / প্রোটোটাইপ্যাল ​​| ক্লাসিক্যাল অবজেক্ট-ওরিয়েন্টেড সিনট্যাক্স | 
| **এনক্যাপসুলেশন সাপোর্ট** | বন্ধ/চিহ্নের মাধ্যমে ম্যানুয়াল | ব্যক্তিগত ক্ষেত্র সমর্থন করে ( `#privateField` ) | 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 16. জাভাস্ক্রিপ্ট কিভাবে প্রপার্টি লুকআপ পরিচালনা করে 

একটি সম্পত্তি `obj.prop` পড়ার সময়, জাভাস্ক্রিপ্ট ইঞ্জিন স্কোপ এবং প্রোটোটাইপ চেইন বরাবর **প্রপার্টি লুকআপ** নামে একটি অ্যালগরিদম সম্পাদন করে।

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

#### কোডের উদাহরণ

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 17. অগভীর অনুলিপি এবং গভীর অনুলিপি মধ্যে পার্থক্য কি? 

পার্থক্যটি মেমরিতে নেস্টেড অবজেক্ট এবং রেফারেন্স ডেটা টাইপগুলি কীভাবে অনুলিপি করা হয় তার মধ্যে রয়েছে।

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

#### তুলনা সারাংশ 

| মেট্রিক | অগভীর কপি | গভীর অনুলিপি | 
| :------------ | :-------------------------------------------------------------------------------- | :------------------------------------------------------ | 
| **শীর্ষ-স্তরের আদিম** | মান দ্বারা অনুলিপি (স্বাধীন) | মান দ্বারা অনুলিপি (স্বাধীন) | 
| **নেস্টেড অবজেক্ট/অ্যারে** | **রেফারেন্স** (ভাগ করা) | দ্বারা অনুলিপি করা হয়েছে **মান** দ্বারা অনুলিপি করা হয়েছে (পুনরাবৃত্তভাবে সদৃশ) | 
| **সাধারণ স্থানীয় পদ্ধতি** | অবজেক্ট স্প্রেড ( `{ ...obj }` ), `Object.assign({}, obj)` , `Array.prototype.slice()` | `structuredClone()` , `JSON.parse(JSON.stringify(obj))` | 
| **পারফরম্যান্স** | দ্রুত এবং হালকা | ধীর (গভীর মেমরি ট্রাভার্সাল প্রয়োজন) | 

> **দ্রষ্টব্য:** `JSON.parse(JSON.stringify(obj))` `Functions` , `Symbols` , `Map` , `Set` , `undefined` , বা সার্কেলগুলি অনুলিপি করতে ব্যর্থ হয়েছে৷ আধুনিক জাভাস্ক্রিপ্ট পরিবেশে `structuredClone()` পছন্দ করুন। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 18. Object.freeze() কিভাবে Object.seal() থেকে আলাদা? 

উভয় পদ্ধতিই বস্তুর পরিবর্তন রোধ করতে ব্যবহার করা হয়, কিন্তু `Object.freeze()` `Object.seal()` এর চেয়ে **অপরিবর্তনশীলতার কঠোর স্তর প্রদান করে।

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

#### বৈশিষ্ট্য ম্যাট্রিক্স তুলনা 

| কর্ম | `Object.seal()` | `Object.freeze()` | 
| :----------------------------------- | :---------------------- | :---------------------- | 
| **নতুন বৈশিষ্ট্য যোগ করুন** | ❌ না | ❌ না | 
| **বিদ্যমান সম্পত্তি মুছুন** | ❌ না | ❌ না | 
| **বিদ্যমান মান সংশোধন করুন** | ✅ **হ্যাঁ** | ❌ না | 
| **সম্পত্তি বর্ণনাকারী পুনরায় কনফিগার করুন** | ❌ না | ❌ না | 
| **যাচাই পদ্ধতি** | `Object.isSealed(obj)` | `Object.isFrozen(obj)` | 

> **দ্রষ্টব্য:** উভয় পদ্ধতিই **অগভীর ফ্রিজ/সীল** সম্পাদন করে। হিমায়িত বস্তুর ভিতরে নেস্টেড অবজেক্টগুলি এখনও পরিবর্তিত হতে পারে যদি না বারবার হিমায়িত হয়। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

### 19. প্রতিশ্রুতির অবস্থা এবং চেইনিং ব্যাখ্যা কর 

একটি **প্রতিশ্রুতি** হল একটি বস্তু যা একটি অ্যাসিঙ্ক্রোনাস অপারেশনের চূড়ান্ত সমাপ্তি বা ব্যর্থতাকে উপস্থাপন করে। 

#### ৩টি প্রতিশ্রুতিপূর্ণ রাষ্ট্র 

1. **মুলতুবি:** প্রাথমিক অবস্থা, অপারেশন চলছে (সম্পূর্ণ বা প্রত্যাখ্যাত নয়)। 
2. **সম্পূর্ণ:** একটি সমাধানকৃত `value` ধারণ করে অপারেশন সফলভাবে সম্পন্ন হয়েছে। 
3. **প্রত্যাখ্যাত:** অপারেশন ব্যর্থ হয়েছে, একটি প্রত্যাখ্যান `reason` (ত্রুটি) ধরে রাখা হয়েছে। 

> রাষ্ট্রীয় রূপান্তরগুলি হল **অপরিবর্তনীয়** এবং **এক-মুখী**: একটি প্রতিশ্রুতি `Pending` থেকে `Fulfilled` বা `Rejected` -এ ঠিক একবার পরিবর্তন করা হয়।

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

#### কিভাবে চেইনিং কাজ করে `.then()` , `.catch()` বা `.finally()` -এ প্রতিটি কল একটি **একটি নতুন প্রতিশ্রুতি** প্রদান করে। `.then()` -এর ভিতরে একটি মান ফিরিয়ে দেওয়া সেই মানটিকে একটি মীমাংসিত প্রতিশ্রুতিতে আবৃত করে, যা কলব্যাকগুলি নেস্টিং ছাড়াই অনুক্রমিক অ্যাসিঙ্ক্রোনাস ক্রিয়াকলাপগুলির অনুমতি দেয়৷ 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 20. অভ্যন্তরীণভাবে অ্যাসিঙ্ক/অপেক্ষা এবং প্রতিশ্রুতির মধ্যে পার্থক্য `async/await` হল **সিনট্যাকটিক সুগার** যা নেটিভ প্রতিশ্রুতি এবং জাভাস্ক্রিপ্ট জেনারেটর ( `yield` / ইটারেটর প্যাটার্ন) এর উপরে তৈরি। এটি অ্যাসিঙ্ক্রোনাস কোড দেখায় এবং সিঙ্ক্রোনাস কোডের মতো আচরণ করে। 

#### মূল পার্থক্য 

| বৈশিষ্ট্য | দেশীয় প্রতিশ্রুতি | `async / await` | 
| :---------------------- | :--------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | 
| **সিনট্যাক্স** | `.then()` এবং `.catch()` এর সাথে স্পষ্ট চেইনিং | `async` এবং `await` এর সাথে সিঙ্ক্রোনাস-সুদর্শন কোড | 
| **ত্রুটি পরিচালনা** | `.catch()` পদ্ধতি ব্লক | স্ট্যান্ডার্ড `try / catch` ব্লক | 
| **শর্তগত প্রবাহ** | জটিল নেস্টেড `.then()` বা শাখা | স্ট্যান্ডার্ড `if / else` বিবৃতি | 
| **অভ্যন্তরীণ মৃত্যুদণ্ড** | মাইক্রোটাস্ক সারিতে কলব্যাক হ্যান্ডলারগুলি নির্ধারিত | মাইক্রোটাস্ক সারিতে ফিরে আসার আগে ইঞ্জিন-স্তরের জেনারেটর নিয়ন্ত্রণ ব্যবহার করে ফাংশন সম্পাদনকে বিরতি দেয় | 

#### অভ্যন্তরীণ প্রক্রিয়া উদাহরণ 

হুডের নিচে, একটি `async` ফাংশন স্ট্যান্ডার্ড এক্সিকিউশনকে জেনারেটরের মতো স্টেপ রেজোলিউশনে রূপান্তরিত করে:

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 21. যদি আপনি একটি অ্যাসিঙ্ক ফাংশনের জন্য অপেক্ষা না করেন তাহলে কি হবে 

আপনি যখন `await` কীওয়ার্ড ব্যবহার না করে একটি `async` ফাংশন কল করেন: 

1. **নন-ব্লকিং এক্সিকিউশন:** অ্যাসিঙ্ক অপারেশন সম্পূর্ণ হওয়ার জন্য অপেক্ষা না করে সরাসরি আমন্ত্রণের পরে সিঙ্ক্রোনাস কোডটি অবিলম্বে কার্যকর হয়। 
2. **অমীমাংসিত প্রতিশ্রুতি প্রদান করে:** অভিব্যক্তিটি মুলতুবি থাকা `Promise` অবজেক্টের মূল্যায়ন করে না মোড়ানো রিটার্ন মানের পরিবর্তে। 
3. **আন-হ্যান্ডেলড প্রত্যাখ্যান:** যদি অ-প্রতীক্ষিত অ্যাসিঙ্ক ফাংশন একটি ত্রুটি ছুঁড়ে দেয়, তাহলে এটি একটি **আন-হ্যান্ডেলড প্রমিজ রিজেকশন** হিসাবে পরিণত হয়, যদি না একটি `.catch()` প্রত্যাবর্তিত প্রতিশ্রুতি বস্তুর সাথে স্পষ্টভাবে সংযুক্ত করা হয়।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 22. আপনি কিভাবে Promise.all() ম্যানুয়ালি বাস্তবায়ন করবেন `Promise.all()` একটি পুনরাবৃত্তিযোগ্য প্রতিশ্রুতি নেয় এবং একটি একক প্রতিশ্রুতি ফেরত দেয় যা **সব** ইনপুট প্রতিশ্রুতি পূরণ হলেই পূরণ হয়, অথবা **যেকোন** ইনপুট প্রতিশ্রুতি প্রত্যাখ্যান করার সাথে সাথেই প্রত্যাখ্যান করে (ব্যর্থ-দ্রুত আচরণ)। 

#### কাস্টম `Promise.all()` বাস্তবায়ন

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 23. Promise.all all Settled জাতি এবং যে কোন মধ্যে পার্থক্য 

জাভাস্ক্রিপ্ট সমসাময়িক অ্যাসিঙ্ক্রোনাস ক্রিয়াকলাপগুলি পরিচালনা করার জন্য 4টি প্রাথমিক প্রতিশ্রুতি সংযোজক সরবরাহ করে: 

| পদ্ধতি | পূর্ণতা শর্ত | প্রত্যাখ্যান শর্ত | কেস ব্যবহার করুন | 
| :------------ | :------------------------------------------------ | :------------------------------------------------ | :----------------------------------------------------------------------------------------- | 
| ** `Promise.all` ** | সব প্রতিশ্রুতি পূরণ | **প্রথম** প্রতিশ্রুতি প্রত্যাখ্যান (ব্যর্থ-দ্রুত) | একত্রিত নির্ভরশীল ডেটা (যেমন, ব্যবহারকারী + সেটিংস + অনুমতিগুলি একসাথে আনুন) | 
| ** `Promise.allSettled` ** | সমস্ত প্রতিশ্রুতি নিষ্পত্তি (পূরণ বা প্রত্যাখ্যান) | সামগ্রিকভাবে প্রত্যাখ্যান করে না | স্বাধীন কাজ যেখানে আংশিক ব্যর্থতা গ্রহণযোগ্য (যেমন, ড্যাশবোর্ড বিশ্লেষণ উইজেট) | 
| ** `Promise.race` ** | **প্রথম** মীমাংসার প্রতিশ্রুতি (পূরণ বা প্রত্যাখ্যান) | **প্রথম** মীমাংসার প্রতিশ্রুতি (পূরণ বা প্রত্যাখ্যান) | টাইমআউটের অনুরোধ করুন (যেমন, একটি টাইমআউট টাইমারের বিরুদ্ধে রেস API অনুরোধ) | 
| ** `Promise.any` ** | **প্রথম** প্রতিশ্রুতি পূরণ করার | সমস্ত প্রতিশ্রুতি প্রত্যাখ্যান ( `AggregateError` ফেরত) | একাধিক মিরর/সিডিএন থেকে অপ্রয়োজনীয়ভাবে আনা হচ্ছে (প্রথম সফল প্রতিক্রিয়া জয়) |

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 24. আপনি কীভাবে সীমা সহ সমসাময়িক অ্যাসিঙ্ক অনুরোধগুলি পরিচালনা করবেন 

একযোগে শত শত বা সহস্র এইচটিটিপি অনুরোধ ফায়ার করা সার্ভারের সংস্থান, ক্র্যাশ ব্রাউজার, বা রেট-লিমিটিং ত্রুটি ট্রিগার করতে পারে ( `429 Too Many Requests` )। 

আমরা একটি **কনকারেন্সি পুল ওয়ার্কার** অ্যালগরিদম ব্যবহার করে এটি সমাধান করি যা সর্বাধিক সীমা পর্যন্ত কাজগুলি সম্পাদন করে ( `concurrencyLimit` )।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 25. কলব্যাক হেল এবং আধুনিক সমাধান ব্যাখ্যা করুন 

**কলব্যাক হেল** (**পিরামিড অফ ডুম** নামেও পরিচিত) ঘটে যখন একাধিক অ্যাসিঙ্ক্রোনাস ফাংশন কলব্যাকের ভিতরে গভীরভাবে নেস্টেড থাকে। এটি অপঠনযোগ্য, রক্ষণাবেক্ষণ করা কঠিন কোড তৈরি করে যেখানে ত্রুটি প্রচার পরিচালনা করা কঠিন হয়ে পড়ে। 

#### সমস্যা: কলব্যাক হেল (পিরামিড অফ ডুম)

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

#### আধুনিক সমাধান 

##### 1. প্রমিস চেইনিং 

কেন্দ্রীভূত `.catch()` ত্রুটি পরিচালনা সহ অনুক্রমিক `.then()` কলগুলিতে পিরামিডকে সমতল করে। 

##### 2. অ্যাসিঙ্ক / অপেক্ষা করুন (সেরা অনুশীলন) `try / catch` ব্লক ব্যবহার করে ক্রমানুসারে অ্যাসিঙ্ক্রোনাস কোড লেখার অনুমতি দিয়ে নেস্টিং সম্পূর্ণভাবে দূর করে।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

### 26. জাভাস্ক্রিপ্টে মেমরি লিক হওয়ার কারণ কী 

একটি **মেমরি লিক** ঘটে যখন একটি অ্যাপ্লিকেশন মেমরিতে এমন বস্তুর রেফারেন্স ধরে রাখে যেগুলি এক্সিকিউশন ফ্লো দ্বারা আর প্রয়োজন হয় না, গারবেজ কালেক্টর (GC) কে সেই মেমরি পুনরুদ্ধার করতে বাধা দেয়। 

#### সাধারণ কারণ ও সমাধান

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 27. কিভাবে আবর্জনা সংগ্রহ কাজ করে (মার্ক-এন্ড-সুইপ) 

JavaScript একটি **গার্বেজ কালেক্টর (GC)** দ্বারা চালিত একটি স্বয়ংক্রিয় মেমরি ম্যানেজমেন্ট সিস্টেম ব্যবহার করে। আধুনিক ইঞ্জিন (V8, SpiderMonkey, JavaScriptCore) দ্বারা ব্যবহৃত প্রাথমিক অ্যালগরিদম হল **মার্ক-এন্ড-সুইপ**। 

#### কিভাবে মার্ক-এন্ড-সুইপ অ্যালগরিদম কাজ করে 

1. **রুট আইডেন্টিফিকেশন:** GC সমস্ত "রুট" অবজেক্ট (যেমন, গ্লোবাল ভেরিয়েবল, অ্যাক্টিভ এক্সিকিউশন কনটেক্সট স্ট্যাক ভেরিয়েবল) শনাক্ত করে। 
2. **মার্ক ফেজ:** GC পুনরাবৃত্তভাবে শিকড় থেকে উদ্ভূত সমস্ত রেফারেন্স চেইনকে অতিক্রম করে। পৌছে যাওয়া প্রতিটি বস্তুকে **পৌঁছানোর যোগ্য** ("জীবিত") হিসেবে চিহ্নিত করা হয়েছে। 
3. **সুইপ ফেজ:** GC মেমরি অ্যাড্রেস স্ক্যান করে। যেকোন মেমরি স্পেস এমন বস্তু দ্বারা দখল করা হয়েছে যেগুলিকে পৌঁছানো যায় বলে **চিহ্নিত করা হয়নি** সাফ করা হয় এবং মুক্ত করা হয়।

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

> **কেন মার্ক-এন্ড-সুইপ রেফারেন্স কাউন্টিংকে বীট করে:** রেফারেন্স গণনা ব্যর্থ হয় যখন দুটি অপাগ্য বস্তু একে অপরকে উল্লেখ করে (বৃত্তাকার নির্ভরতা)। মার্ক-এন্ড-সুইপ বৃত্তাকার রেফারেন্সগুলি সুন্দরভাবে পরিচালনা করে কারণ এটি সক্রিয় বৈশ্বিক মূল থেকে কঠোরভাবে শুরু হয়। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 28. ডিবাউন্স এবং থ্রোটলের মধ্যে পার্থক্য 

**ডিবাউন্স** এবং **থ্রটল** উভয়ই রেট-সীমিত করার কৌশল যা একটি উচ্চ-ফ্রিকোয়েন্সি ইভেন্ট কলব্যাক কত ঘন ঘন নির্বাহ করা হয় তা নিয়ন্ত্রণ করতে ব্যবহৃত হয় (যেমন, উইন্ডো স্ক্রলিং, আকার পরিবর্তন করা বা কী প্রেস করা)। 

#### মূল পার্থক্য 

- **ডিবাউন্স:** _লাস্ট_ ইভেন্ট ট্রিগারের পর থেকে নিষ্ক্রিয়তার একটি নির্দিষ্ট সময় অতিবাহিত না হওয়া পর্যন্ত ফাংশন সম্পাদনে বিলম্ব করে। (প্রতিটি নতুন ইভেন্টে টাইমার রিসেট করে)। 
- **থ্রটল:** নিশ্চিত করে যে ফাংশনটি সর্বাধিক **প্রতি $N$ মিলিসেকেন্ডে একবার** কার্যকর হয়, নিশ্চিত করে, ইভেন্টটি যতবারই ফায়ার হোক না কেন।

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

#### তুলনা সারাংশ 

| মেট্রিক | ডিবাউন্স | থ্রটল | 
| :--------- | :---------------------------------------------------------------- | :---------------------------------------------------------------------- | 
| **এক্সিকিউশন ট্রিগার** | **পরে** ব্যবহারকারী $N$ ms | এর জন্য ট্রিগার করা বন্ধ করে দেয় ক্রমাগত কার্যকলাপ চলাকালীন **নির্দিষ্ট নিয়মিত বিরতিতে কার্যকর হয় | 
| **টাইমার রিসেট** | প্রতিটি ট্রিগারে বিলম্ব টাইমার রিসেট করে | টাইমারের মেয়াদ শেষ না হওয়া পর্যন্ত মধ্যবর্তী ট্রিগার উপেক্ষা করে | 
| **সর্বোত্তম ব্যবহারের ক্ষেত্রে** | অনুসন্ধান বার অটো-সাজেস্ট, উইন্ডো রিসাইজ ফিনিশ | অসীম স্ক্রোল লোডিং, মাউস মুভমেন্ট ট্র্যাকিং, বোতাম ক্লিক স্প্যামিং | 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 29. ব্রাউজার কিভাবে জাভাস্ক্রিপ্ট এক্সিকিউশন অপ্টিমাইজ করে 

আধুনিক জাভাস্ক্রিপ্ট ইঞ্জিনগুলি (যেমন Google Chrome-এর **V8**) **জাস্ট-ইন-টাইম (JIT) সংকলন**, **লুকানো ক্লাস**, এবং **ইনলাইন ক্যাশিং** ব্যবহার করে কার্যকর করার গতি অপ্টিমাইজ করে।

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

#### 1. JIT সংকলন (ইগনিশন এবং টার্বোফ্যান) 

- **ইন্টারপ্রেটার (ইগনিশন):** তাৎক্ষণিকভাবে কোড এক্সিকিউশন শুরু করতে অ্যাবস্ট্রাক্ট সিনট্যাক্স ট্রি (AST) কে বাইটকোডে রূপান্তর করে। 
- **প্রোফাইলার:** "হট" ফাংশন সনাক্ত করতে বাইটকোড চালানোর মনিটর (স্থিতিশীল পরিবর্তনশীল প্রকারের সাথে বারবার বলা হয় কোড)। 
- **অপ্টিমাইজিং কম্পাইলার (টার্বোফ্যান):** সর্বাধিক গতির জন্য সরাসরি মেশিন কোডে হট বাইটকোড কম্পাইল করে। যদি ডায়নামিক প্রকারগুলি অপ্রত্যাশিতভাবে পরে পরিবর্তিত হয়, তাহলে এটি **ডি-অপ্টিমাইজেশন** করে স্ট্যান্ডার্ড বাইটকোডে ফিরে আসে। 

#### 2. লুকানো ক্লাস (আকৃতি) 

জাভাস্ক্রিপ্ট গতিশীলভাবে টাইপ করা হয়, কিন্তু V8 মেমরিতে সম্পত্তি অ্যাক্সেস অফসেটগুলিকে অপ্টিমাইজ করার জন্য পর্দার পিছনে অভ্যন্তরীণ **লুকানো ক্লাস** (আকৃতি) তৈরি করে।

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

#### 3. ইনলাইন ক্যাশিং (IC) 

পূর্বে দেখা বস্তুর আকারের উপর ভিত্তি করে মেশিন কোডে অফসেট শর্টকাট সংরক্ষণ করে সম্পত্তি অ্যাক্সেসের জন্য লুকআপ প্রক্রিয়াগুলিকে বাইপাস করে। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 30. আপনি কখন ওয়েব ওয়ার্কার ব্যবহার করবেন 

জাভাস্ক্রিপ্ট একক-থ্রেডেড, যার অর্থ সিঙ্ক্রোনাস কোড UI রেন্ডারিং এবং ইভেন্ট পরিচালনার পাশাপাশি **প্রধান থ্রেড**-এ চলে। CPU- নিবিড় ক্রিয়াকলাপগুলি মূল থ্রেডকে ব্লক করে, UI হিমায়িত করে। 

একটি **ওয়েব ওয়ার্কার** আপনাকে ইউজার ইন্টারফেস ব্যাহত না করে একটি পৃথক থ্রেডে ব্যাকগ্রাউন্ড স্ক্রিপ্ট অফলোড করতে দেয়।

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

#### ওয়েব কর্মীদের জন্য আদর্শ ব্যবহারের ক্ষেত্রে 

- বড় ডেটাসেট পার্সিং (বিশাল CSV/JSON প্রক্রিয়াকরণ)। 
- চিত্র প্রক্রিয়াকরণ, ভিডিও এনকোডিং, বা ক্যানভাস ম্যানিপুলেশন। 
- জটিল গাণিতিক সিমুলেশন, ক্রিপ্টোগ্রাফি এবং হ্যাশিং অপারেশন। 
- রিয়েল-টাইম অডিও বিশ্লেষণ। 

#### ওয়েব কর্মীদের সীমাবদ্ধতা 

- **কোন DOM অ্যাক্সেস নেই:** শ্রমিকরা সরাসরি `document` , `window` বা UI উপাদানগুলি অ্যাক্সেস করতে পারবেন না৷ 
- প্রধান থ্রেডের সাথে যোগাযোগ `postMessage` এর মাধ্যমে সিরিয়ালাইজেশন ওভারহেড করে। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 31. অপরিবর্তনীয়তা এবং কেন এটি গুরুত্বপূর্ণ তা ব্যাখ্যা করুন 

**অপরিবর্তনশীলতা** মানে একবার কোনো বস্তু বা ডেটা স্ট্রাকচার তৈরি হয়ে গেলে, এর মান **পরিবর্তন করা যাবে না**। আসল অবজেক্টকে সরাসরি মিউটেশন করার পরিবর্তে, যেকোনো পরিবর্তন আপডেট করা মান সহ একটি **নতুন অবজেক্ট** তৈরি করে।

```javascript
// ❌ Mutable Approach (Bad Practice in State Management)
const user = { name: "Rahim", age: 25 };
user.age = 26; // Direct mutation alters original memory reference

// ✅ Immutable Approach (Best Practice)
const updatedUser = { ...user, age: 26 }; // Spread syntax creates a new memory reference

console.log(user === updatedUser); // Output: false (Separate memory references)
```

#### কেন অপরিবর্তনীয়তা গুরুত্বপূর্ণ 

1. **দ্রুত পরিবর্তন সনাক্তকরণ:** প্রতিক্রিয়ার মতো ফ্রেমওয়ার্কগুলি দ্রুত রেফারেন্স চেক ( `oldState !== newState` ) ব্যবহার করে UI উপাদানগুলিকে পুনরায় রেন্ডার করার প্রয়োজন কিনা তা নির্ধারণ করতে পারে, ব্যয়বহুল ডিপ-অবজেক্ট তুলনা ($O(1)$ বনাম $O(N)$ গতি) এড়িয়ে। 
2. **অনুমানযোগ্যতা এবং ডিবাগিং:** দুর্ঘটনাজনিত পার্শ্ব-প্রতিক্রিয়া দূর করে যেখানে বাহ্যিক ফাংশনগুলি ভাগ করা রাষ্ট্রের উল্লেখগুলিকে পরিবর্তন করে। 
3. **টাইম-ট্রাভেল ডিবাগিং:** সহজে পূর্বাবস্থায় ফেরানো/পুনরায় ট্র্যাক করার জন্য Redux DevTools-এর মতো সরঞ্জামগুলিকে রাজ্যের প্রতিটি পরিবর্তনের স্ন্যাপশট রেকর্ড করার অনুমতি দেয়। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 32. বিশুদ্ধ ফাংশন কি? 

একটি **বিশুদ্ধ ফাংশন** হল একটি ফাংশন যা দুটি কঠোর মানদণ্ডকে সন্তুষ্ট করে: 

1. **ডিটারমিনিজম:** একই ইনপুট আর্গুমেন্ট দেওয়া হলে, এটি **সবসময়** একই আউটপুট ফিরিয়ে দেবে। 
2. **কোন পার্শ্ব প্রতিক্রিয়া নেই:** এটি বাহ্যিক অবস্থা পরিবর্তন করে না, গ্লোবাল ভেরিয়েবল পরিবর্তন করে, এর ইনপুট আর্গুমেন্ট পরিবর্তন করে, বা I/O ক্রিয়াকলাপ চালায় (যেমন API কল বা DOM আপডেট)।

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

#### বিশুদ্ধ কার্যাবলীর উপকারিতা 

- **ইউনিট পরীক্ষা:** পরীক্ষা করা অত্যন্ত সহজ কারণ তাদের শূন্য বাহ্যিক নির্ভরতা রয়েছে। 
- **স্মরণীয়করণ:** ইনপুটগুলি সরাসরি নির্ধারক আউটপুটগুলিতে ম্যাপ করার কারণে ক্যাশে সম্পাদনের ফলাফলগুলি সহজ। 
- **রিফ্যাক্টরিং সেফটি:** রেস কন্ডিশন ছাড়াই সমান্তরালভাবে পুনরায় সাজানো বা চালানো নিরাপদ। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 33. মনোলিথিক বনাম মডুলার জেএস আর্কিটেকচারের মধ্যে পার্থক্য 

#### 1. মনোলিথিক জাভাস্ক্রিপ্ট আর্কিটেকচার 

সমস্ত অ্যাপ্লিকেশন লজিক, ইউটিলিটি, স্টেট এবং UI হ্যান্ডলিং একটি একক বড় স্ক্রিপ্ট ফাইল বা শক্তভাবে সংযুক্ত কাঠামোতে থাকে। 

- **সুবিধা:** ছোট স্ক্রিপ্টের জন্য প্রাথমিকভাবে সেট আপ করা সহজ। 
- **কনস:** বৈশ্বিক পরিবর্তনশীল দূষণের উচ্চ ঝুঁকি, টাইট কাপলিং, স্কেলে বজায় রাখা অসম্ভব, জিরো কোড পুনঃব্যবহার। 

#### 2. মডুলার জাভাস্ক্রিপ্ট আর্কিটেকচার 

অ্যাপ্লিকেশন লজিক **মডিউল** নামক ছোট, স্বাধীন, স্বয়ংসম্পূর্ণ ফাইলে বিভক্ত (যেমন, ES মডিউল `import` / `export` ব্যবহার করে)। 

- **সুবিধা:** কঠোর সুযোগ এনক্যাপসুলেশন, উচ্চ পুনঃব্যবহারযোগ্যতা, সহজ পরীক্ষাযোগ্যতা, গতিশীল কোড বিভাজন এবং গাছ কাঁপানো সমর্থন করে।

```javascript
// --- mathUtils.js (Module) ---
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// --- app.js (Module Consumer) ---
import { add, multiply } from "./mathUtils.js";

console.log(add(2, 3)); // Output: 5
console.log(multiply(2, 3)); // Output: 6
```

#### তুলনা ম্যাট্রিক্স 

| বৈশিষ্ট্য | মনোলিথিক স্থাপত্য | মডুলার আর্কিটেকচার | 
| :------------------- | :----------------------------------------- | :----------------------------------------- | 
| **স্কোপ ম্যানেজমেন্ট** | গ্লোবাল সুযোগ দূষণ ঝুঁকি | ফাইল-স্তরের এনক্যাপসুলেটেড মডিউল স্কোপ | 
| **রক্ষণাবেক্ষণযোগ্যতা** | কোডবেস বাড়ার সাথে সাথে দ্রুত ক্ষয় হয় | অত্যন্ত পরিমাপযোগ্য এবং রক্ষণাবেক্ষণযোগ্য | 
| **পরীক্ষা** | অন্তর্নিহিত নির্ভরতার কারণে কঠিন | ইউনিট পরীক্ষা করা সহজ বিচ্ছিন্ন মডিউল | 
| **পারফরম্যান্স** | একবারে বড় বান্ডিল ফাইল ডাউনলোড করে | গাছ কাঁপানো এবং অলস লোডিং সমর্থন করে | 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 34. ইভেন্ট ডেলিগেশন এবং এর সুবিধাগুলি ব্যাখ্যা করুন 

**ইভেন্ট ডেলিগেশন** হল একটি ডিজাইন প্যাটার্ন যা প্রতিটি পৃথক চাইল্ড নোডের সাথে পৃথক ইভেন্ট শ্রোতাদের সংযুক্ত করার পরিবর্তে একটি অভিভাবক উপাদান স্তরে ইভেন্টগুলি পরিচালনা করতে **ইভেন্ট বুদবুদ** ব্যবহার করে। 

যখন একটি ইভেন্ট একটি শিশু উপাদানে আগুন দেয়, তখন এটি স্বয়ংক্রিয়ভাবে DOM গাছের মাধ্যমে তার মূল উপাদানগুলিতে বুদবুদ হয়ে যায়।

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

#### ইভেন্ট ডেলিগেশনের মূল সুবিধা 

1. **মেমরি দক্ষতা:** বড় তালিকার জন্য শত শতের পরিবর্তে মেমরিতে একটি একক ইভেন্ট হ্যান্ডলার তৈরি করে। 
2. **ডাইনামিক DOM সাপোর্ট:** ইভেন্ট শ্রোতাদের পুনরায় বাঁধাই না করে পৃষ্ঠা লোড হওয়ার পরে DOM-এ যোগ করা নতুন তৈরি ডায়নামিক তালিকা উপাদানগুলির জন্য স্বয়ংক্রিয়ভাবে কাজ করে। 
3. **ক্লিনার কোড:** উপাদানগুলি ধ্বংস করার সময় পরিষ্কার করার পদ্ধতিকে সহজ করে। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 35. প্রতীক এবং বাস্তব-বিশ্ব ব্যবহারের ক্ষেত্রে কি? 

একটি **প্রতীক** হল একটি আদিম ডেটা টাইপ যা ES6 এ চালু করা হয়েছে। `Symbol()` -এ প্রতিটি কল একটি **গ্যারান্টিযুক্ত অনন্য, অপরিবর্তনীয় আদিম মান** তৈরি করে। এমনকি যদি দুটি প্রতীক অভিন্ন বর্ণনা দিয়ে তৈরি করা হয়, তবে তারা কঠোরভাবে অ-সমান।

```javascript
const sym1 = Symbol("key");
const sym2 = Symbol("key");

console.log(sym1 === sym2); // Output: false
```

#### বাস্তব-বিশ্ব ব্যবহারের ক্ষেত্রে 

#### 1. ব্যক্তিগত/লুকানো বস্তুর বৈশিষ্ট্য `for...in` , `Object.keys()` , বা `JSON.stringify()` এর মতো স্ট্যান্ডার্ড পুনরাবৃত্তির রুটিনের সময় প্রতীকগুলির সাথে সংজ্ঞায়িত বৈশিষ্ট্যগুলি প্রদর্শিত হয় না।

```javascript
const ID = Symbol("id");

const user = {
  name: "Sarah",
  [ID]: "SECRET_USER_123",
};

console.log(Object.keys(user)); // Output: ["name"] (Symbol property ignored)
console.log(user[ID]); // Output: "SECRET_USER_123"
```

#### 2. কাস্টম ইটারেটর তৈরি করা ( `Symbol.iterator` ) 

আপনি `Symbol.iterator` ব্যবহার করে যেকোনো বস্তুকে পুনরাবৃত্তিযোগ্য ( `for...of` লুপ বা স্প্রেড অপারেটরের সাথে ব্যবহারযোগ্য) তে পরিণত করতে পারেন।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 36. প্রক্সি কিভাবে কাজ করে এবং আপনি কখন এটি ব্যবহার করবেন 

** `Proxy` ** অবজেক্ট আপনাকে একটি টার্গেট অবজেক্ট মোড়ানো এবং ইন্টারসেপ্ট ("ট্র্যাপ") নিম্ন-স্তরের মৌলিক ক্রিয়াকলাপগুলি (যেমন, সম্পত্তির সন্ধান, অ্যাসাইনমেন্ট, ফাংশন আহ্বান, মুছে ফেলা) সক্ষম করে। 

#### সিনট্যাক্স `const proxy = new Proxy(target, handler);`

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

#### বাস্তব-বিশ্ব ব্যবহারের ক্ষেত্রে 

1. **রিঅ্যাকটিভিটি সিস্টেম:** রি-রেন্ডার ট্রিগার করার জন্য সম্পত্তি অ্যাক্সেস এবং মিউটেশন আটকে Vue.js 3 এর প্রতিক্রিয়াশীল স্টেট ইঞ্জিনকে শক্তি দেয়। 
2. **ডেটা ভ্যালিডেশন:** অবজেক্ট এট্রিবিউট পরিবর্তন করার সময় টাইপ সেফটি এবং ব্যবসার নিয়ম বলবৎ করে। 
3. **লগিং এবং প্রোফাইলিং:** বিশ্লেষণাত্মক ডেটা বা ডিবাগ ইতিহাস রেকর্ড করতে ফাংশন কল এবং অবজেক্ট অ্যাক্সেসকে বাধা দেয়। 
4. **নেতিবাচক অ্যারে ইন্ডেক্সিং:** `arr[-1]` এর মতো নেতিবাচক অফসেটগুলিকে অনুমতি দিতে অ্যারেগুলিকে মোড়ানো হয়। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

### 37. প্রতিশ্রুতি কি এবং কিভাবে .তারপর, .ক্যাচ, .অবশেষে, .সমাধান, এবং চেইনিং কাজ 

একটি **প্রতিশ্রুতি** একটি অ্যাসিঙ্ক্রোনাস অপারেশনের চূড়ান্ত সমাপ্তি বা ব্যর্থতা এবং এর ফলস্বরূপ মানকে উপস্থাপন করে। 

- ** `Promise.resolve(value)` **: একটি প্রতিশ্রুতি তৈরি করে যা প্রদত্ত মান দিয়ে অবিলম্বে পূর্ণ হয়। 
- ** `.then(onFulfilled)` **: প্রতিশ্রুতি সমাধানের জন্য একটি কলব্যাক সংযুক্ত করে। একটি **নতুন প্রতিশ্রুতি** প্রদান করে, চেইন করার অনুমতি দেয়। 
- ** `.catch(onRejected)` **: চেইনের যে কোন জায়গায় ত্রুটি পরিচালনার জন্য একটি কলব্যাক সংযুক্ত করে। 
- ** `.finally(onFinally)` **: প্রতিশ্রুতি সফল বা ব্যর্থ হোক না কেন ক্লিনআপ কোড কার্যকর করে।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 38. কলব্যাক হেল কি এবং আপনি কিভাবে এটি ঠিক করবেন 

**কলব্যাক হেল** (এটিকে _পিরামিড অফ ডুম_ও বলা হয়) ঘটে যখন অ্যাসিঙ্ক্রোনাস অপারেশনগুলি অন্যান্য কলব্যাকের ভিতরে কলব্যাকের মধ্যে নেস্ট করা হয়। এটি কোড পড়া, বজায় রাখা এবং ডিবাগ করা অত্যন্ত কঠিন করে তোলে।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 39. কিভাবে অ্যাসিঙ্ক্রোনাস অপারেশন এবং মাইক্রোটাস্ক কিউ অগ্রাধিকার কাজ করে 

জাভাস্ক্রিপ্ট ওয়েব API (ব্রাউজারগুলিতে) বা C++ API (Node.js-এ) এর মাধ্যমে **অসিঙ্ক্রোনাস অপারেশন** পরিচালনা করে। একবার সম্পূর্ণ হয়ে গেলে, তাদের কলব্যাকগুলিকে **ইভেন্ট লুপ** দ্বারা নিরীক্ষণ করা সারিতে রাখা হয়: 

1. **মাইক্রোটাস্ক সারি:** উচ্চ অগ্রাধিকার ( `Promises` , `queueMicrotask` , `MutationObserver` )। 
2. **ম্যাক্রোটাস্ক কিউ (টাস্ক কিউ):** সাধারণ অগ্রাধিকার ( `setTimeout` , `setInterval` , I/O)। 

> **নিয়ম:** ম্যাক্রোটাস্ক কিউ থেকে একটি আইটেম নেওয়ার আগে ইভেন্ট লুপ **সম্পূর্ণ মাইক্রোটাস্ক সারি** খালি করে।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 40. ফাংশন ঘোষণা, ফাংশন এক্সপ্রেশন এবং বেনামী ফাংশনের মধ্যে পার্থক্য কী

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

| প্রকার | সিনট্যাক্স | উত্তোলন? | নামের প্রয়োজনীয়তা | 
| :--------------- | :--------------- | :------------ | :----------------- | 
| **ঘোষণা** | `function foo() {}` | হ্যাঁ (ফাংশন বডি) | সর্বদা নাম দেওয়া | 
| **অভিব্যক্তি** | `const foo = function() {}` | না (পরিবর্তনশীল নিয়ম প্রযোজ্য) | নাম বা বেনামী | 
| **বেনামী** | `function() {}` | না | নামহীন | 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 41. অ্যারো ফাংশন এবং রেগুলার ফাংশনের মধ্যে পার্থক্য কী 

ES6 এ প্রবর্তিত, **অ্যারো ফাংশন** একটি সংক্ষিপ্ত বাক্য গঠন প্রদান করে কিন্তু তাদের নিজস্ব `this` , `arguments` বা `super` বাইন্ডিং নেই।

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

| বৈশিষ্ট্য | নিয়মিত ফাংশন | তীর ফাংশন | 
| :------------ | :-------------------------------------- | :--------------------------------------------------------- | 
| ** `this` বাঁধাই** | গতিশীল (আমন্ত্রণ প্রসঙ্গের উপর ভিত্তি করে) | আভিধানিক (অভিভাবক সুযোগ থেকে উত্তরাধিকারী) | 
| ** `arguments` অবজেক্ট** | উপলব্ধ | উপলব্ধ নয় (বাকী প্যারামিটার `...args` ব্যবহার করুন) | 
| **কনস্ট্রাক্টর ব্যবহার** | হ্যাঁ ( `new Function()` ) | না ( `TypeError` নিক্ষেপ করে) | 
| **ডুপ্লিকেট প্যারামিটার** | অ-কঠোর মোডে অনুমোদিত | অনুমোদিত নয় | 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 42. একটি অবিলম্বে আমন্ত্রিত ফাংশন এক্সপ্রেশন (IIFE) কি এবং কেন এটি ব্যবহার করা হয় 

একটি **IIFE** একটি ফাংশন যা সংজ্ঞায়িত হওয়ার সাথে সাথেই কার্যকর হয়। এটি একটি আমন্ত্রণ অপারেটর `()` বন্ধনীতে একটি ফাংশন এক্সপ্রেশন মোড়ানোর মাধ্যমে তৈরি করা হয়েছে।

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

#### কেন একটি আইআইএফই ব্যবহার করবেন? 

1. **বৈশ্বিক দূষণ এড়িয়ে চলুন:** গ্লোবাল ভেরিয়েবল ঘোষণা করা প্রতিরোধ করে যা অন্যান্য স্ক্রিপ্টের সাথে বিরোধপূর্ণ হতে পারে। 
2. **এনক্যাপসুলেশন:** বন্ধের মাধ্যমে ব্যক্তিগত ভেরিয়েবল তৈরি করে। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 43. তরকারি কি এবং কেন এটি দরকারী 

**কারি করা** হল একাধিক আর্গুমেন্ট সহ একটি ফাংশনকে নেস্টিং ফাংশনের একটি সিকোয়েন্সে রূপান্তর করার প্রক্রিয়া, প্রতিটি একটি একক আর্গুমেন্ট নেয়।

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

#### কেন তরকারি উপকারী? 

- প্রিসেট কনফিগারেশন আর্গুমেন্টের সাথে ফাংশন পুনরায় ব্যবহার করতে **আংশিক অ্যাপ্লিকেশন** সক্ষম করে। 
- **কার্যকর রচনা** এবং মডুলার কোড ডিজাইন উন্নত করে। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 44. বিশুদ্ধ ফাংশন কি এবং কেন গুরুত্বপূর্ণ 

একটি **বিশুদ্ধ ফাংশন** একটি ফাংশন যা: 

1. **একই ইনপুট** (ডিটারমিনিস্টিক) এর জন্য সর্বদা **একই আউটপুট** প্রদান করে। 
2. **কোন পার্শ্ব প্রতিক্রিয়া নেই** (গ্লোবাল ভেরিয়েবল, মিউটেট আর্গুমেন্ট বা কল এক্সটার্নাল এপিআই পরিবর্তন করে না)।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 45. হায়ার-অর্ডার ফাংশন এবং রিকার্সিভ ফাংশন কি 

#### 1. হায়ার-অর্ডার ফাংশন (HOF) 

একটি **হায়ার-অর্ডার ফাংশন** এমন একটি ফাংশন যা হয় অন্য একটি ফাংশনকে একটি আর্গুমেন্ট হিসাবে গ্রহণ করে, একটি ফাংশন প্রদান করে বা উভয়ই।

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

#### 2. পুনরাবৃত্ত ফাংশন 

একটি **পুনরাবৃত্ত ফাংশন** হল এমন একটি ফাংশন যা **বেস কেস** (স্টপিং কন্ডিশন) এ পৌঁছানো পর্যন্ত নিজেকে কল করে।

```javascript
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // Output: 120
```

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 46. স্কোপ এবং ক্লোজার ব্যাখ্যা করুন (গ্লোবাল, ব্লক এবং লেক্সিকাল স্কোপ) 

#### 1. জাভাস্ক্রিপ্টে স্কোপ 

- **গ্লোবাল স্কোপ:** ফাংশন/ব্লকের বাইরে ঘোষিত ভেরিয়েবল, যেকোনো জায়গায় অ্যাক্সেসযোগ্য। 
- **লেক্সিকাল / ফাংশন স্কোপ:** একটি ফাংশনের ভিতরে ঘোষিত ভেরিয়েবলগুলি শুধুমাত্র সেই ফাংশন এবং নেস্টেড অভ্যন্তরীণ ফাংশনের মধ্যে অ্যাক্সেসযোগ্য। 
- **ব্লক স্কোপ:** `let` এবং `{}` -এর ভিতরে `const` -এর সাথে ঘোষিত ভেরিয়েবলগুলি শুধুমাত্র সেই ব্লকের মধ্যেই অ্যাক্সেসযোগ্য।

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

#### 2. বন্ধ 

একটি **ক্লোজার** বাইরের ফাংশন ফিরে আসার পরেও একটি অভ্যন্তরীণ ফাংশনকে তার বাইরের ফাংশনের সুযোগে অ্যাক্সেস দেয়।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 47. এই কীওয়ার্ডটি বিভিন্ন প্রসঙ্গে কীভাবে আচরণ করে `this` এর মান **কীভাবে** রানটাইমে একটি ফাংশন কল করা হয় তার উপর নির্ভর করে:

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 48. ব্যবহারিক ব্যবহারের ক্ষেত্রে কল, আবদ্ধ এবং প্রয়োগ ব্যাখ্যা করুন 

এই সুস্পষ্ট বাঁধাই পদ্ধতিগুলি ডেভেলপারদের একটি ফাংশন কলের ভিতরে কোন বস্তুকে `this` উল্লেখ করা উচিত তা নির্দিষ্ট করতে দেয়৷

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

#### পদ্ধতি তুলনা 

| পদ্ধতি | মৃত্যুদন্ড | পরামিতি বিন্যাস | রিটার্ন ভ্যালু | 
| :------------ | :--------- | :------------------- | :--------- | 
| ** `call()` ** | অবিলম্বে | কমা দ্বারা পৃথক করা তালিকা | ফাংশন রিটার্ন মান | 
| ** `apply()` ** | অবিলম্বে | মানের অ্যারে | ফাংশন রিটার্ন মান | 
| ** `bind()` ** | বিলম্বিত | কমা দ্বারা পৃথক করা তালিকা | একটি নতুন আবদ্ধ ফাংশন | 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

### 49. জাভাস্ক্রিপ্টে আদিম এবং নন-প্রিমিটিভ ডেটা টাইপগুলি কী কী 

জাভাস্ক্রিপ্ট গতিশীলভাবে টাইপ করা হয় এবং ডেটাকে দুটি প্রধান গোষ্ঠীতে শ্রেণীবদ্ধ করে: **আদিম** প্রকার (মান দ্বারা পাস) এবং **অ-আদি / রেফারেন্স** প্রকার (রেফারেন্স দ্বারা পাস)। 

#### 1. আদিম ডেটা প্রকার (7 প্রকার) 

কল স্ট্যাক মেমরিতে সরাসরি সংরক্ষিত। প্রকৃতির দ্বারা অপরিবর্তনীয়। 

- ** `string` **: পাঠ্য ডেটা ( `"hello"` ) 
- ** `number` **: ডাবল-নির্ভুল ফ্লোটিং-পয়েন্ট নম্বর ( `42` , `3.14` ) 
- ** `boolean` **: যৌক্তিক মান ( `true` / `false` ) 
- ** `undefined` **: ভেরিয়েবল ঘোষণা করা হয়েছে কিন্তু একটি মান নির্ধারণ করা হয়নি 
- ** `null` **: কোনো বস্তুর মান ইচ্ছাকৃত অনুপস্থিতি 
- ** `symbol` **: অনন্য এবং অপরিবর্তনীয় আদিম মান (ES6) 
- ** `bigint` **: নির্ভুল-নির্ভুল পূর্ণসংখ্যা ( `9007199254740991n` ) 

#### 2. নন-প্রিমিটিভ / রেফারেন্স ডেটা প্রকার 

গাদা মেমরিতে সংরক্ষিত; ভেরিয়েবল একটি রেফারেন্স ঠিকানা সংরক্ষণ করে। 

- ** `object` **: কী-মান জোড়ার সংগ্রহ ( `{ key: "value" }` ) 
- ** `array` **: মানের তালিকা ( `[1, 2, 3]` ) — `object` এর বিশেষ উপপ্রকার 
- ** `function` **: এক্সিকিউটেবল কোড ব্লক - কলযোগ্য বস্তু

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 50. আলগা সমতা (==) এবং কঠোর সমতা (===) এর মধ্যে পার্থক্য কী? 

| বৈশিষ্ট্য | `==` (লুজ ইকুয়ালিটি) | `===` (কঠোর সমতা) | 
| :---------------- | :--------------------------------------------------------- | :--------------------------------------------------------- | 
| **টাইপ জবরদস্তি** | সম্পাদিত (যদি ভিন্ন ধরনের রূপান্তর করে) | সঞ্চালিত হয়নি (কঠোরভাবে টাইপ মিল প্রয়োগ করে) | 
| **পারফরম্যান্স** | রূপান্তর যুক্তির কারণে সামান্য ধীর | দ্রুত (সরাসরি মেমরি/টাইপ তুলনা) | 
| **সর্বোত্তম অনুশীলন** | নিরুৎসাহিত (অপ্রত্যাশিত প্রান্ত ক্ষেত্রে বাড়ে) | **নির্ভরযোগ্য কোডের জন্য আদর্শ অনুশীলন**

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 51. Destructuring কি এবং এটি অবজেক্ট এবং অ্যারেতে কিভাবে কাজ করে 

**ডিস্ট্রাকচারিং** হল একটি সিনট্যাক্স যা ES6 এ প্রবর্তন করা হয়েছে যা অ্যারে বা বৈশিষ্ট্য থেকে মানগুলিকে আলাদা ভেরিয়েবলে বের করার অনুমতি দেয়।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 52. কিভাবে ইউনারি অপারেটর, নালিশ কোলেসিং (??), এবং ঐচ্ছিক চেইনিং (?.) কাজ করে 

#### 1. ইউনারি অপারেটর 

রূপান্তর বা গাণিতিক ক্রিয়াকলাপ সম্পাদন করতে একটি একক অপারেন্ডে কাজ করুন।

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

#### 2. নালিশ কোলেসিং অপারেটর ( `??` ) 

ডান-হাতের অপারেন্ডটি শুধুমাত্র তখনই ফেরত দেয় যখন বাম-হাতের অপারেন্ডটি হয় ** `null` ** বা ** `undefined` ** ( `||` এর বিপরীতে, যা ZZZINLINECODE268, ZZ28ZINCODE, ZZ28ZINCODE, `||` এর মত সমস্ত মিথ্যা মানগুলিতে ট্রিগার করে `false` )।

```javascript
const count = 0;

console.log(count || 10); // Output: 10 (0 is falsy, so it falls back)
console.log(count ?? 10); // Output: 0  (0 is NOT null or undefined)

const name = null;
console.log(name ?? "Default Name"); // Output: Default Name
```

#### 3. ঐচ্ছিক চেইনিং অপারেটর ( `?.` ) 

যদি একটি মধ্যবর্তী রেফারেন্স `null` বা `undefined` হয় তবে রানটাইম `TypeError` না করে নিরাপদে নেস্টেড বৈশিষ্ট্যগুলি পড়ে।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 53. মূল্য দ্বারা কল কি বনাম রেফারেন্স দ্বারা কল 

জাভাস্ক্রিপ্টে, ভেরিয়েবল অ্যাসাইনমেন্ট এবং আর্গুমেন্ট পাসিং ডেটা টাইপের উপর নির্ভর করে ভিন্নভাবে আচরণ করে: 

- **প্রিমিটিভস (মূল্য অনুসারে কল):** মানগুলি সরাসরি একটি নতুন মেমরি স্ট্যাকের অবস্থানে অনুলিপি করা হয়। একটি অনুলিপি পরিবর্তন করা মূলকে প্রভাবিত করে না। 
- **বস্তু/অ্যারে (রেফারেন্স দ্বারা কল):** মেমরি ঠিকানা (পয়েন্টার) কপি করা হয়েছে। উভয় ভেরিয়েবল একই অন্তর্নিহিত হিপ অবজেক্টের দিকে নির্দেশ করে।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 54. শ্যালো কপি এবং ডিপ কপির মধ্যে পার্থক্য কী 

#### 1. অগভীর অনুলিপি 

শীর্ষ-স্তরের বৈশিষ্ট্যগুলি অনুলিপি করে। যাইহোক, নেস্টেড অবজেক্ট বা অ্যারে এখনও মূল অবজেক্টের সাথে রেফারেন্স শেয়ার করে। 

#### 2. গভীর অনুলিপি 

মেমরিতে একটি সম্পূর্ণ স্বাধীন অনুলিপি তৈরি করে অবজেক্ট হায়ারার্কির প্রতিটি স্তরের নকল করে।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 55. মিউটেশন কি এবং কিভাবে আপনি অপরিবর্তনীয়তা অর্জন করবেন 

**মিউটেশন** মানে একটি বিদ্যমান বস্তু বা অ্যারে সরাসরি মেমরিতে পরিবর্তন করা। **অপরিবর্তনশীলতা** যখন অবস্থার পরিবর্তন ঘটে তখন নতুন দৃষ্টান্ত তৈরি করে পরিবর্তনগুলিকে বাধা দেয়।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 56. লুপের জন্য...ইন এবং ফর...এর মধ্যে পার্থক্য কী? 

| বৈশিষ্ট্য | `for...in` | `for...of` | 
| :--------- | :-------------------------------------------- | :----------------------------------------- | 
| **পুনরাবৃত্ত হয়** | গণনাযোগ্য **কী/সূচী** | **মূল্য** পুনরাবৃত্তিযোগ্য সংগ্রহ | 
| **লক্ষ্য ডেটা প্রকার** | প্লেইন অবজেক্ট, অ্যারে, স্ট্রিং | অ্যারে, স্ট্রিং, সেট, মানচিত্র, নোডলিস্ট | 
| **কেস ব্যবহার করুন** | বস্তু বৈশিষ্ট্যের উপর পুনরাবৃত্তি | অ্যারে/সংগ্রহ মানগুলির মাধ্যমে পুনরাবৃত্তি করা |

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 57. অপরিহার্য অ্যারে এবং স্ট্রিং পদ্ধতি এবং পদ্ধতি চেইনিং 

#### 1. অ্যারে পুনরাবৃত্তি পদ্ধতি 

- ** `map()` **: প্রতিটি উপাদানকে রূপান্তরিত করে এবং সমান দৈর্ঘ্যের একটি **নতুন অ্যারে** প্রদান করে। 
- ** `forEach()` **: প্রতিটি উপাদানের জন্য একটি কলব্যাক কার্যকর করে; `undefined` (পার্শ্ব প্রতিক্রিয়ার জন্য ব্যবহৃত) ফেরত দেয়। 
- ** `reduce()` **: উপাদানগুলিকে একটি একক মান (সংখ্যা, বস্তু, অ্যারে) এ জমা করে।

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

#### 2. `slice()` বনাম `splice()` | পদ্ধতি | উদ্দেশ্য | Mutates আসল? | রিটার্নস | 
| :----------------------------------- | :-------------------------------------------- | :---------------- | :---------------------- | 
| ** `slice(start, end)` ** | একটি অ্যারের একটি বিভাগ বের করে | ❌ না | নতুন সাবয়ারে | 
| ** `splice(start, count, ...items)` ** | অ্যারে থেকে উপাদান যোগ করে/মুছে দেয় | ✅ হ্যাঁ | মুছে ফেলা আইটেম অ্যারে |

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

#### 3. পদ্ধতি চেইনিং উদাহরণ 

একটি পরিচ্ছন্ন অভিব্যক্তিতে ক্রমিকভাবে একাধিক অ্যারে/স্ট্রিং অপারেশনকে একত্রিত করে।

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

console.log(`Total Inventory Value: ${totalInStockValue}`);
// Output: Total Inventory Value: $1375
```

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

### 58. DOM এবং BOM ম্যানিপুলেশনের মধ্যে পার্থক্য কী 

#### 1. DOM (ডকুমেন্ট অবজেক্ট মডেল) 

**DOM** হল এইচটিএমএল ডকুমেন্ট স্ট্রাকচারের একটি অবজেক্ট-ওরিয়েন্টেড উপস্থাপনা যা নোডের একটি ট্রি হিসাবে। এটি জাভাস্ক্রিপ্টকে পৃষ্ঠার বিষয়বস্তু, গঠন এবং শৈলী পরিবর্তন করার অনুমতি দেয়। 

#### 2. BOM (ব্রাউজার অবজেক্ট মডেল) 

**BOM** নথির বিষয়বস্তুর বাইরে ব্রাউজার পরিবেশের প্রতিনিধিত্ব করে। এতে `window` , `navigator` , `screen` , `location` , এবং `history` এর মতো বস্তু অন্তর্ভুক্ত রয়েছে।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 59. ইভেন্ট মেকানিজম ব্যাখ্যা করুন: বুদবুদ করা, ক্যাপচারিং, ডেলিগেশন, স্টপ প্রোপাগেশন, এবং ডিফল্ট প্রতিরোধ 

ইভেন্টগুলি তিনটি অনুক্রমিক পর্যায়ে DOM এর মাধ্যমে প্রচারিত হয়: 

1. **ক্যাপচারিং ফেজ:** ইভেন্ট `window` থেকে টার্গেট এলিমেন্টে নেমে আসে। 
2. **টার্গেট ফেজ:** ইভেন্ট টার্গেট এলিমেন্টে পৌঁছায়। 
3. **বাবলিং ফেজ:** ইভেন্ট বুদবুদ টার্গেট এলিমেন্ট থেকে `window` এ ফিরে আসে।

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

#### মূল ইভেন্ট পদ্ধতির সারাংশ 

- ** `event.preventDefault()` **: সেই ইভেন্টের জন্য ব্রাউজারের ডিফল্ট আচরণকে বাধা দেয় (যেমন, ফর্ম জমা পুনঃলোড, লিঙ্ক পুনঃনির্দেশ)। 
- ** `event.stopPropagation()` **: ইভেন্টটিকে আরও উপরে (বুদবুদ) বা নিচে (ক্যাপচার) DOM ট্রি ভ্রমণ থেকে বাধা দেয়। 
- ** `event.stopImmediatePropagation()` **: প্রচার রোধ করে এবং _same_ উপাদানের অন্যান্য শ্রোতাদের কার্যকর করা থেকে বিরত করে। 

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 60. কুকিজ, স্থানীয় স্টোরেজ এবং সেশন স্টোরেজের মধ্যে পার্থক্য কী 

| বৈশিষ্ট্য | কুকিজ | স্থানীয় সঞ্চয়স্থান | সেশন স্টোরেজ | 
| :------------------ | :--------------------------------------------------------- | :-------------------------------------- | :--------------- | 
| **ক্ষমতা** | ~4 KB | ~5-10 MB | ~5 MB | 
| **মেয়াদ শেষ** | `Expires` / `Max-Age` এর মাধ্যমে ম্যানুয়ালি সেট করুন | কখনই না (ম্যানুয়ালি পরিষ্কার না হওয়া পর্যন্ত টিকে থাকে) | ট্যাব/উইন্ডো বন্ধে | 
| **সার্ভার স্থানান্তর** | প্রতিটি HTTP অনুরোধের সাথে পাঠানো হয় | শুধুমাত্র ক্লায়েন্ট-সাইড | শুধুমাত্র ক্লায়েন্ট-সাইড | 
| **স্কোপ** | একই মূল (ট্যাব/উইন্ডোজ জুড়ে অ্যাক্সেসযোগ্য) | একই মূল | একই ট্যাব/উইন্ডো সেশন | 
| **অ্যাক্সেস API** | `document.cookie` (ম্যানুয়াল স্ট্রিং পার্সিং) | `window.localStorage` API | `window.sessionStorage` API |

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 61. কীভাবে লোকেশন প্রপার্টি, হিস্ট্রি অ্যাকসেস, এবং পেজ রিডাইরেকশান কাজ করে 

#### 1. অবস্থান বৈশিষ্ট্য ( `window.location` ) 

বর্তমান পৃষ্ঠার URL এবং পৃষ্ঠা নেভিগেশনের প্রক্রিয়া সম্পর্কে তথ্য প্রদান করে।

```javascript
console.log(window.location.href); // Full URL
console.log(window.location.hostname); // e.g., "example.com"
console.log(window.location.pathname); // e.g., "/dashboard"
console.log(window.location.search); // Query parameters e.g., "?id=12"
console.log(window.location.hash); // Anchor tag e.g., "#section2"
```

#### 2. পুনর্নির্দেশ কৌশল

```javascript
// Assign: Adds entry to browser history (back button works)
window.location.assign("[https://example.com](https://example.com)");

// Replace: Overwrites current history entry (back button does NOT go to previous page)
window.location.replace("[https://example.com](https://example.com)");

// Reload current page
window.location.reload();
```

#### 3. ইতিহাস API ( `window.history` ) 

ব্রাউজার সেশন নেভিগেশন পরিচালনা করে, একক পৃষ্ঠা অ্যাপ্লিকেশন (এসপিএ) এর জন্য প্রয়োজনীয়।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 62. কিভাবে আবর্জনা সংগ্রহ কাজ করে এবং কিভাবে আপনি মেমরি লিক প্রতিরোধ করবেন 

জাভাস্ক্রিপ্ট গারবেজ কালেকশন অ্যালগরিদম দ্বারা চালিত স্বয়ংক্রিয় মেমরি ম্যানেজমেন্ট ব্যবহার করে, প্রাথমিকভাবে **মার্ক-এন্ড-সুইপ**। 

#### মার্ক-এন্ড-সুইপ অ্যালগরিদম 

1. ইঞ্জিনটি **রুট** এর একটি সেট সংজ্ঞায়িত করে (যেমন, গ্লোবাল `window` অবজেক্ট, বর্তমানে কল স্ট্যাক ভেরিয়েবল চালাচ্ছে)। 
2. এটি সমস্ত রেফারেন্সগুলিকে বারবার অতিক্রম করে, **মার্কিং** নাগালযোগ্য বস্তুগুলিকে। 
3. পৌঁছানো যায় না এমন বস্তু (মূলের সাথে সংযুক্ত নয়) **সুইপ্ট** (মেমরি থেকে মুক্ত)।

```text
[Roots (Window / Stack)] ---> Accessible Object A ---> Accessible Object B
                               Unreachable Object C (Marked for Cleanup)
```

#### স্মৃতি ফাঁসের সাধারণ কারণ এবং সমাধান

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 63. কিভাবে JS ইঞ্জিনগুলি এক্সিকিউশনকে অপ্টিমাইজ করে (হিডেন ক্লাস, ইনলাইন ক্যাশিং, মনোমরফিজম) 

V8-এর মতো আধুনিক ইঞ্জিনগুলি জাস্ট-ইন-টাইম (JIT) সংকলন কৌশল প্রয়োগ করে গতিশীল জাভাস্ক্রিপ্ট এক্সিকিউশনকে অপ্টিমাইজ করে। 

#### 1. লুকানো ক্লাস (আকৃতি) 

জাভাস্ক্রিপ্ট গতিশীলভাবে টাইপ করা হয়, তবে V8 মেমরিতে বস্তুর আকার এবং সম্পত্তি অফসেটগুলি ট্র্যাক করতে হুডের নীচে লুকানো অভ্যন্তরীণ ক্লাস তৈরি করে।

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

#### 2. ইনলাইন ক্যাশিং (IC) 

V8 ব্যয়বহুল সম্পত্তি অফসেট অনুসন্ধানকে বাইপাস করার জন্য পূর্ববর্তী লুকআপের উপর ভিত্তি করে বস্তুর বৈশিষ্ট্যগুলির মেমরি অবস্থানগুলি ক্যাশ করে। 

#### 3. মনোমরফিক বনাম পলিমরফিক ফাংশন 

- **মনোমরফিক:** একটি ফাংশন সর্বদা **ঠিক একই লুকানো ক্লাস** সহ বস্তু গ্রহণ করে। (ভারীভাবে অপ্টিমাইজ করা)। 
- **পলিমরফিক:** একটি ফাংশন বিভিন্ন লুকানো ক্লাস সহ বস্তু গ্রহণ করে (ফলব্যাক চেকের কারণে ধীর গতিতে)।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 64. আধুনিক ES6+ বৈশিষ্ট্য এবং টেমপ্লেট লিটারাল 

#### 1. টেমপ্লেট লিটারাল এবং ট্যাগ করা টেমপ্লেট 

টেমপ্লেট লিটারালগুলি মাল্টিলাইন স্ট্রিং, স্ট্রিং ইন্টারপোলেশন এবং ট্যাগ করা টেমপ্লেটের মাধ্যমে কাস্টম পার্সিং সমর্থন করে।

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
const taggedOutput = highlight`Product: ${item}, Price:${price}`;
console.log(taggedOutput);
// Output: Product: <mark>Laptop</mark>, Price: $<mark>999</mark>
```

#### 2. সিনট্যাক্স বর্ধিতকরণ (ES6+)

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 65. ওয়েব ওয়ার্কার কি এবং কিভাবে তারা জাভাস্ক্রিপ্টে মাল্টিথ্রেডিং সক্ষম করে 

জাভাস্ক্রিপ্ট একটি একক প্রধান থ্রেডে চলে। **ওয়েব ওয়ার্কার** UI/ইভেন্ট লুপ ব্লক না করেই আলাদা থ্রেডে ভারী ব্যাকগ্রাউন্ড স্ক্রিপ্ট চালানোর অনুমতি দেয়। 

> **দ্রষ্টব্য:** ওয়েব ওয়ার্কারদের DOM, `window` বা `document` অবজেক্টে **না** অ্যাক্সেস নেই। তারা মেসেজ পাসিং ( `postMessage` ) এর মাধ্যমে মূল থ্রেডের সাথে যোগাযোগ করে।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 66. ডিবাউন্সিং এবং থ্রটলিং কিভাবে কাজ করে 

**ডিবাউন্সিং** এবং **থ্রটলিং** উভয়ই হার-সীমিত করার কৌশল যা একটি উচ্চ-ফ্রিকোয়েন্সি ইভেন্ট হ্যান্ডলার কতবার কার্যকর করে তা নিয়ন্ত্রণ করতে ব্যবহৃত হয়।

 #### 1. ডিবাউন্সিং 

**শেষবার** ইভেন্টটি ট্রিগার হওয়ার পর থেকে একটি নির্দিষ্ট সময়ের ব্যবধান শেষ না হওয়া পর্যন্ত একটি ফাংশন কার্যকর করতে বিলম্ব করে। (সার্চ বার স্বয়ংসম্পূর্ণ জন্য আদর্শ)। 

#### 2. থ্রটলিং 

একটি ফাংশন সর্বোচ্চ **নির্দিষ্ট টাইম উইন্ডোতে একবার** চালানো নিশ্চিত করে, ইভেন্ট যতবারই ফায়ার হোক না কেন। (স্ক্রোল বা রিসাইজ হ্যান্ডলারদের জন্য আদর্শ)।

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)** 

--- 

### 67. কীভাবে অলস লোডিং কৌশলগুলি চিত্র এবং কোড মডিউলগুলির জন্য কাজ করে 

অলস লোডিং অ-সমালোচনামূলক সংস্থানগুলির সূচনা বা লোডিংকে বিলম্বিত করে যতক্ষণ না সেগুলি প্রকৃতপক্ষে প্রয়োজন হয় (যেমন, ভিউপোর্টে প্রবেশ করার সময়)। 

#### 1. নেটিভ ইমেজ ল্যাজি লোডিং ( `loading="lazy"` )

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

#### 2. কাস্টম অলস লোডিংয়ের জন্য ইন্টারসেকশন অবজারভার API

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

#### 3. ডায়নামিক কোড-আমদানি সহ বিভাজন

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

**[⬆ উপরে ফিরে যান](#সারণি-অফ-কন্টেন্ট)**