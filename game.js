
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function submitGuess() {
    let guess = parseInt(document.getElementById('guessField').value);
    attempts++;

    if (guess === randomNumber) {
        document.getElementById('message').innerText = `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else if (guess < randomNumber) {
        document.getElementById('message').innerText = 'Too low! Try again.';
    } else {
        document.getElementById('message').innerText = 'Too high! Try again.';
    }
}
