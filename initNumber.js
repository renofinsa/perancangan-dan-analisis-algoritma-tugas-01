const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let total = 0;
let count = 0;

function initNumber() {
    if (count < 5) {
        rl.question(`Masukkan bilangan ke-${count + 1}: `, (input) => {
            let number = parseFloat(input);
            if (!isNaN(number)) {
                numbers.push(number);
                total += number;
                count++;
                initNumber();
            } else {
                console.log("Input tidak valid, masukkan angka!");
                initNumber();
            }
        });
    } else {
        console.log("Total dari lima bilangan adalah:", total);
        rl.close();
    }
}

initNumber();
