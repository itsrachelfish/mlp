module.exports = function(server)
{
    var app = server.app;
    var config = server.config;
    var event = server.event;
    var model = server.model;

    app.get('/edit/:page', function(req, res)
    {
        event.emit('render', req, res, {view: 'edit'});
    });
}
