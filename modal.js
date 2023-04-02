$('.js-open-modal').click(function (event) {
    event.preventDefault();

    var modalName = $(this).attr('data-modal');
    var modal = $('.js-modal[data-modal="' + modalName + '"]');

    modal.addClass('is-show');
});