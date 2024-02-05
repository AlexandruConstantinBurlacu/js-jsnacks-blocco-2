let numbersArray = [];
let sum = 0;
let askNumbers;

// creazione ciclo while

while (sum < 50) {
    askNumbers = Number(prompt("Please insert number"));
    numbersArray.push(askNumbers);
    sum += askNumbers;
}

document.getElementById("number-sum").innerHTML = sum;
