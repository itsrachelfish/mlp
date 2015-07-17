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
                timeline: 'partials/timeline'
            }
        }
        
        event.emit('render', req, res, options);
    });
}
