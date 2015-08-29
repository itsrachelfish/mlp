var Menu = require('../plugins/menu');

$(document).ready(function()
{
    var menu = new Menu({title: 'Create Object', selector: '.templates .create', class: 'create-menu', state: 'closed'});

    // Make sure nothing is selected by default
    $('.create .type option').eq(0).prop('selected', true);

    // Show / hide the preset options when necessary
    $('.create .type').on('change', function()
    {
        var type = $(this).value().toLowerCase();

        if(type == 'preset')
        {
            $('.create .presets').style({display: 'block'});
        }
        else
        {
            $('.create .presets').style({display: 'none'});
        }
    });

    $('.create .cancel').on('click', function()
    {
        menu.close();
    });
});
