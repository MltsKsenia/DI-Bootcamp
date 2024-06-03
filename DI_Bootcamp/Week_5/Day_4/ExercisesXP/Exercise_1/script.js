setTimeout(() => {
    alert("Hello World!");
}, 2000);

setTimeout(() => {
    const container = document.getElementById('container');
    const newP = document.createElement('p');
    newP.textContent = "Hello World!";
    container.appendChild(newP);

}, 2000);
const interval = setInterval(() => {
    const container = document.getElementById('container');
    const newP = document.createElement('p');
    newP.textContent = "Hello World!";
    container.appendChild(newP);

    if (container.getElementsByTagName('p').length >= 5) {
        clearInterval(interval);
    }
}, 2000);

document.getElementById('clear').addEventListener('click', () => {
    clearInterval(interval);
});