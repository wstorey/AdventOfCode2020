const fs = require('fs');
const readline = require('readline');

async function lineByLine() {
    let inputArr = [];
    let numberOfValidPasswords = 0;
    const fileStram = fs.createReadStream('input.txt');

    let input = readline.createInterface({
        input: fileStram,
        crlfDelay: Infinity
    });

    for await (const line of input) {
        inputArr.push(line);
    }

    inputArr.forEach((line, i) => {
        // Get indexes so strings can start before them
        let dashIndex = line.indexOf('-');
        let colonIndex = line.indexOf(':');
        let spaceIndex = line.indexOf(' ');
        // Divide up strings so they're easier to work with
        let indexOne = parseInt(line.substring(0, dashIndex)) - 1;
        let indexTwo = parseInt(line.substring(++dashIndex, spaceIndex)) - 1;
        let condition = line.substring(spaceIndex, colonIndex).trim();
        let password = line.substring(++colonIndex).trim();

        if((password[indexOne] === condition || password[indexTwo] === condition) &&
            !(password[indexOne] === condition && password[indexTwo] === condition)) {
            numberOfValidPasswords++;
        }
    });
    console.log(`Number of valid passwords is ${numberOfValidPasswords}`);
}

lineByLine();
