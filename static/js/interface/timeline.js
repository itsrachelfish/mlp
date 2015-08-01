// Code for the timeline
var Menu = require('../plugins/menu');

$(document).ready(function()
{
    var menu = new Menu({title: 'Timeline', selector: '.templates .timeline', class: 'timeline-menu'});
    $('.timeline-menu').dragondrop({handle: '.title'});
});
