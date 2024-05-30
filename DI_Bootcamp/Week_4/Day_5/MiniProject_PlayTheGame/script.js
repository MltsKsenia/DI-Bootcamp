function playTheGame() {
    let wantToPlay = confirm("Do you want to play the game?");
    if (!wantToPlay) {
        alert("No problem, Goodbye");
        return;
    }

    let userNumber;
    while (true) {
        userNumber = prompt("Please enter a number between 0 and 10:");
        if (userNumber === null) {
            alert("Goodbye");
            return;
        }
        userNumber = Number(userNumber);
        if (isNaN(userNumber)) {
            alert("Sorry, that's not a number. Try again.");
        } else if (userNumber < 0 || userNumber > 10) {
            alert("Sorry, that's not a good number. Try again.");
        } else {
            break;
        }
    }

    const computerNumber = Math.floor(Math.random() * 11);
    console.log("Computer Number:", computerNumber);

    compareNumbers(userNumber, computerNumber);
}

function compareNumbers(userNumber, computerNumber) {
    let attempts = 1;
    while (attempts <= 3) {
        if (userNumber === computerNumber) {
            alert("WINNER");
            return;
        } else if (userNumber > computerNumber) {
            userNumber = Number(prompt("Your number is bigger than the computer’s, guess again:"));
        } else if (userNumber < computerNumber) {
            userNumber = Number(prompt("Your number is smaller than the computer’s, guess again:"));
        }
        attempts++;
    }
    alert("Out of chances");
}

