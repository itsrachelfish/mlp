var Menu = require('../plugins/menu');

$(document).ready(function()
{
    var menu = new Menu({title: 'Modify Object', selector: '.templates .modify', class: 'object-menu', state: 'closed', buttons: ['close']});

    $('.object-menu').on('restore', function(event)
    {
        // Display type specific options
        var object = event.detail.object;
        var type = $('#' + object).data('type');

        $('.modify .group').addClass('hidden');
        $('.modify .group.' + type).removeClass('hidden');
    });
});
