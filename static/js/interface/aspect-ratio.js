// An object containing common aspect ratios
var aspectRatios =
{
    '16:9': 16/9,
    '16:10': 16/10,
    '4:3': 4/3,
    '5:4': 5/4
};

// Function to calculate the closest aspect ratio based on your screen size
function closestRatio()
{
    var current = $(window).width().inner / $(window).height().inner;
    var closest = {};

    // Loop through common aspect ratios to see which is closest
    for(var ratio in aspectRatios)
    {
        var difference = Math.abs(current - aspectRatios[ratio]);

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
    closestRatio();

    $(window).on('resize', function()
    {
        closestRatio();
    });
});
