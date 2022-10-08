![book](https://user-images.githubusercontent.com/70065792/194689013-a1e25eed-5e15-4107-b618-a3a5af6e49a9.jpg)

&nbsp;

### System Requirements

Download and install the following software:

- [Node.js](https://nodejs.org/en/download/)
- [Visual Studio Code](https://code.visualstudio.com/download)

&nbsp;

### Getting Started

1. Fork and clone this repository.
2. Open the repository in Visual Studio Code.
3. Open the terminal in Visual Studio Code.
4. Copy code from the `md` file and paste it into the `index.js` file.
5. Run the code using the `node index.js` command.
6. Repeat steps 4 and 5 until you have completed all the exercises.
7. Preferably, install nodemon globally using `npm install -g nodemon` and run the code using `nodemon index.js` command.

&nbsp;

### TABLE OF CONTENT

| SN  |                   Topics                    |                                                    Description |
| --- | :-----------------------------------------: | -------------------------------------------------------------: |
| 0   |           [Introduction](#intro)            |                                     Introduction to JavaScript |
| 1   |           [variables](#variables)           |                       Variable Declaration, types and examples |
| 2   |          [Data-types](#data-types)          |         Data types in JavaScript,: Primitive and Non-primitive |
| 3   |           [Functions](#functions)           |        Function Expression, Arrow function, Anonymous Function |
| 4   |        [Type-casting](#type-casting)        |            Type conversion of strings to number and vice-versa |
| 5   |              [Arrays](#arrays)              |    Arrays and array methods: pop, push, unshift, slice, splice |
| 6   |                [JSON](#json)                |                                     Javascript Object Notation |
| 7   | [comparison-operator](#comparison-operator) |   Greater than, equal to, Less than, Less than or equal to etc |
| 8   |    [Conditional statement](#conditional)    |             if-else, if-else-if-else, switch,ternary operators |
| 9   |               [Loops](#loops)               | for, while, do-while, for-in, for-of, forEach, map, filter etc |
| 10  |           [Exception](#exception)           |                     throw error statement, try catch statement |
| 11  |           [Operators](#operators)           |        Assignment,ConditionalComma,String,Arithmetic operators |
| 12  |             [Classes](#classes)             |                 Class constructor, this-keyword, static method |
| 13  |            [Promises](#promises)            |                        reject,resolve, then-catch, async-await |
| 14  |      [Rest-Spread-Op](#rest-spread-op)      |                                       Copy and spread contents |
| 15  |    [Calculator-exercise](#cal-exercise)     |                                            Calculator exercise |
| 16  |                 [HOF](#HOF)                 |                                         reduce,map,filter,find |
| 17  |       [Destructuring](#destructuring)       |                        Destructuring assignment, array, object |
| 18  |           [Resources](#resources)           |                                                                |

&nbsp;

### Introduction <a name="intro"></a>

_JavaScript is a programming language that is used to make web pages interactive. It is a lightweight, interpreted programming language with first-class functions, most known as the scripting language for Web pages, but it's used in many non-browser environments as well. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles._

This :file_folder: `repository` contains a collection of JavaScript topics and exercises.Each topic is explained in a separate `md` file. The `md` file contains the topic and the exercises. The exercises are written in `JavaScript` and can be run in the `Node.js` environment.

&nbsp;

### Variables <a name="variables"></a>

#### Variables are containers for storing data values.

> In this example :rabbit: bunny is a variable, "bunny" is the value of the variable, and "string" is the data type.

```js
var bunny = 'lucy';
var dog = 'Tom';
var cat = 'Molly';

console.log(bunny, dog, cat);
```

---

### Variable Naming Rules

- JavaScript variables must be identified with unique names.

- JavaScript uses the keyword var to declare variables.

- The equal sign is used to assign values to variables.

- The semicolon ends the statement.

- JavaScript is case sensitive. This means that bunny and Bunny are different variables.

- JavaScript variables must begin with a letter, underscore, or dollar sign.

#### Acceptable naming conventions :heavy_check_mark:

```js
var bunny = 'lucy';
var _bunny = 'lucy';
var $bunny = 'lucy';
```

#### Unacceptable naming conventions :x:

```js
var 1bunny = 'lucy';
var -bunny = 'lucy';
var @bunny = 'lucy';
```

---

### Variable Declarations

#### JavaScript has three types of variable declarations:

- var
- let
- const

### When to use the three types of variable declarations

#### var

- Declares a variable, optionally initializing it to a value.

- The scope of a variable declared with var is its current execution context, which is either the enclosing function or, for variables declared outside any function, global.

- Variables declared with var are hoisted to the top of their scope and are initialized with a value of undefined.

#### let

- Declares a block scope local variable, optionally initializing it to a value.

- The scope of a variable declared with let is the block in which it is declared, which can be smaller than the containing function.

- Variables declared with let are hoisted to the top of their scope but are not initialized. They are in a "temporal dead zone" from the start of the block until the declaration is processed.

#### const

- Declares a block-scoped, read-only named constant.

- The scope of a constant declared with const is the block in which it is declared, which can be smaller than the containing function.

- Constants cannot be declared in the same block as a let or var variable with the same name.

- Constants cannot be declared with the same name as a function or a variable in the same block.

- Constants cannot be redeclared or reassigned.

- Constants must be assigned an initial value.

---

### Variable Scope

#### JavaScript has two types of scope:

- Local scope

- Global scope

#### Local scope

- Variables declared within a JavaScript function, become LOCAL to the function.

- Local variables have Function scope: They can only be accessed from within the function.

- Local variables are created when a function starts, and deleted when the function is completed.

#### Code sample

```js
function animalName() {
  var bunny = 'lucy'; // Local variable
  console.log(bunny);
}
```

#### Global scope

- A variable declared outside a function, becomes GLOBAL.

- A global variable has global scope: All scripts and functions on a web page can access it.

- Global variables are created when you assign a value to them.

- Global variables are deleted when you close the page.

#### Code sample

```js
var bunny = 'lucy'; // Global variable
function animalName() {
  console.log(bunny);
}
```

---

### Exercises

1. Create a variable called `bunny` and assign it the value of your bunny's name.

2. Use the `let` keyword to declare a variable called `dog` and assign it the value of your dog's name.

---

### Data Types <a name="data-types"></a>

1. Primitive Data Types
2. Non-Primitive Data Types

#### Primitive

1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol

#### Non-Primitive

1. Object
2. Array
3. Function

#### Examples of Primitive Data Types

##### Number

```javascript
var bunny_height = 3.14; // A number with decimals
var bunny_height = 3; // A number without decimals
```

##### String

```javascript
var bunny_name = 'Lucy'; // Using double quotes
var bunny_name = 'Tom'; // Using single quotes
```

##### Boolean

```javascript
var isBunnyHappy = true;
var isBunnyHappy = false;
```

##### Null

```javascript
var bunny = null; // Value is null. Null means "non-existent"
```

##### Undefined

```javascript
var bunny; // Value is undefined. Undefined means a variable has been declared, but not defined
```

##### Symbol

```javascript
var bunny = Symbol('Lucy'); // Symbol is a primitive data type, whose instances are unique and immutable
```

---

#### Examples of Non-Primitive Data Types

##### Object

```javascript
var bunny = {
  name: 'Lucy',
  age: 3,
  isHappy: true,
};

console.log(bunny.name); // Output: Lucy
console.log(bunny.age); // Output: 3
console.log(bunny.isHappy); // Output: true
```

##### Array

```javascript
var bunnies = ['Lucy', 'Tom', 'Molly'];
console.log(bunnies[0]); // Output: Lucy
console.log(bunnies[1]); // Output: Tom
```

##### Function

```javascript
function adoptBunny() {
  console.log('Adopted a bunny');
}
```

---

##### Exercise

Declare a variable named :rabbit:`bunny` and assign it to an object with the following properties: `name`, `age`, and `isHappy`. Set the value of `name` to a string, `age` to a number, and `isHappy` to a boolean.

---

&nbsp;

#### Functions <a name="functions"></a>

- Functions are a set of statements that perform a task or calculates a value.

- Functions are executed when "something" invokes it (calls it).

Example of function declaration:

```javascript
// sum up the total bunnies in a farm
function sumBunnies() {
  var blackBunnies = 10;
  var whiteBunnies = 20;
  var totalBunnies = blackBunnies + whiteBunnies;
  return totalBunnies;
}
```

- The function above is called `sumBunnies` and it has no parameters.

- The function above returns the value of `totalBunnies`.

- The function above is called by using the function name followed by parentheses.

Example of function invocation:

```javascript
sumBunnies();
```

Let's write the function and invoke it in the console:

```javascript
function sumBunnies() {
  var blackBunnies = 10;
  var whiteBunnies = 20;
  var totalBunnies = blackBunnies + whiteBunnies;
  return totalBunnies;
}

sumBunnies();
// result: 30
```

- The function above will return the value of `totalBunnies` which is `30`.

The above function can be rewritten as an anonymous function

```javascript
var sumBunnies = function () {
  var blackBunnies = 10;
  var whiteBunnies = 20;
  var totalBunnies = blackBunnies + whiteBunnies;
  return totalBunnies;
};

sumBunnies();
```

---

#### Function Parameters

- Function parameters are listed inside the parentheses () in the function definition.

- Function arguments are the values received by the function when it is invoked.

##### Example

```javascript
function sumBunnies(blackBunnies, whiteBunnies) {
  var totalBunnies = blackBunnies + whiteBunnies;
  return totalBunnies;
}

sumBunnies(10, 20);

// result: 30
```

- The function above is called `sumBunnies` and it has two parameters: `blackBunnies` and `whiteBunnies`.

- The function above returns the value of `totalBunnies`.

- The function above is called by using the function name followed by parentheses.

---

#### Function Return

- The `return` statement stops the execution of a function and returns a value from that function.

- The `return` value of the function is "returned" back to the "caller":

---

#### Arrow Functions

- Arrow functions are a shorter syntax for writing function expressions.

##### Example of arrow function

```javascript
var sumBunnies = (blackBunnies, whiteBunnies) => {
  // the => is called the fat arrow
  var totalBunnies = blackBunnies + whiteBunnies;
  return totalBunnies;
};

sumBunnies(10, 20);
// result: 30
```

---

#### IIFE (Immediately Invoked Function Expression)

These are functions that are executed as soon as they are defined.

```javascript
(function () {
  var blackBunnies = 10;
  var whiteBunnies = 20;
  var totalBunnies = blackBunnies + whiteBunnies;
  console.log(totalBunnies);
})();
```

---

#### Type-casting <a name="type-casting"></a>

Type casting is the process of converting a value from one data type to another (such as string to number, object to boolean, and so on).

##### Examples of Type Casting

##### String to Number

```js
var a = '14';
var b = '2';
var c = a / b;
console.log(c); // 7
```

##### Number to String

```js
var a = 14;
var b = 2;
var c = a / b;
console.log(c); // '7'
```

---

### Arrays and Array methods <a name="arrays"></a>

These are some of the most common array methods:

```js
const bunnies = ['Lucy', 'Tom', 'Molly'];

// Add an item to the end of an array
bunnies.push('Bella'); // ['Lucy', 'Tom', 'Molly', 'Bella']

// Remove an item from the end of an array
bunnies.pop(); // ['Lucy', 'Tom', 'Molly']

// Add an item to the beginning of an array
bunnies.unshift('Bella'); // ['Bella', 'Lucy', 'Tom', 'Molly']

// Remove an item from the beginning of an array
bunnies.shift(); // ['Lucy', 'Tom', 'Molly']

// Find the index of an item in the array
bunnies.indexOf('Tom'); // 1

// Remove an item by index position
bunnies.splice(1, 1); // ['Lucy', 'Molly']

// Copy an array
const newBunnies = bunnies.slice(); // ['Lucy', 'Molly']
```

&nbsp;

### Mixed Data Types - Array

You can store different data types in an array.

```js
const mixedDataTypes = [true, 20, 'Lucy', null, undefined, { name: 'Lucy' }];
```

---

### Accessing Array Elements

You can access array elements by their index number.

```js
const bunnies = ['Lucy', 'Tom', 'Molly'];

// Access the first item in the array
bunnies[0]; // 'Lucy'

// Access the second item in the array
bunnies[1]; // 'Tom'
```

---

#### Array Length

Get the length of an array.

```js
const bunnies = ['Lucy', 'Tom', 'Molly'];

bunnies.length; // 3
```

---

#### Looping Through Arrays

You can loop through an array using a `for` loop.

```js
const bunnies = ['Lucy', 'Tom', 'Molly'];

for (let i = 0; i < bunnies.length; i++) {
  console.log(`Bunny ${bunnies[i]} is scheduled for a checkup today.`);
}

/* Result:
Bunny Lucy is scheduled for a checkup today.
Bunny Tom is scheduled for a checkup today.
Bunny Molly is scheduled for a checkup today.
 */
```

---

#### Nested Arrays

The elements of an array can be arrays themselves.

```js
const nestedArrays = [
  ['Lucy', 'Tom'],
  ['Molly', 'Bella'],
];
```

---

#### Accessing Nested Arrays

You can access nested arrays by chaining the index numbers.

```js
const nestedArrays = [
  ['Lucy', 'Tom'],
  ['Molly', 'Bella'],
];

// Access the first item in the first array
nestedArrays[0][0]; // 'Lucy'
```

---

##### Exercises

1. Create an array called `bunnies` that contains the names of six bunnies.

2. Add a new bunny called `Mario` to the end of the array.

3. Remove the bunny called `Lucy` from the array.

4. Add a new bunny called `Luigi` to the beginning of the array.

---

&nbsp;

#### JSON <a name="json"></a>

`JSON` stands for JavaScript Object Notation. It is a lightweight data-interchange format. We can use `JSON` to store and exchange data. JSON is often used when data is sent from a server to a web page.

##### Example of JSON

```json
{
  "name": "Lucy",
  "age": 3,
  "isHappy": true
}
```

**Note**: The key distinction between `JSON` and JavaScript objects is that `JSON` keys must be wrapped in double quotes. In JavaScript, keys can be wrapped in either single or double quotes.

JSON uses the `.json` file extension name.

#### Convert JavaScript Object to JSON

```javascript
let bunny = {
  name: 'Lucy',
  age: 3,
  isHappy: true,
};

let bunnyJSON = JSON.stringify(bunny);
console.log(bunnyJSON);
// {"name":"Lucy","age":3,"isHappy":true}
```

#### Convert JSON to JavaScript Object

```javascript
let bunnyJSON = '{"name":"Lucy","age":3,"isHappy":true}';
let bunny = JSON.parse(bunnyJSON);

console.log(bunny.name); // Lucy
```

---

&nbsp;

#### Exercises

1. Create a JavaScript object called `bunny` with the following properties: `name`, `age`, and `isHappy`. Set the values of the properties to your own bunny's name, age, and happiness level.

2. Convert the `bunny` object to `JSON` and store it in a variable called `bunnyJSON`.

---

#### Comparison Operators <a name="comparison-operators"></a>

For comparison operators, we can use the following operators:

- `==` (equal to)
- `===` (strict equal to)
- `!=` (not equal to)
- `!==` (strict not equal to)
- `>` (greater than)
- `<` (less than)
- `>=` (greater than or equal to)
- `<=` (less than or equal to)

#### Examples of Comparison Operators

##### Equal to

```js
let bunny_age = 3;
let dog_age = 3;
console.log(bunny_age == dog_age); // true
```

##### Strict equal to

```js
let bunny_age = 3;
let dog_age = '3';
console.log(bunny_age === dog_age); // false
```

##### Not equal to

```js
let bunny_age = 3;
let dog_age = 4;
console.log(bunny_age != dog_age); // true
```

##### Strict not equal to

```js
let bunny_age = 3;
let dog_age = '3';
console.log(bunny_age !== dog_age); // true
```

##### Greater than

```js
let bunny_age = 3;
let dog_age = 4;
console.log(bunny_age > dog_age); // false
```

##### Less than

```js
let bunny_age = 3;
let dog_age = 4;
console.log(bunny_age < dog_age); // true
```

##### Greater than or equal to

```js
let bunny_age = 3;
let dog_age = 3;
console.log(bunny_age >= dog_age); // true
```

---

#### Exercise

Use a comparison operator to check (less than or equal to) if the number of bunnies in the `bunnies` array is less than or equal to the number of dogs in the `dogs` array. If it is, print `There are more dogs than bunnies` to the console. If it is not, print `There are more bunnies than dogs` to the console.

---

&nbsp;

### Conditional Statements <a name="conditional"></a>

These are ways of controlling the flow of your code. They allow you to make decisions based on certain conditions.

#### If Statement syntax

```js
if (condition) {
  // code to be executed if condition is true
}
```

##### Example

```js
// check if bunny is healthy
let bunny = 'healthy';
if (bunny === 'healthy') {
  console.log('Bunny is healthy');
}
```

#### If Else Statement syntax

```js
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}
```

##### Example

```js
// check if bunny is healthy
let bunny = 'healthy';
if (bunny === 'healthy') {
  console.log('Bunny is healthy');
} else {
  console.log('Bunny is needs to see the vet');
}
```

#### If Else If Statement syntax

```js
if (condition) {
  // code to be executed if condition is true
} else if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}
```

##### Example

```js
// check if bunny is healthy
let bunny = 'healthy';
if (bunny === 'healthy') {
  console.log('Bunny is healthy');
} else if (bunny === 'sick') {
  console.log('Bunny is needs to see the vet');
} else {
  console.log('Bunny health status unknown');
}
```

## &nbsp;

#### Switch Statement syntax

```js
switch (expression) {
  case x:
    // code to be executed if expression === x
    break;
  case y:
    // code to be executed if expression === y
    break;
  default:
  // code to be executed if expression does not match any cases
}
```

##### Example

```js
// check if bunny is healthy
let bunny = 'healthy';
switch (bunny) {
  case 'healthy':
    console.log('Bunny is healthy');
    break;
  case 'sick':
    console.log('Bunny is needs to see the vet');
    break;
  default:
    console.log('Bunny health status unknown');
}
```

---

#### Ternary Operator syntax

```js
condition ? expression1 : expression2;
```

##### Example

```js
// check if bunny is healthy
let bunny = 'healthy';
bunny === 'healthy'
  ? console.log('Bunny is healthy')
  : console.log('Bunny is needs to see the vet');
```

The above code is equivalent to:

```js
if (bunny === 'healthy') {
  console.log('Bunny is healthy');
} else {
  console.log('Bunny is needs to see the vet');
}
```

##### Exercise

Using a ternary operator , write a function that takes in a number and returns a string that says whether the number is even or odd.

<!-- ### Solution

```js
const evenOrOdd = (num) => {
  return num % 2 === 0 ? 'even' : 'odd';
};
console.log(evenOrOdd(3)); // odd
console.log(evenOrOdd(4)); // even
``` -->

---

&nbsp;

### Loops <a name="loops"></a>

Loops and Iteration are a way to repeat a block of code until a condition is met.

#### For Loop

```js
for (let i = 0; i < 10; i++) {
  // As long as i is less than 10, keep running the code
  console.log(`Number ${i}`);
}
```

#### While Loop

```js
let i = 0;
while (i < 10) {
  // As long as i is less than 10, keep running the code
  console.log(`Number ${i}`);
  i++;
}
```

---

&nbsp;

### Exception Handling <a name="exceptions"></a>

These are ways of handling errors in your code. They allow you to catch errors and handle them in a way that makes sense for your application.

#### Examples

##### Throw statement

```js
function sumBunnies(blackBunnies, whiteBunnies) {
  if (typeof blackBunnies !== 'number' || typeof whiteBunnies !== 'number') {
    throw new Error('blackBunnies and whiteBunnies must be numbers');
  }
  var totalBunnies = blackBunnies + whiteBunnies;
  return totalBunnies;
}

sumBunnies(10, 20);

// result: 30
```

> In the above code, If the `blackBunnies` and `whiteBunnies` parameters are not numbers, the function will throw an error.

---

##### Try Catch statement

```js
function sumBunnies(blackBunnies, whiteBunnies) {
  if (typeof blackBunnies !== 'number' || typeof whiteBunnies !== 'number') {
    throw new Error('blackBunnies and whiteBunnies must be numbers');
  }
  var totalBunnies = blackBunnies + whiteBunnies;
  return totalBunnies;
}

try {
  sumBunnies(10, 20);
} catch (error) {
  console.log(error);
}
```

> In the above code, the `try` block will try to execute the code inside it. If an error is thrown, the `catch` block will catch the error and execute the code inside it.

---

&nbsp;

### Operators <a name="operators"></a>

##### Operators types in JavaScript

- Assignment operators
- Comparison operators
- Arithmetic operators
- Logical operators
- String operators
- Conditional (ternary) operator
- Comma operator

---

#### Assignment operators

```js
let bunny = 'black'; // The = operator assigns the value 'black' to the variable bunny
```

#### Comparison operators

```js
console.log(1 == 1); // The == operator compares two values and returns true if they are equal
```

#### Arithmetic operators

```js
console.log(1 + 1); // The + operator adds two numbers

Other arithmetic operators include: -, *, /, %, ++, --
```

#### Logical operators

```js
console.log(1 == 1 && 2 == 2); // The && operator returns true if both statements are true

Other logical operators include: ||, !
```

#### String operators

```js
console.log('Hello' + 'World'); // The + operator concatenates two strings
```

#### Conditional (ternary) operator

```js
console.log(1 == 1 ? 'Yes' : 'No'); // The ? operator is a conditional operator
```

#### Comma operator

```js
let x = 0,
  y = 10,
  z = 20; // The , operator assigns multiple values to variables
```

---

&nbsp;

### Classes <a name="classes"></a>

- Classes are a template for creating objects.

#### Example of class declaration:

```javascript
class Bunny {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}
```

- `class` keyword is used to declare a class.
- `constructor` is a special method for creating and initializing an object created with a class.
- `this` keyword refers to the object itself.

#### Example of creating an object from a class:

```javascript
let bunny = new Bunny('Peter', 'white');
```

- `new` keyword is used to create an object from a class.

#### Example of class declaration with methods:

```javascript
class Bunny {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  speak() {
    console.log(`My name is ${this.name}`);
  }
}
```

- `speak` is a method of the class `Bunny`.

##### Example of creating an object from a class with methods:

```javascript
let bunny = new Bunny('Peter', 'white');
bunny.speak();
```

- `bunny.speak()` is a method call.

##### Example of class declaration with static methods:

```javascript
class Bunny {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  speak() {
    console.log(`My name is ${this.name}`);
  }

  static info() {
    console.log('This is a bunny class');
  }
}
```

- `static` keyword is used to create a static method.

##### Example of creating an object from a class with static methods:

```javascript
let bunny = new Bunny('Peter', 'white');
bunny.speak();
Bunny.info();
```

- `bunny.speak()` is a method call.
- `Bunny.info()` is a static method call.

---

&nbsp;

#### Promises <a name="promises"></a>

Promises are a way to handle asynchronous operations in JavaScript.

> Asynchronous operations are operations that do not happen immediately. For example, making an API call to a server.

#### Promises can be in one of three states:

- Pending
- Resolved
- Rejected

##### Example of a Promise

```js
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Stuff worked');
  } else {
    reject('Error, it broke');
  }
});
```

> In the above code, the `promise` variable is a new Promise. The `Promise` constructor takes a function as a parameter. The function takes two parameters, `resolve` and `reject`. The `resolve` function is called when the promise is resolved. The `reject` function is called when the promise is rejected.

#### Example of a Promise with a `then`and catch` method

```js
// promises
const getTodos_ = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

getTodos_();
```

> In the above code, the `getTodos_` function is a function that makes an API call to the `https://jsonplaceholder.typicode.com/todos` endpoint. The `fetch` function returns a promise. The `then` method is called when the promise is resolved. The `catch` method is called when the promise is rejected.

##### Example of a Promise with `async` and `await`

```js
// async await
const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  //   console.log(data);
  return data;
};

getTodos();
```

> In the above code, the `getTodos` function is a function that makes an API call to the `https://jsonplaceholder.typicode.com/todos` endpoint. The `async` keyword is used to declare an asynchronous function. The `await` keyword is used to wait for a promise to be resolved. The `await` keyword can only be used inside an `async` function.

---

&nbsp;

### Rest-Spread-Operators <a name="rest-spread-ops"></a>

#### Spread Operator

```js
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];
console.log(arr2);

// Output: [1, 2, 3, 4, 5, 6]
```

- The spread operator is used to copy the contents of an array into another array.

---

##### Example 2

```js
const bunnies = ['Peter', 'John', 'Paul'];
const bunnies2 = [...bunnies, 'George', 'Ringo'];
console.log(bunnies2);

// Output: ['Peter', 'John', 'Paul', 'George', 'Ringo']
```

---

#### Rest Operator

```js
const highestNumber = (...args) => {
  //the rest operator is used to pass an indefinite number of arguments to a function

  // return the highest number in the array
  return Math.max(...args);
};

console.log(highestNumber(1, 2, 3, 4, 5, 6));
```

- The rest operator is used to pass an indefinite number of arguments to a function.

---

&nbsp;

#### Template Literals <a name="template-literals"></a>

- Template literals are string literals allowing embedded expressions.

```js
let bunny_name = 'Peter';
let bunny_color = 'white';
// old way
console.log(
  "My bunny's name is " + bunny_name + ' and his color is ' + bunny_color
);

// new way
console.log(`My bunny's name is ${bunny_name} and his color is ${bunny_color}`);
```

---

&nbsp;

### Calculator <a name="calculator"></a>

Create a simple calculator

```js
// calculator example

const calculator = {
  add: function (x, y) {
    return x + y;
  },

  subtract: function (x, y) {
    return x - y;
  },

  multiply: function (x, y) {
    return x * y;
  },

  divide: function (x, y) {
    return x / y;
  },

  power: function (x, y) {
    return x ** y;
  },

  square: function (x) {
    return x * x;
  },

  cube: function (x) {
    return x ** 3;
  },

  squareRoot: function (x) {
    return Math.sqrt(x);
  },

  cubeRoot: function (x) {
    return Math.cbrt(x);
  },
};

console.log(calculator.add(2, 3));
console.log(calculator.subtract(2, 3));
console.log(calculator.multiply(2, 3));
console.log(calculator.divide(2, 3));
console.log(calculator.power(2, 3));
console.log(calculator.square(2));
console.log(calculator.cube(2));
console.log(calculator.squareRoot(2));
console.log(calculator.cubeRoot(2));
```

&nbsp;

### Higher order Function in Javascript <a name="hof"></a>

- Examples are `reduce`, `map`, `filter`, `forEach`, `find`

##### Example of `reduce` method:

```javascript
// bunnies
const bunnies = [
  { name: 'Peter', color: 'white' },
  { name: 'John', color: 'black' },
  { name: 'Paul', color: 'white' },
  { name: 'George', color: 'black' },
  { name: 'Ringo', color: 'white' },
];

// reduce method
const whiteBunnies = bunnies.reduce((acc, bunny) => {
  //
  if (bunny.color === 'white') {
    acc.push(bunny);
  }
  return acc;
}, []);

console.log(whiteBunnies);
```

- `reduce` method is used to reduce an array to a single value.

#### Example of `map` method:

```javascript
// bunnies
const bunnies = [
  { name: 'Peter', color: 'white' },
  { name: 'John', color: 'black' },
  { name: 'Paul', color: 'white' },
  { name: 'George', color: 'black' },
  { name: 'Ringo', color: 'white' },
];

// map method
const bunnyNames = bunnies.map((bunny) => {
  return bunny.name;
});

console.log(bunnyNames);
```

- `map` method is used to create a new array with the results of calling a provided function on every element in the calling array.

#### Example of `filter` method:

```javascript
// bunnies
const bunnies = [
  { name: 'Peter', color: 'white' },
  { name: 'John', color: 'black' },
  { name: 'Paul', color: 'white' },
  { name: 'George', color: 'black' },
  { name: 'Ringo', color: 'white' },
];

// filter method
const whiteBunnies = bunnies.filter((bunny) => {
  return bunny.color === 'white';
});

console.log(whiteBunnies);
```

- `filter` method is used to create a new array with all elements that pass the test implemented by the provided function.

##### Example of `forEach` method:

```javascript
// bunnies
const bunnies = [
  { name: 'Peter', color: 'white' },
  { name: 'John', color: 'black' },
  { name: 'Paul', color: 'white' },
  { name: 'George', color: 'black' },
  { name: 'Ringo', color: 'white' },
];

// forEach method
bunnies.forEach((bunny) => {
  console.log(bunny.name);
});
```

- `forEach` method is used to execute a provided function once for each array element.

##### Example of `find` method:

```javascript
// bunnies
const bunnies = [
  { name: 'Peter', color: 'white' },
  { name: 'John', color: 'black' },
  { name: 'Paul', color: 'white' },
  { name: 'George', color: 'black' },
  { name: 'Ringo', color: 'white' },
];

// find method
const whiteBunny = bunnies.find((bunny) => {
  return bunny.color === 'white';
});

console.log(whiteBunny);
```

- `find` method is used to return the value of the first element in the provided array that satisfies the provided testing function. Otherwise `undefined` is returned.

---

#### Destructuring <a name="destructuring"></a>

Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

##### Array Destructuring

```js
const bunnies = ['Lucy', 'Tom', 'Molly'];

// Destructure the first item in the array
const [firstBunny] = bunnies;

// Destructure the second and third items in the array
const [secondBunny, thirdBunny] = bunnies;

// Destructure the first and third items in the array
const [firstBunny, , thirdBunny] = bunnies;

console.log(firstBunny); // Output: Lucy
```

##### Object Destructuring

```js
const bunny = {
  name: 'Lucy',
  age: 3,
  isHappy: true,
};

// Destructure the name property
const { name } = bunny;

// Destructure the name and age properties
const { name, age } = bunny;

console.log(name); // Output: Lucy
```
