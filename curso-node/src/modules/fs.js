const fs = require('fs');
const path = require('path');

// Criar uma pasta
// Criar uma pasta
fs.mkdir(path.join(__dirname, '/bblioteca'), (error) => {
    if (error) {
        return console.log('A pasta já existe', error)
    }
});

// Criando um arquivo dentro de uma pasta já existente e escrever nele
fs.writeFile(
    path.join(__dirname, '/bblioteca', 'livro1.html'),
    '<h1>livro 1</h1>', (error) => {
        if (error) {
            return console.log('Ocorreu um erro:', error);
        }
        console.log("Aquivo criado com sucesso!");
    });

// Adicionando à um arquivo ou escreve nele
fs.appendFile(path.join(__dirname, '/bblioteca', 'livro1.html'),
    ' Escrito por: hello Emanuel',
    (error) => {
        if (error) {
            return console.log(error);
        }

        console.log('Aquivo alterado com sucesso!');
    })
// Ler um arquivo
fs.readFile(
    path.join(__dirname, '/bblioteca', 'livro1.html'), "utf-8",
    (error, data) => {
        if (error) {
            return console.log('Ocorreu um erro:', error);
        }
        console.log("Aquivo lido com sucesso:", data);
    }
)

// Criando a pasta animes
fs.mkdir(path.join(__dirname, 'Animes'),
    (erro) => {
        if (erro) {
            return console.log('Ocorreu um erro:', erro);
        }
        console.log('Pasta criada com sucesso!');
    });
// Escrevendo, encrementando e lendo o arquivo da pasta animes;
fs.writeFile(path.join(__dirname, 'Animes', 'Naruto.html'),
    "Naruto é o protagonista",
    (erro) => {
        if (erro) {
            return console.log('Ocorreu um erro:', erro);
        }

        fs.appendFile(path.join(__dirname, 'Animes', 'Naruto.html'),
            '. Hinata ama o Naruto', (erro) => {
                if (erro) {
                    return console.log('Ocooreu um erro: ', erro);
                }
                console.log("Arquivo alterado com sucesso");
            },
        );

        fs.readFile(path.join(__dirname, 'Animes', 'Naruto.html'),
            'utf8',
            (erro, data) => {
                if (erro) {
                    return console.log("Ocorreu um erro: ", erro);
                }
                console.log(data);
            }
        );
    },
); 