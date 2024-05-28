const navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

const newLi = document.createElement('li');
const newLink = document.createElement('a');
newLink.setAttribute('href', '#');
newLink.textContent = 'Logout';
newLi.appendChild(newLink);

const ul = navBar.querySelector('ul');
ul.appendChild(newLi);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log('First link text:', firstLi.textContent);
console.log('Last link text:', lastLi.textContent);