$(document).ready(function () {
    $(".placeTablist li button").click(function(){
        $(".placeTablist li button").removeClass("active");
        $(this).addClass('active');
    })
})