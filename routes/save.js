module.exports = function(server)
{
    var app = server.app;
    var config = server.config;
    var event = server.event;
    var model = server.model;

    app.post('/save/:page', function(req, res)
    {
        res.end('Save stuff!');
    });
}
