//Sistema full MVC(Backend e frontend tudo junto)
const express = require('express');
const app = express();
const routes = require('./routes');

//----declaração do recibimento de um objeto pelo corpo da requisição---
app.use( express.urlencoded({extended:true}));
app.use(routes);

app.listen(3000,()=>{
    console.log('Acessar http://localHost:3000');
    console.log('servidor rodando na porta 3000')
});
