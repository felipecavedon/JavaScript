// if...else Statement

const age = 11;

if (age >= 18) {
    console.log('You can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young
Wait another ${yearsLeft} years`);
}

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
} else {
    console.log(`John's BMI is higher than Mark's`)
}

// Switch Statement

const day = 'saturday';

switch (day) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
        console.log('Study');
        break;
    case 'thursday':
    case 'friday':
        console.log('Study');
        console.log('Practice');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Rest');
        break;
    default:
        console.log('Not a day');
}

