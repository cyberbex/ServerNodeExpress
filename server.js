const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text name="nome">
        <button>Olá Mundo</button>
        </form>

    `);
});

//recebendo parametros via url, "?" faz com que o parametro seja opcional
app.get('/teste/:parametro_1?/:parametro_2?',(req,res)=>{
    console.log(req.params);
    res.send(req.params.parametro_2);
});

//recebendo parametros via url, no forma de query string
//localhost:3000/teste_2/?nome=bruno&temp=45.6 recebido pela url do navegador
//o ponto de interrogacao indica que é uma query string
 app.get('/teste_2/:parametro_1?/:parametro_2?',(req,res)=>{
    res.send(req.query.nome);
    console.log(req.query.temp);
    
}); 

app.listen(3000,()=>{
    console.log('Acessar http://localHost:3000');
    console.log('servidor rodando na porta 3000')
});
