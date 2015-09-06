var Menu = require('../plugins/menu');

$(document).ready(function()
{
    var menu = new Menu({title: 'Are you sure?', selector: '.templates .confirm', class: 'confirm-menu', buttons: [], state: 'closed'});
});
