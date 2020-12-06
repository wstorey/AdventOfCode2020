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
        inputArr.push(parseInt(line));
    }

    inputArr.forEach((line, i) => {
        for(j = i; j < inputArr.length; j++) {
            let sumOfLines = line + inputArr[j];
            if(sumOfLines === 2020) {
                console.log(`${inputArr[i]} + ${inputArr[j]} = ${sumOfLines} | Product is - ${inputArr[i] * inputArr[j]}`);
            }
        }
    });
}

lineByLine();
