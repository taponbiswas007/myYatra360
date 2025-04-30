$(document).ready(function () {
    $(".placeTablist li button").click(function(){
        $(".placeTablist li button").removeClass("active");
        $(this).addClass('active');
    });
    $(".subplaceList button").click(function(){
        $(".subplaceList button").removeClass("active");
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
   


    // sub place list changer
    // $('.subplacelistitems').hide(); // Hide all by default
    // $('#jyotirlinga1subitem').show().addClass('subplacelistActive'); // Show default one

    // function changeTab(target) {
    //     $('.subplacelistitems.subplacelistActive').fadeOut(300, function () {
    //         $(this).removeClass('subplacelistActive');
    //         $('#' + target).fadeIn(300).addClass('subplacelistActive');
    //     });
    // }

    // $('.jyotirlinga1btn').click(function () {
    //     changeTab('jyotirlinga1subitem');
    // });
    // $('.jyotirlinga2btn').click(function () {
    //     changeTab('jyotirlinga2subitem');
    // });
    // $('.shaktiPithbtn').click(function () {
    //     changeTab('shaktipitharea');
    // });

  
   
})