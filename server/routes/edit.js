module.exports = function(server)
{
    var app = server.app;
    var config = server.config;
    var event = server.event;
    var model = server.model;

    app.get('/edit/:page', function(req, res)
    {
        var options =
        {
            view: 'edit',
            partials:
            {
                menu: 'menus/menu',
                toolbar: 'menus/toolbar',
                timeline: 'menus/timeline',
                options: 'menus/options',
                create: 'menus/create',
                object: 'menus/object',
                confirm: 'menus/confirm',
            }
        }
        
        event.emit('render', req, res, options);
    });
}
