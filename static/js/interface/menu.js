// Generic class for creating menu windows
var Menu = function(options)
{
    this.title = options.title || 'Menu';
    this.selector = options.selector || false;

    // Initialize the menu
    this.init();
}

Menu.prototype.init = function()
{
    // Clone the menu template
    var template = $('.menu-template').clone();
    $(template).removeClass('menu-template');
    
    if(this.selector)
    {
        template.appendChild($(this.selector).el[0]);
    }

console.log(template);
    $('.viewport').append(template);
}

module.exports = Menu;
