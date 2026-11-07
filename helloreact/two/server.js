const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        const html = fs.readFileSync('index.html');

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(html);
    }

});

server.listen(8080, () => {
    console.log('Server running on port 8080');
});
