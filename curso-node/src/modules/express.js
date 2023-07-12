const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.status(200).send('<h1>Hello World!</h1>');
})


app.get('/users', (req, res) => {
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

    res.status(200).send(users);
})
const port = 8081;

app.listen(port, () => console.log('Rodando na porta:', port, 'Com express'));