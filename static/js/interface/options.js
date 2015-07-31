var options =
{
    // Common aspect ratios
    aspectRatios:
    {
        '16:9': 16/9,
        '16:10': 16/10,
        '4:3': 4/3,
        '5:4': 5/4
    }
};

// Function to calculate the closest aspect ratio based on your screen size
function closestRatio()
{
    var current = $(window).width().inner / $(window).height().inner;
    var closest = {};

    // Loop through common aspect ratios to see which is closest
    for(var ratio in options.aspectRatios)
    {
        var difference = Math.abs(current - options.aspectRatios[ratio]);

        if(closest.difference === undefined || closest.difference > difference)
        {
            closest.ratio = ratio;
            closest.difference = difference;
        }
    }

    return closest.ratio;
}

$(document).ready(function()
{
    $('.options').dragondrop();

    // Determine the closest aspect ratio on page load
    options.aspectRatio = closestRatio();
    
    // Loop through common aspect ratios to build options menu
    for(var ratio in options.aspectRatios)
    {
        var option = '<option>'+ratio+'</option>';
        
        if(options.aspectRatio == ratio)
        {
            option = '<option selected>'+ratio+'</option>'
        }
    
        $('.options .aspect-ratio').append(option);
    }
});
