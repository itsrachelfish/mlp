// An object containing common aspect ratios
var aspectRatios =
{
    '16:9': 16/9,
    '16:10': 16/10,
    '4:3': 4/3,
    '5:4': 5/4
};

$(document).ready(function()
{
    // Loop through common aspect ratios to build options menu
    for(var ratio in aspectRatios)
    {
        $('.aspect-ratio').append('<option>'+ratio+'</option>');
    }
});
