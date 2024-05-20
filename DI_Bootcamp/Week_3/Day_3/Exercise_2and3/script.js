//  Exercise 2 //code
let a = 2 + 2;

switch (a) {
    // Check if `a` is equal to 3 if its equal show 'Too small'
    case 3:
        alert('Too small');
        break;
    // Check if `a` is equal to 4 if its equal show 'Exactly!'
    case 4:
        alert('Exactly!');
        break;
    // Check if `a` is equal to 5 if its equal show 'Too large'
    case 5:
        alert('Too large');
        break;
    // Show the alert "I don't know such values" if 'a' dosen't match any of the above cases
    default:
        alert("I don't know such values");
}

//  Exercise 3 //code
let b = 2 + 2;

switch (b) {
    // Check if `a` is equal to 4 if its equal show 'Right!'
    case 4:
        alert('Right!');
        break;
    // Check if `a` is equal to 3 or 5 if its equal show 'Wrong!' and "Why don't you take a math class?"
    case 3: // (*) grouped two cases
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;
    // Show the alert 'The result is strange. Really.' if 'b' dosen't match any of the above cases
    default:
        alert('The result is strange. Really.');
}