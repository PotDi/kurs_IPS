window.addEventListener('load', function () {
    setBodyLoaded();
    setAnimatedBlockLoaded();
    initScrollUpButton();
});

$(window).on('load', () => {
    initScrollUpButton();
})


$(window).on('scroll', () => {
    toggleScrollUpButton();
})


function setBodyLoaded() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
}

function setAnimatedBlockLoaded() {
    let reached = false;
    const ANIMATED_BLOCK_OFFSET = 300;
    const animatedBlock = document.getElementById('animatedBlock');
    const animatedBlockOffset = animatedBlock.offsetTop;
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', function () {
        let scrolled = window.pageYOffset;
        if (scrolled + windowHeight > animatedBlockOffset + ANIMATED_BLOCK_OFFSET) {
            if (!reached) {
                animatedBlock.classList.add('loaded');
                reached = true;
            }

        }
    })
}

function initScrollUpButton() {
    $('#scrollUpButton').click(() => {
        $('html').animate({
            scrollTop: 0,
        }, 500)
    })
}

function toggleScrollUpButton() {
    if ($(window).scrollTop() >= 300) {
        $('#scrollUpButton').addClass('visible')
    } else {
        $('#scrollUpButton').removeClass('visible')
    }
}
