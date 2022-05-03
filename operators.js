// Assignment Operators

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // +1
x--; // -1
console.log(x);

// Operator Precedence

const ageFelipe = 30;
const ageMaria = 26;

const averageAge = (ageFelipe + ageMaria) / 2; //Parantesis to calculate first
console.log(averageAge);

// Coparison Operators

console.log(ageFelipe > ageMaria); // >, <, >=, <=
console.log(ageFelipe >= 18); // is full age?

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

// Equality Operators

// === compares without coercion (Strict) always use this one
const age = 18;
if (age === 18) console.log('You have 18 years old');

// == compares with coercion (Loose)
if (age == '18') console.log('Wrong type');

const favoriteNumber = prompt("What's your favorite number?")

if (favoriteNumber === 10) { //Won't work because favoriteNumber is a string
    console.log("10 is cool")
}

if (Number(favoriteNumber) === 15) {
    console.log("15 is cool")
} else if (Number(favoriteNumber) === 20) {
    console.log("20 is also cool");
}
// !== Strict different operator  != Loose different operator
if (Number(favoriteNumber) !== 15) {
    console.log("Why not 15");
}

// Logical Operators

// AND (&&)only if all variables are true = true
// OR only (||) one is true = true
// NOT (!) invert the value

const hasDriversLicense = true;
const hasGoodVision = true;
const notTired = true;

console.log(hasDriversLicense && hasGoodVision); //true
console.log(hasDriversLicense || hasGoodVision); //true
console.log(hasDriversLicense && !hasGoodVision); //false

const shouldDrive = hasDriversLicense && hasGoodVision;

if (hasDriversLicense && hasGoodVision && notTired) {
    console.log('is able to drive');
} else if (hasDriversLicense && hasGoodVision && !notTired) {
    console.log('should not drive')
} else if (hasDriversLicense && !hasGoodVision && notTired) {
    console.log('should not drive')
} else if (!hasDriversLicense && hasGoodVision && notTired) {
    console.log('should not drive')
}

let dolphinAverage, koalaAverage;

dolphinAverage = (100 + 100 + 100) / 3;
koalaAverage = (100 + 100 + 100) / 3;

console.log(dolphinAverage);
console.log(koalaAverage);

if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
    console.log("dolphin wins")
} else if (dolphinAverage < koalaAverage && koalaAverage >= 100) {
    console.log("koala wins")
} else if (dolphinAverage === koalaAverage && koalaAverage >= 100) {
    console.log("draw")
} else {
    console.log("nobody wins")
}

// Condition (Ternary) Operator

const drink = age >= 18 ? 'Beer' : 'Water';

console.log(drink);
console.log(`I like to drink ${age >= 18 ? 'Beer' : 'Water'}`)


const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`)