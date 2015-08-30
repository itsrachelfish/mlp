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
                'menu/menu': 'menus/menu',
                'menu/toolbar': 'menus/toolbar',
                'menu/timeline': 'menus/timeline',
                'menu/options': 'menus/options',
                'menu/create': 'menus/create',
                'menu/modify': 'menus/modify',
                'menu/confirm': 'menus/confirm',
                'object/image': 'objects/image',
                'object/text': 'objects/text',
            }
        }
        
        event.emit('render', req, res, options);
    });
}
