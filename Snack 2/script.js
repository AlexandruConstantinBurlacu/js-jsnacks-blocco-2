// generazione numero casuale da 1 a 100
const casualNumber = Math.floor(Math.random() * 100) + 1;

let playerNumber;

let count = 0;

do {

    playerNumber = Number(prompt("Please insert a number between 1 and 100"));


    if (playerNumber > casualNumber) {
        // numero troppo alto
        alert("The number is too high");
    } else if (playerNumber < casualNumber) {
        alert("The number is too low");
    } 

    count++

} while (playerNumber !== casualNumber);

console.log("You guessed the right number!" + casualNumber + ". Hai fatto " + count + " tentativi.");
