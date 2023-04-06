const entryButton = document.querySelector('.js_entryButton1');
const entryDisplay = document.querySelector('.js_entryDisplay1');

entryButton.onclick = function () {
    entryDisplay.style.display = "block";
};

entryDisplay.onclick = function (event) {
    if (event.target.className.includes('overlay')) {
        entryDisplay.style.display = 'none';
    };
};