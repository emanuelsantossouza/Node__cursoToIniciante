const path = require('path');

// Basename - Nome do arquivo autal
console.log(`Nome do arquivo atual: ${path.basename(__filename)}`)

// Dirname - Nome do diretorio atual completo
console.log(`Nome do diretório atual: ${path.dirname(__filename)}`);

// Extname - Pegando o nome da extensão do arquivo 'js', 'html'
console.log(`Nome da extensão do aquivo: ${path.extname(__filename)}`);

// Criando um objeto Path
console.log(path.parse(__filename));

// Juntar caminho de arquivos e criando arquivos
console.log(path.join(__dirname, 'test', 'html.html'));