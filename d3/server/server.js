// if this script fails - run 'npm install connect' in the d3 folder
var connect = require('connect');
var port = 8080;
var folder = __dirname + '\\..';
console.log('Serving ' + folder + ' on http://localhost:' + port);
connect.createServer(
    connect.static(folder)
).listen(port);
