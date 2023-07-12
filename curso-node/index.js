// Importando um modulo, a class person para o
// Arquivo atual
const dotenv = require("dotenv");
const connectToDatabase = require('./src/database/connection');

dotenv.config();

connectToDatabase();

// Importando o module Path
// require('./modules/path');

// Importando o module Fs
// require('./modules/fs');

// Importando o module http para a API
// require('./modules/http');

// Importando o module express com a API
// require('./src/modules/express');