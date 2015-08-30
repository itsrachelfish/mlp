var timeline = require('./timeline');

var layer =
{
    // Function to generate unique IDs for layers
    id: function()
    {
        var id = parseInt($('body').data('layers') || 0);
        id++;

        $('body').data('layers', id);
        return 'layer-' + id;
    },
    
    // Function which creates a layer based on the layer template
    add: function()
    {
        var id = layer.id();
        
        // Add the new layer to the layers container
        var wrap = $('.templates .layer-wrap').clone();
        $('.timeline .layers').el[0].appendChild(wrap);

        // Draw tick marks on the layer's canvas
        var duration = $('.timeline .duration').value();
        timeline.drawTicks($(wrap).find('.layer').el[0], $(wrap).find('canvas.ticks').el[0], duration);

        layer.events(wrap);

        // Add a layer to the canvas
        var element = document.createElement('div');
        $(element).addClass('layer');
        $('.canvas').el[0].appendChild(element);

        // Save the unique layer ID
        $(wrap).data('id', id);
        $(element).attr('id', id);
    },

    // Function to bind events for layers
    events: function(wrap)
    {
        var menu = $(wrap).parents('.menu');
        var layer = $(wrap).find('.layer');
        var position = layer.position('page');
        var hover = $(wrap).find('canvas.hover').el[0];
        
        $(wrap).dragondrop({handle: '.handle', axis: 'y', position: 'static'});

        // Hack to make dragondrop work since the draggable elements have so many children 
        $(wrap).on('dragstart', function()
        {
            $('.layer-wrap .icons, .layer-wrap .layer').style({'pointer-events': 'none'});
        });

        $(wrap).on('dragend', function()
        {
            $('.layer-wrap .icons, .layer-wrap .layer').style({'pointer-events': 'auto'});

            // Update saved layer position
            position = layer.position('page');
        });

        menu.on('dragend', function()
        {
            // Update saved layer position
            position = layer.position('page');
        });

        $(wrap).find('.visible').on('click', function()
        {
            var icon = $(this);

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

        layer.on('mouseenter mousemove', function(event)
        {
            timeline.hover.draw(hover, event.clientX - position.left);
        });

        layer.on('mouseleave', function(event)
        {
            timeline.hover.clear(hover);
        });

        layer.on('click', function(event)
        {
            var id = $(wrap).data('id');
            $('.create-menu').trigger('restore', {layer: id});
        });
    }
};

module.exports = layer;
