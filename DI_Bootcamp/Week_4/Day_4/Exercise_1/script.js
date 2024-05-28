const conDiv = document.getElementById('container');
console.log(conDiv);

const listElements = document.getElementsByClassName('list');
listElements[0].children[1].textContent = "Richard";

listElements[1].children[1].remove();

for (let ul of listElements) {
    ul.children[0].textContent = "Ksenia";
}

// Bonus
for (let ul of listElements) {
    ul.classList.add('student_list');
}
listElements[0].classList.add('university', 'attendance');