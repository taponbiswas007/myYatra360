$(document).ready(function() {
    // When a city is selected from the dropdown
    $('.aiDataInputfeild select').change(function() {
        // Get the selected value
        var selectedCity = $(this).val();
        
        // Only proceed if it's not the default "Select Cities" option
        if (selectedCity !== "Select Cities") {
            // Check if the city is already in the list
            if ($('.selectedCityList').find('span:contains("' + selectedCity + '")').length === 0) {
                // Create new city item
                var cityItem = $('<div class="cityName_items">' +
                    '<span>' + selectedCity + '</span>' +
                    '<button><i class="fa-solid fa-xmark"></i></button>' +
                    '</div>');
                
                // Add to the list
                $('.selectedCityList').append(cityItem);
            }
            
            // Reset the dropdown to the default option
            $(this).val("Select Cities");
        }
    });
    
    // Handle click on remove buttons (including dynamically added ones)
    $('.selectedCityList').on('click', '.cityName_items button', function() {
        // Remove the parent city item
        $(this).closest('.cityName_items').remove();
    });


    $(".who_are_you_traveling_with_area .partner_items").click(function(){
        $(".who_are_you_traveling_with_area .partner_items").removeClass('active');
        $(this).addClass('active');
    });


    $(".interested_selected_items_area .selected_item").click(function(){
        $(".interested_selected_items_area .selected_item").removeClass('active');
        $(this).addClass('active');
    })
});