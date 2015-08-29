var Menu = require('../plugins/menu');
var create = require('../src/create.js');

$(document).ready(function()
{
    var menu = new Menu({title: 'Create Object', selector: '.templates .create', class: 'create-menu', state: 'closed'});

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
        if(typeof create[type] == "function")
        {
            var object = create[type]();
            menu.close();

            $('.object-menu').trigger('restore');
        }
    });

    $('.create .cancel').on('click', function()
    {
        menu.close();
    });
});
