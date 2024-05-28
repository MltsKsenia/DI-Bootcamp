const divElement = document.querySelector('div');
divElement.style.backgroundColor = 'lightblue';
divElement.style.padding = '10px';

const ulElement = document.querySelector('ul');
const liJohn = ulElement.children[0];
liJohn.style.display = 'none';

const liPete = ulElement.children[1];
liPete.style.border = '1px solid black';

document.body.style.fontSize = '20px';

// Bonus
if (divElement.style.backgroundColor === 'lightblue') {
    const users = [];
    for (let li of ulElement.children) {
        if (li.style.display !== 'none') {
            users.push(li.textContent);
        }
    }
    alert('Hello ' + users.join(' and '));
}