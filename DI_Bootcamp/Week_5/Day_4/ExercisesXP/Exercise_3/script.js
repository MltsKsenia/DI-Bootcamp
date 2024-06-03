const box = document.getElementById('box');
const target = document.getElementById('target');

function allowDrop(event) {
    event.preventDefault();
}

function allowEnter(event) {
    event.target.classList.add('over');
}

function allowLeave(event) {
    event.target.classList.remove('over');
}

function dragStart(event) {
    console.log("target", event.target)
    console.log("box", event.target.box)
    event.dataTransfer.setData("text", event.target.id);
}

function dragDrop(event) {
    event.preventDefault();

    let data = event.dataTransfer.getData("text");
    console.log("data: ", data)

    let box = document.getElementById(data)
    event.target.appendChild(box);
}