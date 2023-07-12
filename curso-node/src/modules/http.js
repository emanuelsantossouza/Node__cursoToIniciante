const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {


    if (req.url === '/users') {
        const users = [
            {
                name: 'Emanuel',
                email: 'emanuel@gmail.com'
            },
            {
                name: 'Maria',
                email: 'mah@gmail.com'
            }
        ]
        const convertendoArrayUsers = JSON.stringify(users);

        res.writeHead(200, { 'Content-Type': 'application/Json' });
        res.end(convertendoArrayUsers)
    } else if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': "text/html" });
        res.end('<h1>Home Page</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Não foi possivel encontrar caminho correspondente</h1><p>Tente o localhost:8080/home</p>', 'utf8');
    }
});

server.listen(port, () => console.log('Rodando na porta:', port));