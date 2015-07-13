// Start the server
var config = require('./config');
var server = require('wetfish-server').createServer(config);

// Add a custom model
require('./models/example')(server.model);

// Add some routes
require('./routes/home')(server);
require('./routes/edit')(server);
require('./routes/save')(server);
require('./routes/view')(server);
