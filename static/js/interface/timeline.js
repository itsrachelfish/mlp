// Code for the timeline
var Menu = require('../plugins/menu');

var timeline =
{
    // Function for drawing the tick marks on a canvas
    drawTick: function(context, start, length)
    {
        context.beginPath();
        context.moveTo(start[0], start[1]);
        context.lineTo(start[0], start[1] + length);
        context.stroke();
    },
    
    // Function to generate the ticks on each layer
    drawTicks: function(layer, canvas, duration)
    {
        // Make sure the canvas fits into the available space
        var size = $(layer).size();

        // Remove the border size
        size.width -= parseFloat($(layer).style('border-left-width')) + parseFloat($(layer).style('border-right-width'));
        size.height -= parseFloat($(layer).style('border-top-width')) + parseFloat($(layer).style('border-bottom-width'));
        
        $(canvas).attr('width', size.width);
        $(canvas).attr('height', size.height);

        // Clear the canvas and draw new ticks
        var context = canvas.getContext('2d');

        // Make sure the canvas is cleared
        context.clearRect(0, 0, size.width, size.height);

        for(var i = 0, l = duration + 1; i < l; i++)
        {
            var offset = (size.width / duration) * i;
            
            if(i % 10)
            {
                timeline.drawTick(context, [offset, size.height], -5);
            }
            else
            {
                timeline.drawTick(context, [offset, size.height], -10);
            }
        }
    },

    layer:
    {
        // Function which creates a layer based on the layer template
        add: function()
        {
            // Add the new layer to the layers container
            var layer = $('.templates .layer-wrap').clone();
            $('.timeline .layers').el[0].appendChild(layer);

            // Draw tick marks on the layer's canvas
            var duration = $('.timeline .duration').value();
            timeline.drawTicks($(layer).find('.layer').el[0], $(layer).find('canvas').el[0], duration);

            timeline.layer.events(layer);
        },

        // Function to bind events for layers
        events: function(layer)
        {
            $(layer).dragondrop({handle: '.handle', axis: 'y'});
            $(layer).attr('style', '');
            
            $(layer).find('.delete').on('click', function()
            {
                $(layer).remove();
            });
        }
    },
};

$(document).ready(function()
{
    var menu = new Menu({title: 'Timeline', selector: '.templates .timeline', class: 'timeline-menu'});
    $('.timeline-menu').dragondrop({handle: '.title'});

    $('.timeline .add-layer').on('click', function()
    {
        timeline.layer.add();
    });

    $('.timeline .duration').on('input', function()
    {
        // Update tick marks on each layer whenever the duration is changed
        $('.timeline .layer').each(function()
        {
            var duration = $('.timeline .duration').value();
            timeline.drawTicks(this, $(this).find('canvas').el[0], duration);
        });
    });

    // Redraw canvases when the menu is resized
    $('.timeline-menu').on('resized', function()
    {
        $('.timeline .layer').each(function()
        {
            var duration = $('.timeline .duration').value();
            timeline.drawTicks(this, $(this).find('canvas').el[0], duration);
        });
    });
});
