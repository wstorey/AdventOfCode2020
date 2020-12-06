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
            for (k = j; k < inputArr.length; k++) {
                let sumOfLines = line + inputArr[j] + inputArr[k];
                if(sumOfLines === 2020) {
                    console.log(`${inputArr[i]} + ${inputArr[j]} + ${inputArr[k]} = ${sumOfLines} | Product is - ${inputArr[i] * inputArr[j] * inputArr[k]}`);
                }
            }
        }
    });
}

lineByLine();
