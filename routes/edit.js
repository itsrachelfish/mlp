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
                menu: 'partials/menu',
                toolbar: 'partials/toolbar',
                timeline: 'partials/timeline',
                options: 'partials/options'
            }
        }
        
        event.emit('render', req, res, options);
    });
}
