const http = require('http');

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>React Hello World</title>
</head>
<body>
    <div id="root"></div>

    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script>
        function App() {
            return React.createElement(
                'h1',
                null,
                'Hello World from React!'
            );
        }

        const root = ReactDOM.createRoot(
            document.getElementById('root')
        );

        root.render(React.createElement(App));
    </script>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(html);
});

server.listen(8080, () => {
    console.log('Server running on port 8080');
});
