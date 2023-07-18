const mongoose = require('mongoose');


const connectToDatabse = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://vercel-admin-user:U8s3wbHpYmaqrsi0@emanuelserver.isvkgdu.mongodb.net/nodeJsDb?retryWrites=true&w=majority`
        );
        console.log(`Banco connectado com sucesso!`);
    } catch (error) {
        console.log(`Ocorreu um erro ao se connectar ao banco de dados ${error}`, error);
    }
}


module.exports = connectToDatabse;