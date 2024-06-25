console.log('Exercise 1 : Find The Sum');
// Instructions
// Create a one line function (ie.an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (x, y) => x + y;
console.log(sum(6, 9));

//
console.log('Exercise 2 : Kg And Grams');
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
//     Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

function declaration(kg) {
    return kg * 1000;
}
console.log(declaration(1));

const expression = function (kg) {
    return kg * 1000;
}
console.log(expression(2));

// Function declarations are hoisted, while function expressions are not.

const oneLine = kg => kg * 1000;
console.log(oneLine(3));

//
console.log('Exercise 3 : Fortune Teller')
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."


function message(numChildren, partnerName, location, jobTitle) {
    const fortuneMessage = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    document.getElementById('fortune').innerText = fortuneMessage;
}
message(2, 'Alex', 'Tel Aviv', 'Full Stack Developer');
console.log(document.getElementById('fortune').textContent);

// Exercise 4 : Welcome'
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

function welcome(userName) {
    const userInfoDiv = document.getElementById('user-info');
    const profilePictureUrl = 'https://i.pinimg.com/564x/e3/51/1a/e3511a558fa50bd50c070b7383689a6a.jpg';
    userInfoDiv.innerHTML = `
        <img src="${profilePictureUrl}" alt="Profile Picture" class="rounded-circle" width="30" height="30">
        <span class="ml-2">${userName}</span>
    `;
}
welcome('Anya Anya');

console.log('Exercise 5 : Juice Bar');
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a < size drink > juice, containing < first ingredient >, <second ingredient>, <third ingredient>".
// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        const juiceOrderDiv = document.getElementById('juice-order');
        juiceOrderDiv.innerText = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
    }
    addIngredients('apple', 'banana', 'orange');
}

makeJuice('large');

// Part II:
// In the makeJuice function, create an empty array named ingredients.
// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        const juiceOrderDiv = document.getElementById('juice-order');
        const ingredientList = ingredients.join(', ');
        juiceOrderDiv.innerText = `The client wants a ${size} juice, containing ${ingredientList}.`;
    }

    addIngredients('apple', 'banana', 'orange');
    addIngredients('mango', 'pineapple', 'strawberry');
    displayJuice();
}

makeJuice('large');

console.log(document.getElementById('juice-order').textContent);

