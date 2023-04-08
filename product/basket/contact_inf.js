const tryButton = document.querySelector('.js_tryButton');
const tryDisplay = document.querySelector('.js_tryDisplay');

tryButton.onclick = function () {
    tryDisplay.style.display = "block";
};

tryDisplay.onclick = function (event) {
    if (event.target.className.includes('overlay')) {
        tryDisplay.style.display = 'none';
    };
};



$('.js-close-popup').click(function () {
        $('.all_modal').hide();
    });
