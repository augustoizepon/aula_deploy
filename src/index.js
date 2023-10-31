const express = require('express');
const knex = require('knex');
const bcrypt = require('bcrypt');
require('dotenv').config()
const app = express();
app.use(express.json())



app.get('/pessoas', async (req, res) => {
   const pessoaslist = await knex('pessoas').select('*')
   res.json(pessoaslist)
})

app.post('/pessoas', async(req,  res) =>{
    const {nome, senha} = req.body
    const senhaCrypt =  await bcrypt.hash(senha, 10)
    knex('pessoas').insert({nome: nome, senha: senhaCrypt})
    res.json('criado com sucesso')
})


app.listen(process.env.PORT)