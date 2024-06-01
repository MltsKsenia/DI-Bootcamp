const h1 = document.querySelector('h1');
console.log(h1);

const article = document.querySelector('article');
const lastP = article.lastElementChild;
article.removeChild(lastP);

const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
    h2.style.backgroundColor = 'red'
});

const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
    h3.style.display = 'none'
});

const boldButton = document.getElementById('boldButton');
boldButton.addEventListener('click', () => {
    const paragraphs = document.querySelectorAll('article p');
    paragraphs.forEach(paragraph => {
        paragraph.style.fontWeight = 'bold';
    });
});