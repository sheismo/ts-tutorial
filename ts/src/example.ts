// * Basic Types
let id: number = 5; // number
let msg: string = 'hey'; // string
let isActive: boolean = true; //boolean
let x:any = 'Hello'; //any
x = 7;

let age:number; // variable declaration
age = 9; // initialize varible

let ids:number[] = [1,2,3,4,5];
let arr: any[] = [true, 5, 'John'];
let names: string[] = ['ade', 'funke'];

// * Tuples
let person: [number, string, boolean] = [1, 'John', true];
//Tuple Array
let employee: [number, string] [];
employee = [
    [1, 'John'],
    [2, 'Joe'],
    [3, 'Mary']
]

// * Unions
let myId: string | number = 22;
myId = 'Paul';

// * Enum
enum Direction1 {
    Up = 1, 
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up', 
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// * Objects
// const user: {
//     id: number,
//     name: string,
// } = {
//     id: 1,
//     name: 'John'
// }

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}
// console.log(user.id)

// type Name = string;
// const student1: Name = 'Joe';
// console.log(student1);

// * Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;
customerId = 8;

// * Function
function add(x:number, y:number): number {
    return x + y;
}
// console.log(add(9, 10));

function log(message: string | number) {
    console.log(message);
}
// log(9);
// log('hello');

function greet (name:string, age:number): string {
    return name + ' is ' + age + ' years old!';
}
// let message = greet('Adeolu', 18);
// console.log(message);

// * Interfaces
// ! Use interfaces for objects mostly, types can be used with primitives and unions
interface StudentInterface {
    readonly id: number, // readonly ensures the property cannot be modified (values cant be assigned to it after it has been set)
    name: string,
    age?: number // Put a question mark to make the age property optional
}

const student1: StudentInterface = {
    id: 18,
    name: 'Johnson'
}
// console.log(student1.id);
// student1.id = 76;

type Point = number | string;
const p1: Point = 14.6;

// * Using Interfaces with functions
interface MathFunc {
    ( x: number, y:number ): number
}

const addNum: MathFunc = (x: number, y:number): number => x + y;
const subtractNum: MathFunc = (x: number, y:number): number => x - y;


//*Classes
class Person {
    id: number //properties are public by default, can be private or protected
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const person1 = new Person(1, 'Olivia Pope'); //The constructor runs as soon as a new Person object is instantiated
const person2 = new Person(2, 'Annalise Keating');
// console.log(person1.name);
// console.log(person2.register());


// * Using Interface with Classes
interface EmployeeInterface {
    readonly id: number,
    name: string,
    register(): string
}

class Employee implements EmployeeInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
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
    occupation: string
    
    constructor(id:number, name:string, occupation:string) {
        super(id, name);
        this.occupation = occupation;
    }
}
const Man1 = new Man(9, 'Sean', 'Developer');
// console.log(Man1.name);
// console.log(Man1.register());

// * Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numberArray = getArray<number>([1, 2, 3, 4, 5]);
let stringArray = getArray<string>(['John', 'Jill', 'Joe', 'Brad']);

//generic allows you to create a placeholder for the type in your function definition
// numberArray.push('hello') //cant work

