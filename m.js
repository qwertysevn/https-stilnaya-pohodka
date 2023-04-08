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

const divGreen = document.querySelector(".js_div_green");
const divP = document.querySelector(".js-third");

function changeColor() {
    divGreen.style.color = "#FFF";
    divGreen.style.backgroundColor = "#3D5C4C";
    divP.style.color = "#FFF";
    divP.style.backgroundColor = "#3D5C4C";
}


$('.js-close-popup').click(function () {
    $('.all_modal').hide();
});