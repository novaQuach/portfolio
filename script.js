AOS.init();

$(document).ready(function() {
    $('#home').click(function() {
        $('.landing-header').scrollIntoView();
    });

    $('#about').click(function() {
        $('#about-me-section').scrollIntoView();
    });
});
