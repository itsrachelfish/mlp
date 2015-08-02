// General purpose plugin for creating menu windows
var Menu = function(options)
{
    this.title = options.title || 'Menu';
    this.selector = options.selector || false;
    this.class = options.class;

    // Initialize the menu
    this.init();
    this.events();
}

Menu.prototype.init = function()
{
    // Clone the menu template
    this.template = $('.templates .menu').clone();
    $(this.template).find('.title .text').text(this.title);

    if(this.class)
    {
        $(this.template).addClass(this.class);
    }

    if(this.selector)
    {
        $(this.template).find('.content').el[0].appendChild($(this.selector).el[0]);
    }

    // Restore this menu to its original position / state (minimized, etc.) from local storage

    $('.viewport').el[0].appendChild(this.template);

    // Create a minimized template for use latter
    this.minimized = $('.templates .minimized').clone();
    $(this.minimized).find('.title').text(this.title);
}

// Bind specific events for this menu
Menu.prototype.events = function()
{
    var menu = this;
    
    $(this.template).on('click', '.minimize', function()
    {
        menu.minimize();
    });

    $(this.template).on('click', '.close', function()
    {
        menu.close();
    });

    $(this.minimized).on('click', function()
    {
        menu.restore();
    });

    // TODO: Fix dragondrop, then replace this with it
    $(this.template).on('mousedown', '.resize', function(event)
    {
        event.preventDefault();
        
        menu.resizing = true;
        menu.cursor = {x: event.clientX, y: event.clientY};
    });

    $('html').on('mousemove', function(event)
    {
        if(menu.resizing)
        {
            var delta =
            {
                x: event.clientX - menu.cursor.x,
                y: event.clientY - menu.cursor.y
            };

            menu.cursor = {x: event.clientX, y: event.clientY};
            menu.resize(delta);
        }
    });

    $('html').on('mouseup', function()
    {
        menu.resizing = false;
        $(menu.template).trigger('resized');
    });
}

// Minimize this menu to the bottom of the screen
Menu.prototype.minimize = function()
{
    $(this.template).style({display: 'none'});
    $('.tray').el[0].appendChild(this.minimized);
}

// Restore a minimized menu to its original position
Menu.prototype.restore = function()
{
    $(this.template).style({display: 'block'});
    $(this.minimized).remove();
}

// Resize a menu
Menu.prototype.resize = function(delta)
{
    // Get the current size
    var size = $(this.template).find('.content').size();

    // Enforce a minimum size of 200x100 pixels
    if(size.width + delta.x < 200)
    {
        size.width = '200px';
    }
    else
    {
        size.width = size.width + delta.x + 'px';
    }
    
    if(size.height + delta.y < 100)
    {
        size.height = '100px';
    }
    else
    {
        size.height = size.height + delta.y + 'px'
    }

    // Resize this menu
    $(this.template).find('.content').style(size);
}

// Save the position / state of the menu in local storage
Menu.prototype.save = function()
{

}

// Close a menu
Menu.prototype.close = function()
{
    $(this.template).style({display: 'none'});

    // TODO: Trigger an event to handle external garbage collection?
}

module.exports = Menu;
