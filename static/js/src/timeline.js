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
            var wrap = $('.templates .layer-wrap').clone();
            $('.timeline .layers').el[0].appendChild(wrap);

            // Draw tick marks on the layer's canvas
            var duration = $('.timeline .duration').value();
            timeline.drawTicks($(wrap).find('.layer').el[0], $(wrap).find('canvas').el[0], duration);

            timeline.layer.events(wrap);
        },

        // Function to bind events for layers
        events: function(wrap)
        {
            $(wrap).dragondrop({handle: '.handle', axis: 'y', position: 'static'});

            // Hack to make dragondrop work since the draggable elements have so many children 
            $(wrap).on('dragstart', function()
            {
                $('.layer-wrap .icons, .layer-wrap .layer').style({'pointer-events': 'none'});
            });

            $(wrap).on('dragend', function()
            {
                $('.layer-wrap .icons, .layer-wrap .layer').style({'pointer-events': 'auto'});
            });

            $(wrap).find('.visible').on('click', function()
            {
                var icon = $(this);
                var layer = $(wrap).find('.layer');

                if(layer.hasClass('inactive'))
                {
                    icon.text('★');
                    layer.removeClass('inactive');
                }
                else
                {
                    icon.text('☆');
                    layer.addClass('inactive');
                }
            });
            
            $(wrap).find('.delete').on('click', function()
            {
                $(wrap).remove();
            });
        }
    },
};

module.exports = timeline;
