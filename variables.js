// Naming Variables

// Symbols allowed: _ and $
// Never start a variable with upper case, only used in OOP
// Always descriptive

// Data Types

// JavaScript has dynamic typing
// Value holds the type and not the variable

// Number = decimals AND integers
// let age = 23;

// Strigs = text
// let firstName = 'Felipe';

// Boolean = true or false
// let fullAge = true;

// Undefined = empty value
// let children;

// Null = empty

// Symbol

// BigInt

// let const and var

// Always use const, only use let in specific cases
// Variable mutations can create bugs
// Completly avoid var, replaced by let after ES6

let javaScriptIsFun = true;

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Felipe');

const firstName = 'Felipe';
const lastName = 'Cavedon';

console.log(firstName, lastName);

const now = 2022;
const ageFelipe = now - 1992;
const ageMaria = now - 1996;

console.log(ageFelipe, ageMaria);
console.log(ageFelipe * 2, ageFelipe / 10, 2 ** 3) // 2 ** 3 means 2 to the power of 3

// Concatinating
console.log(firstName + ' ' + lastName);

// Template Literals
const job = 'Programmer';
const birthYear = 1992;
const year = 2022;

const felipe = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(felipe);

//Multiple Line String
console.log(`String
Multiple
Lines`);