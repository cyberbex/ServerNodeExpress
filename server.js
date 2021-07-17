//Sistema full MVC(Backend e frontend tudo junto)

require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Conectei a base de dados');
        app.emit('pronto');
    })
    .catch(e=>console.log(e));




const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');

//----declaração do recibimento de um objeto pelo corpo da requisição---
app.use( express.urlencoded({extended:true}));

//--conteudo statico
app.use(express.static(path.resolve(__dirname, 'public')));

//caminho para views usando o ejs(tipo html com super poderes)
app.set('views',path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//todas as requisições, em todas as rotas, passam pelo middleware(global)
app.use(meuMiddleware);

app.use(routes);

app.on('pronto', ()=>{
    app.listen(3000,()=>{
        console.log('Acessar http://localHost:3000');
        console.log('servidor rodando na porta 3000')
    });
    
});

