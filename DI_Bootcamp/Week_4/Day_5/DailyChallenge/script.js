function singSong() {
    let startBottles = prompt("Enter the number of bottles to start with:");
    startBottles = parseInt(startBottles);
    if (isNaN(startBottles) || startBottles <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }
    let bottles = startBottles;
    let takeDown = 1;
    while (bottles > 0) {
        console.log(`${bottles} ${bottles === 1 ? 'bottle' : 'bottles'} of beer on the wall`);
        console.log(`${bottles} ${bottles === 1 ? 'bottle' : 'bottles'} of beer`);
        console.log(`Take ${takeDown} down, pass ${takeDown === 1 ? 'it' : 'them'} around`);
        bottles -= takeDown;
        takeDown++;

        if (bottles > 0) {
            console.log(`${bottles} ${bottles === 1 ? 'bottle' : 'bottles'} of beer on the wall`);
        } else {
            console.log(`No more bottles of beer on the wall`);
        }
        console.log('');
    }
}
