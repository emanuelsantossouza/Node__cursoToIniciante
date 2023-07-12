// Importando um modulo, a class person para o
// Arquivo atual
const { Person } = require('./person');
const Emanuel = new Person("Emanuel");
console.log(Emanuel.sayMyName());


// Importando o module Path
// require('./modules/path');

// Importanto o module Fs
// require('./modules/fs');

// Importanto o module http para a API
require('./modules/http');