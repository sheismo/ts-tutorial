"use strict";
// * Basic Types
let id = 5; // number
let msg = 'hey'; // string
let isActive = true; //boolean
let x = 'Hello'; //any
x = 7;
let age; // variable declaration
age = 9; // initialize varible
let ids = [1, 2, 3, 4, 5];
let arr = [true, 5, 'John'];
let names = ['ade', 'funke'];
// * Tuples
let person = [1, 'John', true];
//Tuple Array
let employee;
employee = [
    [1, 'John'],
    [2, 'Joe'],
    [3, 'Mary']
];
// * Unions
let myId = 22;
myId = 'Paul';
// * Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
// console.log(user.id)
// type Name = string;
// const student1: Name = 'Joe';
// console.log(student1);
// * Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
customerId = 8;
// * Function
function add(x, y) {
    return x + y;
}
// console.log(add(9, 10));
function log(message) {
    console.log(message);
}
// log(9);
// log('hello');
function greet(name, age) {
    return name + ' is ' + age + ' years old!';
}
const student1 = {
    id: 18,
    name: 'Johnson'
};
const p1 = 14.6;
const addNum = (x, y) => x + y;
const subtractNum = (x, y) => x - y;
//*Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const person1 = new Person(1, 'Olivia Pope'); //The constructor runs as soon as a new Person object is instantiated
const person2 = new Person(2, 'Annalise Keating');
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `This employee @${this.name} is now registered`;
    }
}
// const Bob = new Employee(56,'Bob');
// console.log(Bob.register());
// * Subclasses
class Man extends Person {
    constructor(id, name, occupation) {
        super(id, name);
        this.occupation = occupation;
    }
}
const Man1 = new Man(9, 'Sean', 'Developer');
// console.log(Man1.name);
// console.log(Man1.register());
// * Generics
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3, 4, 5]);
let stringArray = getArray(['John', 'Jill', 'Joe', 'Brad']);
//generic allows you to create a placeholder for the type in your function definition
// numberArray.push('hello') //cant work
