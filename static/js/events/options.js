var Menu = require('../plugins/menu');
var options = require('../src/options');
var helpers = require('../src/helpers');

$(document).ready(function()
{
    var menu = new Menu({title: 'Options', selector: '.templates .options', class: 'option-menu'});
    $('.option-menu').dragondrop({handle: '.title'});

    $('.option-menu').on('dragend', function()
    {
        menu.save();
    });

    // Determine the closest aspect ratio on page load
    options.aspectRatio = helpers.ratio.closest();
    helpers.ratio.update();
    
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

    $('.options .aspect-ratio').on('change', function()
    {
        options.aspectRatio = $(this).value();
        helpers.ratio.update();
    });

    $('.options .zoom').on('input', function()
    {
        options.zoom = $(this).value();
        helpers.zoom.update();
    });
});
