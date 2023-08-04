let sales: number = 123456789;
let course: string = 'Typescript';
let is_published: boolean = true;

let level;
level = 1;
level = 'a';

// function render(document) {
//     console.log(document)
// }

//arrays
let numbers: number[] = [1, 2, 3];
numbers.forEach(n => n.toFixed(2));

//tuples (fixed length array with each array value having a defined type)
let user: [number, string] = [1, 'Mosh'];
// user.push(1);

//Enums (we can use enum d)
const enum Size {
    Small = 1, Medium, Large
}
let mySize: Size = Size.Medium;
console.log(mySize);
console.log(Size.Large);

//functions
function calculateTax(income: number): number {
    if (income < 50_000)
        return income * 1.2;
    // else if ()

}

