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
    var template = $('.templates .menu').clone();
    $(template).find('.title').text(this.title);

    if(this.class)
    {
        $(template).addClass(this.class);
    }

    if(this.selector)
    {
        template.appendChild($(this.selector).el[0]);
    }

    // Restore this menu to its original position / state (minimized, etc.) from local storage

    $('.viewport').append(template);
}

// Minimize this menu to the bottom of the screen
Menu.prototype.minimize = function()
{

}

// Restore a minimized menu to its original position
Menu.prototype.restore = function()
{

}

// Resize a menu
Menu.prototype.resize = function()
{

}

// Save the position / state of the menu in local storage
Menu.prototype.save = function()
{

}

// Close a menu
Menu.prototype.close = function()
{

}

module.exports = Menu;
