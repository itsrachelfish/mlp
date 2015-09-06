var Menu = require('../plugins/menu');
var create = require('../src/create.js');

$(document).ready(function()
{
    var menu = new Menu({title: 'Create Object', selector: '.templates .create', class: 'create-menu', state: 'closed', buttons: ['close']});

    // Make sure nothing is selected by default
    $('.create .type option').eq(0).prop('selected', true);

    // Show / hide the preset options when necessary
    $('.create .type').on('change', function()
    {
        var type = $(this).value().toLowerCase();

        if(type)
        {
            $('.create .save').removeClass('hidden');
        }
        else
        {
            $('.create .save').addClass('hidden');
        }

        if(type == 'preset')
        {
            $('.create .presets').style({display: 'block'});
        }
        else
        {
            $('.create .presets').style({display: 'none'});
        }
    });

    $('.create .save').on('click', function()
    {
        var type = $('.create .type').value();
        if(create.types.indexOf(type) > -1)
        {
            var object = create.object(type, menu.event.detail);
            menu.close();

            $('.object-menu').trigger('restore', {object: object});
        }
    });

    $('.create .cancel').on('click', function()
    {
        menu.close();
    });
});
