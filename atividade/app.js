// inportar módulo express
const express = require('express');

//criar variavel para ter acessoas funcionalidades do express
const app = express();

// /**
//  * express.static serve para identificar um local no diretório do projeto
// */

app.use(express.static(`${__dirname}/public`)) // dirname =  identifica o diretorio raiz

app.get('/', function (req, res) {
    //     res.sendFile('/publico/html/index.html')//sendFile = carregar uma pagina
    res.sendFile(`${__dirname}/public/html/home.html`)
})

app.get('/contato', function (req, res) {
    //     res.sendFile('/publico/html/index.html')//sendFile = carregar uma pagina
    res.sendFile(`${__dirname}/public/html/contato.html`)
})

app.get('/cadastro', function (req, res) {
    //     res.sendFile('/publico/html/index.html')//sendFile = carregar uma pagina
    res.sendFile(`${__dirname}/public/html/cadastro.html`)
})

//criando pagina de erro

app.use(function (req ,res) {
    res.status(404).sendFile(`${__dirname}/public/html/404.html`)
})

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');

})