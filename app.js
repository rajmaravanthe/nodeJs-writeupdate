var http = require('http');
fs = require('fs')

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/plain" });
    var writeStream = fs.createWriteStream('./file.txt', {
        flags: 'a'
    });


    writeStream.once('open', function (fd) {
        writeStream.write("My first row\n");
        writeStream.write("My second row\n");
        writeStream.end();
    });

});

server.listen(3000);

