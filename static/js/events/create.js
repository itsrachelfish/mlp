var Menu = require('../plugins/menu');

$(document).ready(function()
{
    var menu = new Menu({title: 'Create Object', selector: '.templates .create', class: 'create-menu', state: 'closed'});
});
