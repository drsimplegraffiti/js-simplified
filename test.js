// modern javascript syntax with examples
// spread operator
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];
console.log(arr2);

// rest operator
const highestNumber = (...args) => {
  //the rest operator is used to pass an indefinite number of arguments to a function

  // return the highest number in the array
  return Math.max(...args);
};

console.log(highestNumber(1, 2, 3, 4, 5, 6));

// destructuring
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};

const { name, age, city } = person;

console.log(name, age, city);

// template literals
const last_name = 'John';
const height = 1.8;
const location = 'New York';

// old way
console.log(
  'My name is ' +
    last_name +
    ', I am ' +
    height +
    'm tall and I live in ' +
    location
);

// new way
console.log(
  `My name is ${last_name}, I am ${height}m tall and I live in ${location}`
);

// rest operator with function to get the sum of all the numbers
const sum = (...args) => {
  // the rest operator is used to pass an indefinite number of arguments to a function
  return args.reduce((a, b) => a + b, 0); // the reduce method is used to sum all the numbers in the array
  // the a and b are the accumulator and the current value respectively i.e a = 0 and b = 1
  // the 0 is the initial value of the accumulator
  // how the reduce method works is that it takes the first two values in the array and adds them together and stores the result in the accumulator and then takes the next value in the array and adds it to the accumulator and so on until all the values in the array have been added together
};

console.log(sum(1, 2, 3, 4, 5, 6));

// classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

const person1 = new Person('John', 30);
const person2 = new Person('Sara', 25);

person1.greet();
person2.greet();

// inheritance
class Customer extends Person {
  // The extends keyword is used to inherit all the methods and properties from the Person class
  constructor(name, age, balance) {
    // The constructor method is used to initialize the properties of the class
    super(name, age); // The super keyword is used to call the constructor method of the parent class
    this.balance = balance; // The this keyword is used to refer to the current instance of the class
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer('Kevin', 32, 300);

console.log(customer1.info());

// modules
// import { Person, Customer } from './modules';

// const person1 = new Person('John', 30);
// const customer1 = new Customer('Kevin', 32, 300);

// console.log(person1.greet());
// console.log(customer1.info());

// generators - a function that can be entered and exited multiple times
function* sayNames() {
  // The * symbol is used to define a generator function
  yield 'Jack'; // The yield keyword is used to pause and resume a generator function
  yield 'Jill';
  yield 'John';
}

const name_ = sayNames(); // The generator function is called and the return value is stored in a variable

console.log(name_.next().value); // The next method is used to resume the generator function and the value is returned
console.log(name_.next().value);
console.log(name_.next().value);

// generator example
function* createIds() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// symbols
const sym1 = Symbol();
const sym2 = Symbol('sym2');
console.log(typeof sym2);

// unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj[KEY1]);

// arrow functions
const addNum = (num1 = 1, num2 = 1) => num1 + num2; // The arrow function is used to define a function

console.log(addNum(5, 5));

// for of loop
const arr_ = [1, 2, 3, 4, 5]; // The for of loop is used to loop through an array

for (let num of arr_) {
  // the of keyword is used to loop through the values in the array
  //format output
  console.log(`Num: ${num}`);
}

// for in loop
const person_ = {
  name: 'John',
  age: 30,
  city: 'New York',
};

for (let x in person_) {
  // the in keyword is used to loop through the keys in the object
  //format output
  console.log(`${x}: ${person_[x]}`);
}

//type conversion
const val1 = String(5); // The String() function is used to convert a value to a string
const val2 = 6;
const sum_ = Number(val1 + val2); // The Number() function is used to convert a value to a number

console.log(sum_);

//type coercion - javascript automatically converts one data type to another
const val3 = 5;
const val4 = 6;

const sum__ = val3 + val4; // The + operator is used to concatenate strings and add numbers

console.log(sum__);

// Date and time
let val5;
const today = new Date(); // The new Date() function is used to get the current date and time
let birthday = new Date('9-10-1981 11:25:00'); // The new Date() function is used to get a specific date and time
birthday = new Date('September 10 1981'); // The new Date() function is used to get a specific date and time

val5 = today.getMonth(); // The getMonth() method is used to get the month
val5 = today.getDate(); // The getDate() method is used to get the date
val5 = today.getDay(); // The getDay() method is used to get the day
val5 = today.getFullYear(); // The getFullYear() method is used to get the year
val5 = today.getHours(); // The getHours() method is used to get the hours
val5 = today.getMinutes(); // The getMinutes() method is used to get the minutes
val5 = today.getSeconds(); // The getSeconds() method is used to get the seconds
val5 = today.getMilliseconds(); // The getMilliseconds() method is used to get the milliseconds
val5 = today.getTime(); // The getTime() method is used to get the timestamp

birthday.setMonth(2); // The setMonth() method is used to set the month
birthday.setDate(12); // The setDate() method is used to set the date
birthday.setFullYear(1985); // The setFullYear() method is used to set the year
birthday.setHours(3); // The setHours() method is used to set the hours
birthday.setMinutes(30); // The setMinutes() method is used to set the minutes
birthday.setSeconds(25); // The setSeconds() method is used to set the seconds

console.log(birthday);

// ternary operator
const id = 100;

// old way
if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// new way
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// without braces
if (id === 100) console.log('CORRECT');
else console.log('INCORRECT');

// without else
if (id === 100) console.log('CORRECT');

// switch
const color = 'red';

switch (color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
}

// functions
function addNums(num1 = 1, num2 = 1) {
  return num1 + num2;
}

console.log(addNums(5, 5));

// function expression
const addNums_ = function (num1 = 1, num2 = 1) {
  return num1 + num2;
};

console.log(addNums_(5, 5));

// immediately invokable function expressions - IIFEs
(function () {
  console.log('IIFE Ran...');
})();

(function (name) {
  console.log('Hello ' + name);
})('Brad');

// property methods
const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.edit(22);

// local vs global scope
let x = 1; // The let keyword is used to define a variable with local scope

function test() {
  let x = 2; // The let keyword is used to define a variable with local scope
  console.log(x);
}

test();

console.log(x);

// global scope
let y = 1; // The let keyword is used to define a variable with global scope

function test_() {
  y = 2; // The let keyword is used to define a variable with global scope
  console.log(y);
}

test_();

//object literals
const me = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 's@c.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL',
  },
  getBirthYear: function () {
    return 2017 - this.age;
  },
};

let val;

val = me;

// get specific value
val = me.firstName;
val = me['lastName'];
val = me.age;
val = me.hobbies[1];
val = me.address.state;
val = me.address['city'];
val = me.getBirthYear();

console.log(val);

// important array methods
const numbers = [43, 56, 33, 23, 44, 36, 5];

// get array length
console.log(numbers.length);

// check if is array
console.log(Array.isArray(numbers));

// get single value
console.log(numbers[3]);

// get index of value
console.log(numbers.indexOf(36));

// mutating arrays
// add on to end

numbers.push(250);

// add on to front
numbers.unshift(120);

// take off from end
numbers.pop();

// take off from front
numbers.shift();

// splice values
numbers.splice(1, 3);

// reverse
numbers.reverse();

// sorting arrays

// OOP - Object Oriented Programming - ES5
function PersonN(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  this.getBirthYear = function () {
    return this.birthday.getFullYear();
  };
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Instantiate object
const newPerson = new PersonN('John', 'Doe', '4-3-1980');
console.log(newPerson);

// OOP - Object Oriented Programming - ES6
class Person__ {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  getBirthYear() {
    return this.birthday.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate object
const newPerson_ = new Person__('John', 'Doe', '4-3-1980');
console.log(newPerson_);

//es6 animal example
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  sleep() {
    return `${this.name} is sleeping`;
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    return `${this.name} is barking`;
  }
}

const dog = new Dog('Max', 4, 'Labrador');
console.log(dog);

// Default parameters
function greet(firstName = 'John', lastName = 'Doe') {
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());

// map in javascript - es6
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Karen' },
  { id: 4, name: 'Steve' },
];

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);

// callback function
function sayHello() {
  console.log('Hello');
}

function callFunction(fun) {
  fun();
}

callFunction(sayHello);

// arrow function

const sayHello_ = () => {
  console.log('Hello');
};

const sayHello__ = () => console.log('Hello');

const sayHello___ = (firstName) => console.log(`Hello ${firstName}`);

//es9 example
const profile = {
  named: 'John Doe',
  aged: 30,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age) {
    this.age = age;
  },
};

const { aged, named } = profile;
const {
  coords: { lat, lng }, //
} = profile;

//es9 promise example
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

//es9 async await example
async function init() {
  await createPost({ title: 'Post Three', body: 'This is post three' });

  getPosts();
}

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await response.json();

  console.log(data);
}

// error handling in javascript - es6
try {
  // Produce a ReferenceError
  myFunction();

  // Produce a TypeError
  null.myFunction();

  // Will produce a SyntaxError
  eval('Hello World');

  // Will produce a URIError
  decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (e) {
  console.log(`User Error: ${e.message}`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');

// string interpolation in javascript - es6
const nameP = 'John';
const ageP = 30;
const jobP = 'Web Developer';

// Without template strings (es5)
htmlP =
  '<ul><li>Name: ' +
  nameP +
  '</li><li>Age: ' +
  ageP +
  '</li><li>Job: ' +
  jobP +
  '</li></ul>';

htmlP =
  '<ul>' +
  '<li>Name: ' +
  nameP +
  '</li>' +
  '<li>Age: ' +
  ageP +
  '</li>' +
  '<li>Job: ' +
  jobP +
  '</li>' +
  '</ul>';

function hello() {
  return 'hello';
}

// With template strings (es6)
htmlP = `
    <ul> 
        <li>Name: ${nameP}</li>
        <li>Age: ${ageP}</li>
        <li>Job: ${jobP}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${ageP > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

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

  absolute: function (x) {
    return Math.abs(x);
  },

  factorial: function (x) {
    let fact = 1;
    for (let i = 1; i <= x; i++) {
      fact *= i;
    }
    return fact;
  },

  log: function (x) {
    return Math.log(x);
  },

  log10: function (x) {
    return Math.log10(x);
  },

  log2: function (x) {
    return Math.log2(x);
  },

  sin: function (x) {
    return Math.sin(x);
  },

  cos: function (x) {
    return Math.cos(x);
  },

  tan: function (x) {
    return Math.tan(x);
  },

  sinh: function (x) {
    return Math.sinh(x);
  },

  cosh: function (x) {
    return Math.cosh(x);
  },

  tanh: function (x) {
    return Math.tanh(x);
  },

  asin: function (x) {
    return Math.asin(x);
  },

  acos: function (x) {
    return Math.acos(x);
  },
};

// variables types in javascript
// primitive types
// string - number - boolean - null - undefined - symbol
//example of string
// const name = 'John Doe';

// reference types
// arrays - object literals - functions - dates - anything else

//variable declaration in javascript
// var - function scope
// let - block scope
// const - block scope

// var example using fruits
var fruits = ['apple', 'banana', 'orange'];

// let example using fruits
let fruits = ['apple', 'banana', 'orange'];

// const example using fruits
const fruits = ['apple', 'banana', 'orange'];


