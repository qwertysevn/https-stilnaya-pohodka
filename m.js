const entryButton = document.querySelector('.js_entryButton');
const entryDisplay = document.querySelector('.js_entryDisplay');

entryButton.onclick = function () {
    entryDisplay.style.display = "block";
};

entryDisplay.onclick = function (event) {
    if (event.target.className.includes('overlay')) {
        entryDisplay.style.display = 'none';
    };
};

// const entryButton = document.querySelector('.');
const divGreen = document.querySelector(".js_div_green");

function changeColor() {
    divGreen.style.color = "#FFF";
    divGreen.style.backgroundColor = "#3D5C4C";
}