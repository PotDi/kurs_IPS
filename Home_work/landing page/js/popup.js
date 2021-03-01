$(window).on('load', () => {
    initPopup();
})

function initPopup() {
    $('#subscribeButton').click((event) => {
        event.preventDefault();
        $('#overlay, #popup').addClass('visible');
    })
    $('#overlay, #closeButton').click(() => {
        $('#overlay, #popup').removeClass('visible');
    })
}