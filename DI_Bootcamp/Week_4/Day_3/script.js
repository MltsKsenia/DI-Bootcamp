/// Exercise 1
let divNode = document.getElementsByTagName('div')[0];
console.log(divNode);

let ulNode = document.getElementsByTagName('ul')[0];
console.log(ulNode);

let ulPete = document.querySelector('ul');
let li = ulPete.children[1];
console.log(li);

/// Exercise 2
let divNodes = document.getElementById('container');
console.log(divNodes);

let ul1 = document.getElementsByClassName('list');
for (let ul of ul1) {
    for (let li of ul.children) {
        console.log(li.textContent);
    }
}

let ulNodes3 = document.querySelectorAll('ul.list');
ulNodes3.forEach(ul => {
    console.log(ul.querySelector('li').textContent);
});

/// Exercise 3
let linkElement = document.getElementById('dI');

let hrefValue = linkElement.getAttribute('href');
let hreflangValue = linkElement.getAttribute('hreflang');
let relValue = linkElement.getAttribute('rel');
let targetValue = linkElement.getAttribute('target');
let typeValue = linkElement.getAttribute('type');

console.log('href:', hrefValue);
console.log('hreflang:', hreflangValue);
console.log('rel:', relValue);
console.log('target:', targetValue);
console.log('type:', typeValue);

/// Exercise 4
let paragraph = document.getElementById('text');

paragraph.style.fontSize = '20px';
paragraph.style.fontFamily = 'Arial, sans-serif';
paragraph.style.color = 'blue';
paragraph.style.backgroundColor = 'lightgray';
paragraph.style.padding = '10px';
paragraph.style.border = '2px solid black';