const readline = require('node:readline');

function compareNumber(inputNumber) {
    if (inputNumber > 3) {
        console.log("The number is greater than 3");
    } else if (inputNumber < 3) {
        console.log("The number is less than 3");
    } else {
        console.log("The number is equal to 3");
    }
}

function getRandomNumber() {
    const numbers = [1, 2, 3, 4, 5];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter a number: ', answer => {
    const userNumber = parseInt(answer, 10);
    if (isNaN(userNumber)) {
        console.log("Please enter a valid number.");
    } else {
        compareNumber(userNumber);
        const randomNum = getRandomNumber();
        console.log(`Random number from array: ${randomNum}`);
    }
    rl.close();
});
