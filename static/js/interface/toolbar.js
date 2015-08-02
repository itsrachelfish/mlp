var Menu = require('../plugins/menu');

$(document).ready(function()
{
    var menu = new Menu({title: 'Toolbar', selector: '.templates .toolbar', class: 'toolbar-menu', buttons: ['minimize']});
    $('.toolbar-menu').dragondrop({handle: '.title'});
});
