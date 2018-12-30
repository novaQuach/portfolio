AOS.init();

let typed = new Typed('#typed', {
    strings: [
        '&nbsp;Developer',
        '&nbsp;Yoga Lover',
        '&nbsp;Traveller',
        '&nbsp;Boba Sipper',
    ],
    typeSpeed: 70,
    backSpeed: 35,
    backDelay: 1000,
    loop: true,
    smartBackspace: true,
    showCursor: false,
});

$(document).ready(function() {
    $(function() {
        $('a').smoothScroll();
    });
});
