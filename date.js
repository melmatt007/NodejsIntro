var http = require('http');
var date = require('./date_module')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time right now is: " + date.getDate());
    res.end();
}).listen(8080);