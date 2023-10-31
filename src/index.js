const express = require('express');
const knex = require('knex');
const bcrypt = require('bcrypt');
require('dotenv').config()
const app = express();
app.use(express.json())



app.get('/pessoas', async (req, res) => {
    try {
        const pessoaslist = await knex('pessoas').select('*')
        res.json(pessoaslist)
    } catch (error) {
        console.log(error.message)
    }
})

app.post('/pessoas', async (req, res) => {
    try {
        const { nome, senha } = req.body
        const senhaCrypt = await bcrypt.hash(senha, 10)
        knex('pessoas').insert({ nome: nome, pwd: senhaCrypt })
        res.json('criado com sucesso')
    } catch (error) {
        console.log(error.message)
    }
})


app.listen(process.env.PORT)