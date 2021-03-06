var Menu = require('../plugins/menu');

$(document).ready(function()
{
    var menu = new Menu({title: 'Toolbar', selector: '.templates .toolbar', class: 'toolbar-menu', buttons: ['minimize']});

    $('.toolbar button').on('click', function()
    {
        var selector = $(this).data('selector');

        if($(selector).style('display') == 'none')
        {
            $(selector).trigger('restore');
        }
        else
        {
            $(selector).trigger('close');
        }
    });
});
