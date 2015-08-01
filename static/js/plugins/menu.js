// General purpose plugin for creating menu windows
var Menu = function(options)
{
    this.title = options.title || 'Menu';
    this.selector = options.selector || false;
    this.class = options.class;

    // Initialize the menu
    this.init();
}

Menu.prototype.init = function()
{
    // Clone the menu template
    var template = $('.menu-template').clone();
    $(template).removeClass('menu-template');
    $(template).find('.title').text(this.title);

    if(this.class)
    {
        $(template).addClass(this.class);
    }

    if(this.selector)
    {
        template.appendChild($(this.selector).el[0]);
    }

    $('.viewport').append(template);
}

module.exports = Menu;
