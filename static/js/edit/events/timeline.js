// Code for the timeline
var Menu = require('../plugins/menu');
var timeline = require('../src/timeline');
var layer = require('../src/layer');

$(document).ready(function()
{
    var menu = new Menu({title: 'Timeline', selector: '.templates .timeline', class: 'timeline-menu'});
    
    $('.timeline .add-layer').on('click', function()
    {
        layer.add();
    });

    $('.timeline .duration').on('input', function()
    {
        // Update tick marks on each layer whenever the duration is changed
        $('.timeline .layer').each(function()
        {
            var duration = $('.timeline .duration').value();
            timeline.drawTicks(this, $(this).find('canvas.ticks').el[0], duration);
        });
    });

    // Redraw canvases when the menu is resized
    $('.timeline-menu').on('resized', function()
    {
        $('.timeline .layer').each(function()
        {
            var duration = $('.timeline .duration').value();
            timeline.drawTicks(this, $(this).find('canvas.ticks').el[0], duration);
        });
    });
});
