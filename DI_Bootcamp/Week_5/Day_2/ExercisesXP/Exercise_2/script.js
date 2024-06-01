const form = document.querySelector('form');
console.log(form);

const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log(fnameInput);
console.log(lnameInput);

const fnameByName = document.querySelector('[name = "firstname"]');
const lnameByName = document.querySelector('[name = "lastname"]');
console.log(fnameByName);
console.log(lnameByName);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = fnameInput.value.trim();
    const lastName = lnameInput.value.trim();

    if (firstName === '' || lastName === '') {
        alert('Please fill the form.');
        return;
    }

    const ul = document.querySelector('.usersAnswer');
    ul.innerHTML = '';

    const liFirstName = document.createElement('li');
    liFirstName.textContent = firstName;
    ul.appendChild(liFirstName);

    const liLastName = document.createElement('li');
    liLastName.textContent = lastName;
    ul.appendChild(liLastName);
});