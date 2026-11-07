const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    console.log('Request:', req.url);

    const file = path.join(__dirname, 'index.html');

    fs.readFile(file, (err, data) => {

        if (err) {
            res.writeHead(500);
            res.end('Cannot read index.html');
            console.log(err);
            return;
        }

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(data);
    });

});

server.listen(8080, '0.0.0.0', () => {
    console.log('Server running on port 8080');
});
