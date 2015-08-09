var Menu = require('../plugins/menu');

$(document).ready(function()
{
    var menu = new Menu({title: 'Edit Object', selector: '.templates .object', class: 'object-menu'});
    $('.object-menu').dragondrop({handle: '.title'});

    $('.object-menu').on('dragend', function()
    {
        menu.save();
    });
});
