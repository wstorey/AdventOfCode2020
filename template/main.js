const fs = require('fs');
const readline = require('readline');

async function lineByLine() {
    let inputArr = [];
    const fileStram = fs.createReadStream('input.txt');

    let input = readline.createInterface({
        input: fileStram,
        crlfDelay: Infinity
    });

    for await (const line of input) {
        inputArr.push(line);
    }

    inputArr.forEach((line, i) => {
        // do something...
    });
}

lineByLine();
