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
        let min = line.substring(0, dashIndex);
        let max = line.substring(++dashIndex, spaceIndex);
        let condition = line.substring(spaceIndex, colonIndex).trim();
        let password = line.substring(++colonIndex).trim();

        const conditionCount = password.split(condition).length - 1;

        if(conditionCount <= max && conditionCount >= min) {
            numberOfValidPasswords++;
        }
    });
    console.log(`Number of valid passwords is ${numberOfValidPasswords}`);
}

lineByLine();
