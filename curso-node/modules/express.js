const express = require('express');
const app = express();
const port = 8081;
const UserModel = require('../src/models/user.models');
const { default: mongoose } = require('mongoose');

const Swal = require('sweetalert2')

const bodyParser = require('body-parser');

// Configuração para permitir o uso de dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Middlewares
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use((req, res, next) => {
    console.log(`Resquest type: ${req.method}`);
    console.log(`Content type: ${req.headers["content-type"]}`);
    console.log(`Date: ${new Date()}`);

    next();
})

//Novo usuario
// Defina a rota para processar os dados enviados pelo formulário
app.post(`/users/cadastro`, async (req, res) => {
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const endereco = req.body.endereco;

    const newUser = {
        firstName: nome,
        lastName: telefone,
        email: email,
        password: endereco
    }

    console.log(newUser);
    const salvandoToMongoDb = await UserModel.create(newUser)
    try {
        res.status(201).json(salvandoToMongoDb);
        console.log('Usuario cadastrado com sucesso!');

    } catch (error) {
        res.status(500).send(error.message);
    }

    // Aqui, você pode realizar qualquer lógica desejada com os dados recebidos.
    // Por exemplo, salvar os dados em um banco de dados, enviar um e-mail de confirmação, etc.
    // Você pode substituir o "console.log()" abaixo pela lógica desejada.

    console.log('Dados recebidos do formulário:', newUser);

    // Enviar a resposta ao cliente após a lógica estar completa
    res.status(201).json(newUser);
});


app.get('/users/cadastro/views', async (req, res) => {
    res.render('cadastro-index');
})



app.get('**', async (req, res) => {
    const user = await UserModel.find({});

    console.log(user);
    res.render('index', { user });
})

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
        const user = await UserModel.findByIdAndUpdate(userId, req.body, { new: true });

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await UserModel.findByIdAndRemove(userId);
        res.status(200).send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});



app.listen(port, () => console.log('Rodando na porta:', port, 'Com express'));