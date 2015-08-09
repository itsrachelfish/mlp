var Menu = require('../plugins/menu');

$(document).ready(function()
{
    var menu = new Menu({title: 'Create Object', selector: '.templates .create', class: 'create-menu'});
    $('.create-menu').dragondrop({handle: '.title'});

    $('.create-menu').on('dragend', function()
    {
        menu.save();
    });
});
