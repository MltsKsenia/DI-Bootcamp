let color = null;
let mousedown = false;

let body = document.getElementsByTagName("body")[0];
let colorBlocks = document.querySelectorAll("#sidebar > *");
let fillBlocks = document.querySelectorAll("#main > *");
let clearButton = document.getElementsByTagName("button")[0];

clearButton.addEventListener("click", function () {
    for (fillBlock of fillBlocks) {
        fillBlock.style.backgroundColor = "white";
    }
});

body.addEventListener("mousedown", function () {
    mousedown = true;
})

body.addEventListener("mouseup", function () {
    mousedown = false;
})


for (colorBlock of colorBlocks) {
    colorBlock.addEventListener("click", function (event) {
        color = event.target.style.backgroundColor;
    });
}

for (fillBlock of fillBlocks) {
    fillBlock.addEventListener("mousedown", function (event) {
        if (color != null) event.target.style.backgroundColor = color;
    });
    fillBlock.addEventListener("mouseover", function (event) {
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}
