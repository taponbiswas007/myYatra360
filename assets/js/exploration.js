$(document).ready(function () {
    $(".placeTablist li button").click(function(){
        $(".placeTablist li button").removeClass("active");
        $(this).addClass('active');
    });


    $('.explorarContent').hide(); // Hide all by default
    $('#somnathContent').show().addClass('contentActive'); // Show default one

    function changeTab(target) {
        $('.explorarContent.contentActive').fadeOut(300, function () {
            $(this).removeClass('contentActive');
            $('#' + target).fadeIn(300).addClass('contentActive');
        });
    }

    $('.somnathBtn').click(function () {
        changeTab('somnathContent');
    });
    $('.mallikarjunaBtn').click(function () {
        changeTab('mallikarjunaContent');
    });
    $('.mahakaleshwarBtn').click(function () {
        changeTab('cancelledStatus');
    });
    $('.omkareshwarBtn').click(function () {
        changeTab('rejectedStatus');
    });
    $('.kedarnathBtn').click(function () {
        changeTab('escalatedStatus');
    });
    $('.bhimashankarBtn').click(function () {
        changeTab('escalatedStatus');
    });
    $('.bhimashankarBtn').click(function () {
        changeTab('escalatedStatus');
    });
})