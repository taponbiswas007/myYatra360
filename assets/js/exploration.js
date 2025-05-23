
$(document).ready(function () {
    // Main tab buttons
    $(".placeTablist li button").click(function () {
        $(".placeTablist li button").removeClass("active");
        $(this).addClass('active');
    });


    $(document).on('click', '.subplaceList button', function () {
        $(".subplaceList button").removeClass("active");
        $(this).addClass('active');
        var selectedText = $(this).text();
        $("#explorarTitle").text(selectedText);
        localStorage.setItem('lastSelectedButton', selectedText);
    });

    // Main content tabs
    $('.explorarContent').hide(); // Hide all by default
    $('#somnathContent').show().addClass('contentActive'); // Show default

    function changeMainTab(target) {
        $('.explorarContent.contentActive').fadeOut(300, function () {
            $(this).removeClass('contentActive');
            $('#' + target).fadeIn(300).addClass('contentActive');
        });
    }

    $('.somnathBtn').click(function () {
        changeMainTab('somnathContent');
    });
    $('.mallikarjunaBtn').click(function () {
        changeMainTab('mallikarjunaContent');
    });

    // Subplace list changer
    $('.subplacelistitems').hide(); // Hide all by default
    $('#jyotirlinga1subitem').show().addClass('subplacelistActive'); // Show default

    function changeSubTab(target) {
        $('.subplacelistitems.subplacelistActive').fadeOut(300, function () {
            $(this).removeClass('subplacelistActive');
            $('#' + target).fadeIn(300).addClass('subplacelistActive');
        });
    }

    $('.jyotirlinga1btn').click(function () {
        changeSubTab('jyotirlinga1subitem');
    });
    $('.jyotirlinga2btn').click(function () {
        changeSubTab('jyotirlinga2subitem');
    });
    $('.shaktiPithbtn').click(function () {
        changeSubTab('shaktipitharea');
    });
});