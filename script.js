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
        $('.nav-links').on('click', () => {
            // hamburger menu is a hidden checkbox, when clicked, checkbox checked, menu pops out(indicated by css styles .toggle:checked) onClick of a nav-link, changing checkbox property value to false/unchecked.
            $('.toggle').prop('checked', false);
        });
    });
});
