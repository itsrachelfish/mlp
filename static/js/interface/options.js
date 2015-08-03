var Menu = require('../plugins/menu');

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

// Helper functions
var helpers =
{
    // Aspect ratio specific functions
    ratio:
    {
        // Function to calculate the closest aspect ratio based on your screen size
        closest: function()
        {
            var current = $(window).width() / $(window).height();
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
        },

        // Function to update the canvas based on the current aspect ratio
        update: function()
        {
            // Find the largest box within the current aspect ratio that fits onto the screen
            var width = $(window).width();
            var height = $(window).height();
            var ratio = options.aspectRatios[options.aspectRatio];
            var canvas = {};

            // Check if the box will fit within the available height
            if(width / ratio <= height)
            {
                canvas.width = width + 'px';
                canvas.height = width / ratio + 'px';
            }

            // Otherwise, make the box fit within the available width
            else
            {
                canvas.width = height * ratio + 'px';
                canvas.height = height + 'px';
            }

            // Center the canvas
            canvas.top = (height - parseFloat(canvas.height)) / 2 + 'px';
            canvas.left = (width - parseFloat(canvas.width)) / 2 + 'px';

            $('.canvas').style(canvas);
        }
    },

    zoom:
    {
        update: function()
        {
            var scale = options.zoom / 100;
            $('.canvas').transform('scale', scale, scale);
        }
    }
};

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
