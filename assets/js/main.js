$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $(this).toggleClass('active');
        $('.menu-content').slideToggle(), 500;
    });
});