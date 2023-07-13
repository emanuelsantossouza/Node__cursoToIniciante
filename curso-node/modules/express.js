const express = require('express');
const app = express();
const port = 8081;
const UserModel = require('../src/models/user.models');
const { default: mongoose } = require('mongoose');

app.use(express.json());

// EndPoints
app.get('/home', (req, res) => {
    res.status(200).send('<h1>Hello World!</h1>');
});


app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send('Occorreu um erro no servidor:', error.message);
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const usuarioId = req.params.id

        const users = await UserModel.findById(usuarioId);
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send('Occorreu um erro no servidor:', error.message);
    }
});

app.post('/users', async (req, res) => {
    const user = await UserModel.create(req.body)
    try {
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.patch('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await UserModel.findByIdAndUpdate(userId, req.body, {new: true});
    
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


app.delete('users/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await UserModel.findByIdAndRemove(userId);
        res.status(200).send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})
app.listen(port, () => console.log('Rodando na porta:', port, 'Com express'));