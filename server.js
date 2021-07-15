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
app.get('/contato',(req,res)=>{
    res.send('Obrigado por entrar em contato com a gente');
});

app.listen(3000,()=>{
    console.log('Acessar http://localHost:3000');
    console.log('servidor rodando na porta 3000')
});
