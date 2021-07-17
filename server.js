//Sistema full MVC(Backend e frontend tudo junto)
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

//----declaração do recibimento de um objeto pelo corpo da requisição---
app.use( express.urlencoded({extended:true}));

//--conteudo statico
app.use(express.static(path.resolve(__dirname, 'public')));

//caminho para views usando o ejs(tipo html com super poderes)
app.set('views',path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);


app.listen(3000,()=>{
    console.log('Acessar http://localHost:3000');
    console.log('servidor rodando na porta 3000')
});
