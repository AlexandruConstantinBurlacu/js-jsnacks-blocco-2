// generazione numero casuale da 1 a 100
let casualNumber = Math.floor(Math.random() * 100) + 1;

let playerNumber;

while (playerNumber = casualNumber) {
    playerNumber = Number(prompt("Please insert a number between 1 and 100"));

    // condizioni
    if (playerNumber > casualNumber) {
        // numero troppo alto
        alert("The number is too high");
    } else if (playerNumber < casualNumber) {
        alert("The number is too low");
    } else if (playerNumber === casualNumber) {
        alert("You guessed the number, congratulation!");
    }
} 
