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

    // Restore this menu to its original size / position from local storage
    var size = localStorage.getItem(this.title + '-size');
    var position = localStorage.getItem(this.title + '-pos')
    var state = localStorage.getItem(this.title + '-state')
    
    if(size)
    {
        size = JSON.parse(size);
        $(this.template).find('.content').style({height: size.height + 'px', width: size.width + 'px'});
    }

    if(position)
    {
        position = JSON.parse(position);
        $(this.template).style({top: position.top + 'px', left: position.left + 'px'});
    }
    
    $('.viewport').el[0].appendChild(this.template);

    // Create a minimized template for use latter
    this.minimized = $('.templates .minimized').clone();
    $(this.minimized).find('.title').text(this.title);

    // Check if the menu should start minimized or closed
    if(state == 'minimized')
    {
        this.minimize();
    }
    else if(state == 'closed')
    {
        this.close();
    }
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
        if(menu.resizing)
        {
            menu.resizing = false;
            menu.save();
            
            $(menu.template).trigger('resized');
        }
    });
}

// Minimize this menu to the bottom of the screen
Menu.prototype.minimize = function()
{
    $(this.template).style({display: 'none'});
    $('.tray').el[0].appendChild(this.minimized);
    localStorage.setItem(this.title + '-state', 'minimized');
}

// Restore a minimized menu to its original position
Menu.prototype.restore = function()
{
    $(this.template).style({display: 'block'});
    $(this.minimized).remove();
    localStorage.setItem(this.title + '-state', 'active');
}

// Resize a menu
Menu.prototype.resize = function(delta)
{
    // Get the current size
    var size = $(this.template).find('.content').size();

    // Enforce a minimum size of 120x120 pixels
    if(size.width + delta.x < 120)
    {
        size.width = '120px';
    }
    else
    {
        size.width = size.width + delta.x + 'px';
    }
    
    if(size.height + delta.y < 120)
    {
        size.height = '120px';
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
    var size = $(this.template).find('.content').size();
    var position = $(this.template).position();

    localStorage.setItem(this.title + '-size', JSON.stringify(size))
    localStorage.setItem(this.title + '-pos', JSON.stringify(position));
}

// Close a menu
Menu.prototype.close = function()
{
    $(this.template).style({display: 'none'});
    localStorage.setItem(this.title + '-state', 'closed');
}

module.exports = Menu;
